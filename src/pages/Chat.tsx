import { useState, useEffect } from 'react'
import PhotoSymptoms from '../components/maleQuestions/PhotoSymptoms'
import Nav from './Nav'
import Survey from '../components/maleQuestions/Survey'
import Three from '../components/maleQuestions/Three'
import MaleFemale from '../components/questionnaire/MaleFemale'
import { useMaleStore } from '../store'

export type ChatProps = {}

export default function Chat({}: ChatProps) {
  const [gender, setGender] = useState('')

  const { maleData } = useMaleStore()

  console.log(maleData)

  return (
    <>
      <Nav />
      <div className='p-3 mt-20'>
        {!gender && (
          <MaleFemale onChange={(e) => setGender(e.currentTarget.value)} />
        )}

        {gender === 'male' && <Survey />}
        {/* {gender === 'male' && maleData.survey === undefined && <Survey />} */}

        {maleData.survey && <Three />}
        {/* {maleData.survey && maleData.photosPermission === undefined && <Three />} */}

        {maleData.photosPermission && <PhotoSymptoms />}
        {maleData.photosSymptoms && <div>FIVE</div>}
      </div>
    </>
  )
}
