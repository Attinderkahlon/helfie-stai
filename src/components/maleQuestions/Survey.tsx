import { formData } from '../../types/male'

export type SurveyProps = {
  formData: formData
  onChange: (event: any) => void
  chatbot?: HTMLImageElement
  incognito?: HTMLImageElement
}

export default function Survey({
  formData,
  onChange,
  chatbot,
  incognito,
}: SurveyProps) {
  return (
    <>
      <div className='rounded-r-lg bg-slate-300 text-lg text-dark p-4 m-3 w-auto animate-fade-in-down'>
        <img src={chatbot} alt='chatbot' className='w-6' />
        <h2>
          We would like your help with a self-diagnosis website we are
          developing for the genral public?
        </h2>
        <h3>Please complete a 5 minute online questionare:</h3>
        <ul className='list-disc p-3'>
          <li>
            Your position in the queue or your waiting time will not be affected
          </li>
          <li>
            Your care with us will not alter whether you participate or not
          </li>
          <li>Your responses will not appear in your medical record</li>
          <li>A curtain is provided for your privacy</li>
          <li>
            Please note you will not get a result from this questionare today
          </li>
          <li>For more information please take the "What is it" brochure</li>
        </ul>
      </div>
      <div className='flex flex-col items-end my-12'>
        <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3  w-3/6 animate-fade-in-down'>
          <img
            src={incognito}
            alt='incognito'
            className='w-6 bg-blue-300 rounded-full m-1'
          />
          <input
            type='radio'
            id='male'
            name='symptoms'
            value='yes'
            checked={formData.symptoms === 'yes'}
            onChange={onChange}
          />
          <label htmlFor='yes'>Yes</label>
          <br></br>
          <input
            type='radio'
            id='female'
            name='symptoms'
            value='no'
            checked={formData.symptoms === 'no'}
            onChange={onChange}
          />

          <label htmlFor='no'>No</label>
        </div>
      </div>
    </>
  )
}
