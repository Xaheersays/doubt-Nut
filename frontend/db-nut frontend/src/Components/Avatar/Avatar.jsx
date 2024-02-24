import React,{memo,useEffect} from 'react'
import { Button,AlignCenter ,ShowPfp, Follower, Following} from '../export';
import logoImg from '../../assets/logo.png'
import { useDispatch,useSelector } from 'react-redux';
import { toggleFGPopup,toggleFWPopup,showFollowers, showFollowing } from '../../Store/PopupSlice';

function Avatar() {

  const FollowersList = useSelector(showFollowers)
  const FollowingList = useSelector(showFollowing)

  const dispatch = useDispatch()
  const  displayFollowers = ()=>{
    dispatch(toggleFWPopup())
  }
  const displayFollowing = ()=>{
    dispatch(toggleFGPopup())
  }

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && (FollowersList || FollowingList )) {
        if(FollowersList)displayFollowers()
        else displayFollowing()
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [FollowersList,FollowingList]);


  return (
    <div>

    <AlignCenter>
      <div className='flex flex-col justify-center items-center gap-10 my-10'>
        <div className='h-44 w-44 cursor-pointer flex justify-center items-center '>
          <ShowPfp source={logoImg} size={''}/>
        </div>
        <div className='flex gap-3 '>
          <Button onClick={displayFollowers} btnName={'Followers'} className={'text-sm md:text-md'}/>
          <Button onClick={displayFollowing} btnName={'Following'} className={'text-sm md:text-md'}/>
        </div>
      </div>
          
    </AlignCenter>
          {FollowersList && <Follower/>}
          {FollowingList && <Following/>}
    </div>
  )
}

export default memo(Avatar)