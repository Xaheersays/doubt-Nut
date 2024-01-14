import React from 'react'
//https://www.flowbite-react.com/docs/components/card hover pfp
import  { formatDistanceToNow } from 'date-fns';
import {QuestionFrameCard,AlignCenter} from '../export'
const data = {
  success: true,
  message: "successfully fetched user info",
  data: {
    pfp: "default",
    followers: [
      "659f9bc93f47e2b9e29372d1"
    ],
    following: [],
    questions: [
      {
        _id: "659ed494d64db64b3d0fd087",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-10T17:32:04.236Z",
        updatedAt: "2024-01-10T17:32:04.236Z"
      },
      {
        _id: "65a4188c127534d2124fe62d",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:24.309Z",
        updatedAt: "2024-01-14T17:23:24.309Z"
      },
      {
        _id: "65a41891127534d2124fe635",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:29.364Z",
        updatedAt: "2024-01-14T17:23:29.364Z"
      },
      {
        _id: "659ed494d64db64b3d0fd087",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-10T17:32:04.236Z",
        updatedAt: "2024-01-10T17:32:04.236Z"
      },
      {
        _id: "65a4188c127534d2124fe62d",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:24.309Z",
        updatedAt: "2024-01-14T17:23:24.309Z"
      },
      {
        _id: "65a41891127534d2124fe635",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:29.364Z",
        updatedAt: "2024-01-14T17:23:29.364Z"
      },
      {
        _id: "659ed494d64db64b3d0fd087",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-10T17:32:04.236Z",
        updatedAt: "2024-01-10T17:32:04.236Z"
      },
      {
        _id: "65a4188c127534d2124fe62d",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:24.309Z",
        updatedAt: "2024-01-14T17:23:24.309Z"
      },
      {
        _id: "65a41891127534d2124fe635",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:29.364Z",
        updatedAt: "2024-01-14T17:23:29.364Z"
      },
      {
        _id: "659ed494d64db64b3d0fd087",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-10T17:32:04.236Z",
        updatedAt: "2024-01-10T17:32:04.236Z"
      },
      {
        _id: "65a4188c127534d2124fe62d",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:24.309Z",
        updatedAt: "2024-01-14T17:23:24.309Z"
      },
      {
        _id: "65a41891127534d2124fe635",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:23:29.364Z",
        updatedAt: "2024-01-14T17:23:29.364Z"
      },
    ],
    answers: [],
    drafts: [
      {
        _id: "65a4142daa408f904521b68d",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:04:45.823Z",
        updatedAt: "2024-01-14T17:04:45.823Z"
      },
      {
        _id: "65a41433aa408f904521b695",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:04:51.134Z",
        updatedAt: "2024-01-14T17:04:51.134Z"
      },
      {
        _id: "65a4144aaa408f904521b69d",
        title: "Q1",
        upvotes: [],
        downvotes: [],
        createdAt: "2024-01-14T17:05:14.290Z",
        updatedAt: "2024-01-14T17:05:14.290Z"
      }
    ]
  }
}
function AskedQuestions() {

  // fetch data and render 


  const questions = data.data.questions
  return (
    // <AlignCenter>
      <div className='flex  gap-2 flex-wrap justify-between items-center'>
        {
          questions.map(qobj=>{
            
            return <QuestionFrameCard key={qobj._id} title={qobj.title}
                                      upvotes={qobj.upvotes.length}
                                      downvotes={qobj.downvotes.length}
                                      ct = {formatDistanceToNow(new Date(qobj.createdAt), { addSuffix: true })}
                                      lt = {formatDistanceToNow(new Date(qobj.updatedAt), { addSuffix: true })}

             />
          })
        }
      </div>
    // </AlignCenter>

  )
}

export default AskedQuestions