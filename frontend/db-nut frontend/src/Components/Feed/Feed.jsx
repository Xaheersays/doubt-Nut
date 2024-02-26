import React,{useRef,useState,useEffect} from 'react'
import { fetchFeedErrored,fetchFeedData,fetchFeedLoading, feedStatus ,fetchFeedAsync} from '../../Store/feedSlice'
import {useSelector , useDispatch} from 'react-redux'
import { Loader,Container,AlignCenter,Tags,SmallProfile, Upvotes,DownVotes,Comment,QuestionFrameCard, Editor, Report } from '../export';
import PostSkeleton from '../Skeleton/Post.skeleton'
import logoimg from '../../assets/logo.png'
import { PiDotsThreeCircleDuotone } from "react-icons/pi";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'

function Feed() {

    const dispatch = useDispatch()
    const feed = useSelector(fetchFeedData) || []
    const isLoading = useSelector(fetchFeedLoading)
    

    
    useEffect(()=>{
        reloadFeed()
    },[])

    const reloadFeed = ()=>{
        const url = 'http://localhost:3000/user/feed'
        dispatch(fetchFeedAsync({url}))
    }


    
  return (

    <div>
        {/* <Container> */}
        <AlignCenter>
            {isLoading && <PostSkeleton/>}
        </AlignCenter>
        {!isLoading && <div>
                <Post post={{}}/>
                <Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/><Post post={{}}/>
                </div>}
        
    </div>
  )
}



export const Post = ({post})=>{
    const navigate = useNavigate()
    const [showReplyEditor,setShowReplyEditor] = useState(false)
    const [report,setReport] = useState(false)

    useEffect(() => {
        const handleEscapeKey = (event) => {
          if (event.key === 'Escape' && report) {
            setReport(false)
          }
        };
        
        

        document.addEventListener('keydown', handleEscapeKey);
        return () => {
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, [report]);

    const handleDisplayQuestion = (qid)=>{
        navigate('/question/'+qid)
        //TODO: navigate to other page and displayQuestion
    }

    const handleProfileClick = (username)=>{
        navigate('profile/'+username)
    }

    const replyToQuestion =(qid)=>{
        console.log("replying")
        setShowReplyEditor((p)=>!p)
    }

    

    const sendReply = (qid,answer)=>{

    }
    
    const lg = 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    return (
        // <AlignCenter>
        <div className={` flex gap-2  p-2 justify-center `}>   
            <div 
            className='cursor-pointer '>
                <p onClick={()=>{handleProfileClick(post.username)}} ><SmallProfile src={logoimg}/></p>
            </div>
            <div className='border md:w-1/2 flex flex-col gap-4 p-2   bg-slate-700 bg-opacity-50 
                    backdrop-filter backdrop-blur-md  rounded-md px-6'>
                <div>
                    <div className='font-semibold '>
                        <div className='flex justify-between  items-center '>
                            <p  className='cursor-pointer' onClick={()=>navigate('profile/' +post.username)}>{post.firstName}{post.lastName}zaheer shaikh</p> 
                            <div>
                                <p 
                                onClick={ ()=>setReport(p=>!p) }
                                className='cursor-pointer  hover:scale-110 transition duration-300 ease-in-out'> {report ? <IoClose size={20}/> :< PiDotsThreeCircleDuotone size={20}/>}</p>
                                <div  id='report'>
                                    {report && <div className='absolute z-50 right-1 '><Report/></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p  onClick={()=>navigate('profile/' +post.username)} className='text-gray-500 cursor-pointer'>{post.username}@xaheersays</p>
                </div>
                <div
                onClick={()=>{handleDisplayQuestion(post.id)}}
                 className='font-x cursor-pointer '>{post.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio cumque, asperiores corporis, accusantium dicta nemo exercitationem repellat obcaecati saepe accusamus cum harum cupiditate facilis neque et, molestias similique. Fugit, maxime ipsam!</div>
                <div
                onClick={()=>{handleDisplayQuestion(post.id)}}
                 className='cursor-pointer '>
                <CarouselBasicExample sources={post.images || [lg,lg,lg]}/>
                </div>
                <div><Tags tags={["t1","t1","t1","t1","t1","t1",]}/></div>
                <div className='flex gap-4 items-center flex-wrap'>
                    <p className='flex'>4<Upvotes/></p>
                    <p className='flex'>4<DownVotes/></p>
                    <p 
                    onClick={()=>{replyToQuestion(post.id)}}
                     className='flex '>4<Comment/></p>
                </div>
                <div>
                    {showReplyEditor && <div className='flex flex-col gap-4'>
                            {/* <p>Reply</p> */}
                            <p className='self-end ml-auto flex gap-3'> 
                            {/* TODO:answer obj {} */}
                                <p className='cursor-pointer' onClick={()=>{sendReply(post.id,{})}}><IoIosSend size={25}/></p>
                                <p className='cursor-pointer' onClick={()=>{setShowReplyEditor((p)=>!p)}}><AiTwotoneCloseCircle size={25}/></p>
                                </p>
                            <ReplyEditor/>
                            
                        </div>}
                </div>
            </div>

        </div>
        // </AlignCenter>
    )
}





import { TECarousel, TECarouselItem } from "tw-elements-react";

export const  CarouselBasicExample = ({sources}) => {
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





import JoditEditor from 'jodit-react';


function ReplyEditor() {
  
  const editor = useRef(null);
	const [content, setContent] = useState('');
	const config = {
		readonly: false, 
		// height: '400px',
		toolbarButtonSize: 'large',
		
		
		enableDragAndDropFileToEditor: true,
		uploader: { insertImageAsBase64URI: true },
		style: {
				background: '#0f172a',
				color: '#FFFFFF',
		},
};

	return (
		<div>
		<div className= {` text-black  
		  ` } >
				
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={4} // tabIndex of textarea
				onBlur={(newContent) => setContent(newContent)} 
				onChange={(newContent) => {}}
				/>
				
		</div>
		</div>
	);
}


  

 export {ReplyEditor}


export default Feed