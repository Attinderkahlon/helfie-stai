import { useState } from 'react'

import { MaleData } from '../../types/male'
import ChatContainer from '../container/ChatContainer'
import ChatWrapper from '../container/ChatWrapper'

export type Props = {
  formData: MaleData
}

export function Male({}: Props) {
  const [formData, setFormData] = useState({
    gender: '',
    symptoms: '',
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
  return (
    <ChatWrapper>
      <ChatContainer>
        <h2> Do you have any symptoms on any of these locations today?</h2>
        <ul className='list-disc p-3 [&>li]:ml-2'>
          <li>In your groin</li>
          <li>On your penis</li>
          <li>At the eye of your penis</li>
          <li>On your testicles or scrotum</li>
          <li>Around your bottom or anus</li>
        </ul>
      </ChatContainer>
      <ChatContainer type='answer'>
        <input
          type='radio'
          id='male'
          name='symptoms'
          value='yes'
          className='radio h-8 w-8 radio-accent'
          checked={formData.symptoms === 'yes'}
          onChange={handleChange}
        />
      </ChatContainer>
    </ChatWrapper>
    // <>
    //   {/* <Loader /> */}
    //   {/* <form className='spinner-7'> </form> */}
    //   <div className='rounded-r-lg bg-slate-300 text-lg text-dark h-full m-3 p-4  w-3/6 animate-fade-in-down'>
    //     <img src={chatbot} alt='chatbot' className='w-6' />
    //     <h2> Do you have any symptoms on any of these locations today?</h2>
    //     <ul className='list-disc p-3'>
    //       <li>In your groin</li>
    //       <li>On your penis</li>
    //       <li>At the eye of your penis</li>
    //       <li>On your testicles or scrotum</li>
    //       <li>Around your bottom or anus</li>
    //     </ul>
    //   </div>
    //   <div className='flex flex-col items-end my-12'>
    //     <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3  w-3/6 animate-fade-in-down'>
    //       <img
    //         src={incognito}
    //         alt='incognito'
    //         className='w-6 bg-blue-300 rounded-full m-1'
    //       />
    //       <input
    //         type='radio'
    //         id='male'
    //         name='symptoms'
    //         value='yes'
    //         checked={formData.symptoms === 'yes'}
    //         onChange={handleChange}
    //       />
    //       <label htmlFor='yes'>Yes</label>
    //       <br></br>
    //       <input
    //         type='radio'
    //         id='female'
    //         name='symptoms'
    //         value='no'
    //         checked={formData.symptoms === 'no'}
    //         onChange={handleChange}
    //       />

    //       <label htmlFor='no'>No</label>
    //     </div>
    //   </div>
    //   {formData.symptoms && (
    //     <Survey
    //       formData={formData}
    //       onChange={handleChange}
    //       chatbot={chatbot}
    //       incognito={incognito}
    //     />
    //   )}
    // </>
  )
}
