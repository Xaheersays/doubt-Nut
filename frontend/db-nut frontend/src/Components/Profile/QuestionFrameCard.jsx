import React,{memo} from 'react';
import { Card } from 'flowbite-react';
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { DownVotes, Upvotes } from '../export';



function QuestionFrameCard({title,upvotes,downvotes,ct,content}) {
  return (
      <div className='mt-3 cursor-pointer'> 
        <Card className="max-w-sm min-w-44 h-52  py-4  bg-slate-600 bg-opacity-50    mt-10
                      backdrop-filter backdrop-blur-md text-white rounded-md text-center">
          <h5 className="text-2xl font-bold  text-white ">
            {title}
          </h5>
          <p className='font-normal'>{content}</p>
          <div>
            <div className='  flex  gap-3 justify-around my-3'>
              <p className=' flex items-center '> <Upvotes color={'orange'} size={20}/>  {upvotes}</p>
              <p className=' flex items-center '> <DownVotes color={'blue'} size={20}/>  {downvotes}</p>
            </div>
            <div>
              <p className='text-xs font-semibold
              '>created at  :{ct}</p>
            </div>
          </div>
        </Card>
    </div>
  );
}

export default memo(QuestionFrameCard)
