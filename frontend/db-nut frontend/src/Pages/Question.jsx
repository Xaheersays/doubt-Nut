import React from 'react'
import { DisplayQuestion } from '../Components/export'
import { useParams } from 'react-router-dom'

const Question = () => {
  const {qid} = useParams()
  return (
    <div>
        <DisplayQuestion qid={qid}/>
    </div>
  )
}

export default Question