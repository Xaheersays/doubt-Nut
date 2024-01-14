import React,{memo} from 'react';
import { Card } from 'flowbite-react';
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";



function QuestionFrameCard({title,upvotes,downvotes,ct,lt}) {
  return (
      <div className='mt-3 cursor-pointer '> 
        <Card className="max-w-sm min-w-44 h-52  p-2 bg-slate-600 bg-opacity-50    mt-10
                      backdrop-filter backdrop-blur-md text-white rounded-md text-center">
          <h5 className="text-2xl font-bold  text-white ">
            {title}
          </h5>
          {/* font-normal text-white */}
          <div>
            <div className='  flex  gap-3 justify-around'>
              <p className=' flex items-center '> <BiSolidUpvote color={'orange'} size={20}/> : {upvotes}</p>
              <p className=' flex items-center '> <BiSolidDownvote color={'blue'} size={20}/> : {downvotes}</p>
            </div>
            <div>
              <p className='text-xs font-thin
              '>created at  :{ct}</p>
              <p className='text-xs font-thin'>last updated at :{lt}</p>
            </div>
          </div>
        </Card>
    </div>
  );
}

export default memo(QuestionFrameCard)
