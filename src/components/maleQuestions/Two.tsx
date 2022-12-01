import { useState } from 'react'
export type TwoProps = {
  chatbot?: HTMLImageElement
  incognito?: HTMLImageElement
  onChange: (event: any) => void
}

export default function Two({ chatbot, incognito, onChange }: TwoProps) {
  const [checkbox, setCheckbox] = useState({
    Itch: false,
    Rash: false,
    Lumps: false,
    Spots: false,
    Blisters: false,
    none: false,
  })

  const handleChangeOne = () => {
    setCheckbox(!checkbox)
  }

  return (
    <>
      <div className='rounded-r-lg bg-slate-300 text-lg text-dark p-4 m-3 w-3/6 animate-fade-in-down h-screen'>
        <img src={chatbot} alt='chatbot' className='w-6' />
        <h2>
          Are you experiencing any of the following symptoms on the skin of you
          genital area as shown in the diagram ?
        </h2>
        <h3>Select all that apply</h3>
      </div>
      <div className='flex flex-col items-end '>
        <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3  w-3/6 animate-fade-in-down'>
          <img
            src={incognito}
            alt='incognito'
            className='w-6 bg-blue-300 rounded-full m-1'
          />
          <ul>
            <li>
              {' '}
              <input
                type='checkbox'
                id='itch'
                checked={checkbox.Itch}
                onChange={handleChangeOne}
                name='Itch'
              />
              <label htmlFor='itch'>Itch</label>
            </li>
            <li>
              <input
                type='checkbox'
                id='rash'
                checked={checkbox.Rash}
                onChange={handleChangeOne}
                name='Rash'
              />
              <label htmlFor='rash'>Rash</label>
            </li>

            <li>
              <input
                type='checkbox'
                id='Lumps'
                checked={checkbox.Lumps}
                onChange={handleChangeOne}
                name='Lumps'
              />
              <label htmlFor='Lumps'>Lumps</label>
            </li>

            <li>
              <input
                type='checkbox'
                id='Spots'
                checked={checkbox.Spots}
                onChange={handleChangeOne}
                name='Spots'
              />
              <label htmlFor='Spots'>Spots</label>
            </li>

            <li>
              <input
                type='checkbox'
                id='Blisters'
                checked={checkbox.Blisters}
                onChange={handleChangeOne}
                name='Blisters'
              />
              <label htmlFor='Blisters'>Blisters and/or Sores</label>
            </li>
            <li>
              <input
                type='checkbox'
                id='none'
                checked={checkbox.none}
                onChange={handleChangeOne}
                name='none'
              />
              <label htmlFor='none'>I do not have any of these symptoms</label>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
