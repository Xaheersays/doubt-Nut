import React,{memo} from 'react'
import {QuestionFrameCard} from '../export'
import  { formatDistanceToNow } from 'date-fns';

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


function Answered() {
  const questions = data.data.questions;

  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 
    mt-3'>
      {questions.map(qobj => (
        <QuestionFrameCard
        content={'Draftes Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, officiis!'}
          key={qobj._id + 'dfm0000000000000dmfk'}
          title={qobj.title}
          upvotes={qobj.upvotes.length}
          downvotes={qobj.downvotes.length}
          ct={formatDistanceToNow(new Date(qobj.createdAt), { addSuffix: true })}
          className='bg-white p-4 rounded shadow'
        />
      ))}
    </div>
  );
}

export default memo(Answered)