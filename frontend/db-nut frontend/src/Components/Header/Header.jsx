import React,{memo} from 'react'
import { Avatar, Button, Logo } from '../export'
import { useSelector } from 'react-redux'

const Header = memo(function Header() {
    console.log(localStorage.getItem('doubtNutToken'))
    const isLoggedIn = useSelector(state=>state.login.isLogin)
    return (
        <div className=' flex justify-between items-center  bg-slate-600 bg-opacity-50 h-24  
        backdrop-filter backdrop-blur-md  rounded-md text-center'>
            <Logo></Logo>
            <div className='flex gap-2'>
                <Button btnName={ isLoggedIn ? 'logout' : 'login'  }></Button>
                <Button btnName={'Register'}></Button>
                <Avatar></Avatar>
            </div>
        </div>
        
    )
});

export default Header