import React, { memo, useState ,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Logo, Button } from '../export';
import { useNavigate } from "react-router-dom";

const Header = memo(function Header() {
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state => state.login.isLogin);
  const [showButtons, setShowButtons] = useState(false);


  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showButtons) {
        setShowButtons(false)
      }
    };
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('click-dropdown'); 
      const drop = document.getElementById('drop-down')
      if (dropdown && !dropdown.contains(event.target) && !drop.contains(event.target)) {
        setShowButtons(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click',handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.addEventListener('click',handleClickOutside)

    };
  }, [showButtons]);

  const handleProfileClick = () => {
    // Toggle the state to show/hide buttons
    setShowButtons(!showButtons);
  };

  return (
    <div className='z-[2000] p-4 flex justify-between items-center bg-slate-600 bg-opacity-50 h-24 backdrop-filter backdrop-blur-md text-center relative'>
      <Logo className={'md:h-16 md:w-16 h-10 w-10'} />
      <div className='flex gap-2 relative'>
        <div>
          <div className='relative'>
            <div id="click-dropdown"
              className='flex justify-center items-center p-2 rounded-full h-10 w-10 bg-gray-500 cursor-pointer'
              onClick={handleProfileClick}
            >
              <p>Z</p>
            </div>
            {showButtons && ( 
              <div id="drop-down"   className='z-[100000000000] absolute top-full right-1 my-2 bg-slate-300 shadow-lg rounded p-4 h-auto  '>
                {!isLoggedIn  ? 
                <p onClick={()=>{
                  setShowButtons(false)
                  navigate('/login')
                }}
                className='  hover:scale-110 transition duration-300 ease-in-out'><BeautyFulBtn text='Login'/></p>
                :
                <div>
                  <p 
                  onClick={()=>{
                    setShowButtons(false)
                    navigate("/profile")}
                  }
                  className='  hover:scale-110 transition duration-300 ease-in-out'><BeautyFulBtn text=' Profile'/></p>
                  <p className='  hover:scale-110 transition duration-300 ease-in-out'><BeautyFulBtn text='Logout'/></p>

                </div>
                }
                
                <p 
                onClick={()=>{
                  setShowButtons(false)
                  navigate('/register')}
                }
                className='  hover:scale-110 transition duration-300 ease-in-out'><BeautyFulBtn text='Register'/></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const BeautyFulBtn =({text})=>{
  return (
    <button  className="  w-full rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black  text-white">
    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-slate-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-black transition duration-300 group-hover:text-white ease">{text}</span>
    </button>
  )
}


export default Header;
