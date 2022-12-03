import { useState } from 'react'

import Survey from '../components/maleQuestions/Survey'
import Three from '../components/maleQuestions/Three'
import MaleFemale from '../components/questionnaire/MaleFemale'
import { useMaleStore } from '../store'

export type ModalProps = {}

export default function Modal({}: ModalProps) {
  const [gender, setGender] = useState('')

  const { maleData } = useMaleStore()

  console.log(maleData)

  return (
    <div className="p-3 mt-20">
      {!gender && (
        <MaleFemale onChange={(e) => setGender(e.currentTarget.value)} />
      )}

      {gender === 'male' && maleData.survey === undefined && <Survey />}

      {maleData.survey && maleData.photosPermission === undefined && <Three />}

      {maleData.photosPermission && <div>FOUR</div>}
    </div>
  )
}
