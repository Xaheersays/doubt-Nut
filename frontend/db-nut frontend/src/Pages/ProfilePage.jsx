import React from 'react'
import { Profile } from '../Components/export'
import {useParams} from 'react-router-dom'
function ProfilePage() {
  const {username} = useParams()
  return (
    <>
      <Profile username = {username}/>
    </>
  )
}

export default ProfilePage