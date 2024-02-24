import React from 'react'
import {SmallProfile,DownVotes,Upvotes,Comment, Container, AlignCenter} from '../export'
import logoimg from '../../assets/logo.png'
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import {CarouselBasicExample} from '../Feed/Feed'
import { questionStatus,questionLoading,questionObj } from '../../Store/displayQuestionSlice';
import {useDispatch,useSelector} from "react-redux"
const q = {
  "_id": "659ed494d64db64b3d0fd087",
  "title": "Q1",
  "content": "Desc1",
  "status": "active",
  "images": [
      "i1",
      "i2",
      "i3"
  ],
  "tags": [
      "t1",
      "t2",
      "t3",
      "t4"
  ],
  "upvotes": [],
  "downvotes": [],
  "replies": [],
  "createdAt": "2024-01-10T17:32:04.236Z",
  "authorId": "659a3f9c20480c1d9a0ef579",
  "updatedAt": "2024-01-10T17:32:04.236Z",
  "__v": 0
}

 
function DisplayQuestion({qid}) {
 
  //TODO:need to dispatch the async thunk func from feed

  const dispatch = useDispatch()
  const status = useSelector(questionStatus)
  const loading = useSelector(questionLoading)
  const question = useSelector(questionObj)

  return (
    <Container>
      <AlignCenter>
        <div className=' px-4'>
          <Question post={{}}/>
        </div>
      </AlignCenter>
    </Container>

  )
}
const lg = 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

const Question = ({post})=>{
  return (
      <div className='flex gap-3'>
        <div className='cursor-pointer'>
                <SmallProfile src={logoimg}/>
        </div>
        <div className=''> {/* iske and sara content*/ }
          <div className=' flex flex-col gap-4  border   bg-slate-700 bg-opacity-50 
                    backdrop-filter backdrop-blur-md  rounded-md px-6 py-4'>
            <div className='flex justify-between'>
              <div>
                <p className='font-bold text-xl cursor-pointer'>zaheer shaikh</p>
                <p className='text-gray-400 cursor-pointer'>@xaheersays</p>
              </div>
              <p className='cursor-pointer'><PiDotsThreeCircleDuotone size={20}/></p>
            </div>
            <div className='cursor-pointer'>
              {post.content}
              content
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio cumque, asperiores corporis, accusantium dicta nemo exercitationem repellat obcaecati saepe accusamus cum harum cupiditate facilis neque et, molestias similique. Fugit, maxime ipsam!
            </div>
            <div>
              <CarouselBasicExample sources={[lg,lg,lg]}/>
            </div>
            <div className='flex gap-4'>
              <p className='flex gap-1'>4<Upvotes/></p>
              <p className='flex gap-1'>4<DownVotes/></p>
              <p className='flex gap-1'>4<Comment/></p>
            </div>
            <div>
              comments
              <Replies/>
            </div>
          </div>
        </div>
        
      </div>
  )
}

const Replies = ()=>{
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellendus omnis suscipit tempora quod harum facere corporis magnam perferendis quam soluta delectus, at voluptas consequatur beatae quos tempore tenetur sit?
    </div>
  )
}




export default DisplayQuestion