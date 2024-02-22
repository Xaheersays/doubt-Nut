import React, { useEffect } from 'react'
import { fetchFeedErrored,fetchFeedData,fetchFeedLoading, feedStatus ,fetchFeedAsync} from '../../Store/feedSlice'
import {useSelector , useDispatch} from 'react-redux'
import { Loader,Container,AlignCenter,SmallProfile, Upvotes,DownVotes,Comment,QuestionFrameCard } from '../export';
import PostSkeleton from '../Skeleton/Post.skeleton'
import logoimg from '../../assets/logo.png'
import { PiDotsThreeCircleDuotone } from "react-icons/pi";

function Feed() {

    const dispatch = useDispatch()
    const feed = useSelector(fetchFeedData) || []
    const isLoading = useSelector(fetchFeedLoading)


    
    useEffect(()=>{
        reloadFeed()
        // setInterval(()=>{
        //     reloadFeed()
        // },4000)
    },[])

    const reloadFeed = ()=>{
        const url = 'http://localhost:3000/user/feed'
        dispatch(fetchFeedAsync({url}))
    }


    
  return (

    <div>
        <Container>
        <AlignCenter>
        {isLoading && <PostSkeleton/>}
            <AlignCenter>
               {!isLoading && <div>
                <Post post={{}}/>
                <Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/>
                </div>}
            </AlignCenter>
            
            {feed.map((post)=>(
                <div key={post.id}>
                    id :{post.id}
                    title: {post.title}
                    content:{post.content}
                </div>
            ))}
                
        </AlignCenter>
        </Container>
    </div>
  )
}



const Post = ({post})=>{
    const lg = 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return (
        // <AlignCenter>
        <div className='flex gap-2  p-2 justify-center'>   
            <div className='cursor-pointer'>
                <SmallProfile src={logoimg}/>
            </div>
            <div className='border w-1/2 flex flex-col gap-4 p-2   bg-slate-700 bg-opacity-50 
                    backdrop-filter backdrop-blur-md  rounded-md px-6'>
                <div>
                    <div className='font-semibold'>
                        <div className='flex justify-between  items-center'>
                        <p>{post.firstName}{post.lastName}zaheer shaikh</p> 
                        <p className='cursor-pointer'>< PiDotsThreeCircleDuotone size={20}/></p>
                        </div>
                    </div>
                    <p className='text-gray-500 cursor-pointer'>{post.username}@xaheersays</p>
                </div>
                <div className='font-x cursor-pointer'>{post.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio cumque, asperiores corporis, accusantium dicta nemo exercitationem repellat obcaecati saepe accusamus cum harum cupiditate facilis neque et, molestias similique. Fugit, maxime ipsam!</div>
                <div className='cursor-pointer'>
                <CarouselBasicExample sources={post.images || [lg,lg,lg]}/>
                </div>
                <div className='flex gap-3 items-center'>
                    <Upvotes/>
                    <DownVotes/>
                    <Comment/>
                </div>
            </div>

        </div>
        // </AlignCenter>
    )
}





import { TECarousel, TECarouselItem } from "tw-elements-react";

 function CarouselBasicExample({sources}) {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {sources.map((src,idx)=>(
                <TECarouselItem
                    itemID={idx}
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                    
                    <img
                        src={src}
                        className="block  w-full"
                        alt="..."
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                    {/* <h5 className="text-xl">image {idx+1 || 0} of {sources.length ||0}</h5> */}
                    {/* <p>
                        Some representative placeholder content for the first slide.
                    </p> */}
                    </div>
                </TECarouselItem>
            ))}
        </div>
      </TECarousel>
    </>
  );
}








export default Feed