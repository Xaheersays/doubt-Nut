import React from 'react'
// import {Post} from '../export'
import {SmallProfile,DownVotes,Upvotes,Comment, Container, AlignCenter} from '../export'
import logoimg from '../../assets/logo.png'
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import {CarouselBasicExample, Post} from '../Feed/Feed'



 
function DisplayQuestion({title,avatar,upvotes,downvotes,username,images,firstName,lastName,qid}) {
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