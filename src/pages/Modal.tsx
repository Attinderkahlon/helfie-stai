import { useState } from 'react'
import { Female } from '../components/femaleQuestions/Female'
import { Male } from '../components/maleQuestions/Male'

import chatbot from '../assets/chatbot.png'
import incognito from '../assets/incognito.png'

export default function Modal() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
  })

  function handleChange(event: any) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
  }

  return (
    <>
      <div onSubmit={handleSubmit} className='bg-slate-200 p-2 h-full'>
        <fieldset className='mt-36  '>
          {/* <div className='spinner-7 '></div> */}
          <div className='rounded-r-lg bg-slate-300 text-lg text-dark p-4 m-3 w-3/6 animate-fade-in-down'>
            <img src={chatbot} alt='chatbot' className='w-6' />
            <legend>Gender</legend>
          </div>
          <div className='flex flex-col items-end my-12 '>
            <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3 w-3/6 animate-fade-in-down h-full'>
              <img
                src={incognito}
                alt='incognito'
                className='w-6 bg-blue-300 rounded-full m-1'
              />
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor='male'>Male</label>
              <br></br>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor='female'>Female</label>
            </div>
          </div>
        </fieldset>
        {formData.gender === 'male' && (
          <Male formData={formData} chatbot={chatbot} incognito={incognito} />
        )}
        {formData.gender === 'female' && <Female />}
      </div>
    </>
  )
}
