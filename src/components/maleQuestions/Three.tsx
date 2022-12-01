export type ThreeProps = {}

export default function Three({}: ThreeProps) {
  return (
    <div>
      <div className='rounded-r-lg bg-slate-300 text-lg text-dark p-4 m-3 w-3/6 animate-fade-in-down'>
        <img src={chatbot} alt='chatbot' className='w-6' />
        <h2>
          We would like to show you a number of frank and close up photos of
          some conditions to see if they look similar to your symptoms.
        </h2>
        <h2>These photos show parts of male genitals</h2>
        <h3>Are you happy to proceed?</h3>
      </div>
      <div className='flex flex-col items-end '>
        <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3  w-3/6 animate-fade-in-down'>
          <img
            src={incognito}
            alt='incognito'
            className='w-6 bg-blue-300 rounded-full m-1'
          />
          <input
            type='radio'
            id='yes'
            name='yes'
            value='yes'
            checked={formData.symptoms === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor='yes'>Yes</label>
          <br></br>
          <input
            type='radio'
            id='female'
            name='no'
            value='no'
            checked={formData.symptoms === 'no'}
            onChange={handleChange}
          />

          <label htmlFor='no'>No</label>
        </div>
      </div>
    </div>
  )
}
