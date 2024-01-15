import React, { useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
function ShowPfp({source,size}) {
  useEffect(()=>{
    const storedToken = localStorage.getItem('doubtNutToken') || ''
    let userData ;
    try{
      userData = jwtDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
    }catch(err){
      console.error(err)
      return 
    }
    const username = userData?.username

  },[])


  return (
    <div>
        <img className={`${size}`} src={source} alt="" />
    </div>
  )
}

export default ShowPfp