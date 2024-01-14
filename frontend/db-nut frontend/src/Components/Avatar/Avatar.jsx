import React from 'react'
import { Button,AlignCenter ,ShowPfp} from '../export';
import logoImg from '../../assets/logo.png'
import { useDispatch } from 'react-redux';
import { toggleFGPopup,toggleFWPopup } from '../../Store/PopupSlice';

function Avatar() {
  
  const dispatch = useDispatch()
  const displayFWPopup = ()=>{
    dispatch(toggleFWPopup())
  }
  const displayFGPopup = ()=>{
    dispatch(toggleFGPopup())
  }
  return (
    <AlignCenter>
      <div className='flex flex-col justify-center items-center gap-10 my-10'>
        <div className='h-44 w-44 cursor-pointer flex justify-center items-center '>
          <ShowPfp source={logoImg} size={''}/>
        </div>
        <div className='flex gap-3 '>
          <Button onClick={displayFWPopup} btnName={'Followers'}/>
          <Button onClick={displayFGPopup} btnName={'Following'}/>
        </div>
      </div>
    </AlignCenter>
  )
}

export default Avatar