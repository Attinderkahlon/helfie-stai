export type FourProps = {}

export default function Four({}: FourProps) {
  return (
    <div>
      <div className='rounded-r-lg bg-slate-300 text-lg text-dark h-full m-3 p-4  w-3/6 animate-fade-in-down'>
        <img src={chatbot} alt='chatbot' className='w-6' />
        <h2>
          Please pick the picture that is most similar to your condition and
          answer the question below
        </h2>
      </div>
      <div className='flex flex-col items-end '>
        <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3  w-3/6 animate-fade-in-down'>
          <img
            src={incognito}
            alt='incognito'
            className='w-6 bg-blue-300 rounded-full m-1'
          />
          <p>My symptoms look:</p>
          <input
            type='radio'
            id='no'
            name='symptoms'
            value='no'
            checked={formData.symptoms === 'no'}
            onChange={handleChange}
          />
          <label htmlFor='no'>Nothing like this</label>
          <br></br>
          <input
            type='radio'
            id='somewhat'
            name='symptoms'
            value='somewhat'
            checked={formData.symptoms === 'somewhat'}
            onChange={handleChange}
          />
          <label htmlFor='somewhat'>A bit like this</label>
          <br></br>
          <input
            type='radio'
            id='yes'
            name='symptoms'
            value='yes'
            checked={formData.symptoms === 'yes'}
            onChange={handleChange}
          />
          <label htmlFor='yes'>Exactly like this</label>
        </div>
      </div>
    </div>
  )
}
