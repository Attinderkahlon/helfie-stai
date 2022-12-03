import { useMaleStore } from '../../store'
import ChatContainer from '../container/ChatContainer'
import ChatWrapper from '../container/ChatWrapper'

import one from '../../assets/images/1.jpg'
import two from '../../assets/images/2.jpg'
import three from '../../assets/images/3.jpg'
import four from '../../assets/images/4.jpg'

export type PhotosSymptomsProps = {}

export default function PhotoSymptoms({}: PhotosSymptomsProps) {
  const { setMaleData } = useMaleStore()

  return (
    <ChatWrapper>
      <ChatContainer>
        <h2>
          Please pick the picture that is most similar to your condition and
          answer the question below:
        </h2>
      </ChatContainer>
      <ChatContainer type='answer'>
        <div className='grid grid-cols-2 gap-x-0 gap-y-6 p-0 m-0'>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='1'
              onChange={(e) =>
                setMaleData({
                  photosSymptoms: e.target.value,
                })
              }
            />
            <img
              className=' w-32 h-24 rounded-lg cursor-pointer'
              src={one}
              alt='1'
            />
          </label>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='2'
              onChange={(e) =>
                setMaleData({
                  photosSymptoms: e.target.value,
                })
              }
            />
            <img
              className='w-32 h-24 rounded-lg cursor-pointer '
              src={two}
              alt='2'
            />
          </label>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='3'
              onChange={(e) =>
                setMaleData({
                  photosSymptoms: e.target.value,
                })
              }
            />
            <img
              className='w-32 h-24 rounded-lg cursor-pointer '
              src={three}
              alt='3'
            />
          </label>
          <label>
            <input
              type='radio'
              className='radio absolute opacity-0 w-0 h-0 '
              name='photo'
              value='4'
              onChange={(e) =>
                setMaleData({
                  photosSymptoms: e.target.value,
                })
              }
            />
            <img
              className='w-32 h-24 rounded-lg cursor-pointer '
              src={four}
              alt='4'
            />
          </label>
        </div>
      </ChatContainer>
    </ChatWrapper>
  )
}

// export type FourProps = {}

// export default function Four({}: FourProps) {
//   return (
//     <div>
//       <div className='rounded-r-lg bg-slate-300 text-lg text-dark h-full m-3 p-4  w-3/6 animate-fade-in-down'>
//         <img src={chatbot} alt='chatbot' className='w-6' />
//         <h2>
//           Please pick the picture that is most similar to your condition and
//           answer the question below
//         </h2>
//       </div>
//       <div className='flex flex-col items-end '>
//         <div className='rounded-l-lg bg-blue-600 text-lg text-white p-4 m-3  w-3/6 animate-fade-in-down'>
//           <img
//             src={incognito}
//             alt='incognito'
//             className='w-6 bg-blue-300 rounded-full m-1'
//           />
//           <p>My symptoms look:</p>
//           <input
//             type='radio'
//             id='no'
//             name='symptoms'
//             value='no'
//             checked={formData.symptoms === 'no'}
//             onChange={handleChange}
//           />
//           <label htmlFor='no'>Nothing like this</label>
//           <br></br>
//           <input
//             type='radio'
//             id='somewhat'
//             name='symptoms'
//             value='somewhat'
//             checked={formData.symptoms === 'somewhat'}
//             onChange={handleChange}
//           />
//           <label htmlFor='somewhat'>A bit like this</label>
//           <br></br>
//           <input
//             type='radio'
//             id='yes'
//             name='symptoms'
//             value='yes'
//             checked={formData.symptoms === 'yes'}
//             onChange={handleChange}
//           />
//           <label htmlFor='yes'>Exactly like this</label>
//         </div>
//       </div>
//     </div>
//   )
// }
