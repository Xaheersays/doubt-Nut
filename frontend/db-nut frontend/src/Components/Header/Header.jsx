import React, { memo, useState ,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Logo, Button } from '../export';

const Header = memo(function Header() {
  console.log(localStorage.getItem('doubtNutToken'));
  const isLoggedIn = useSelector(state => state.login.isLogin);
  const [showButtons, setShowButtons] = useState(false);


  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showButtons) {
        setShowButtons(false)
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showButtons]);

  const handleProfileClick = () => {
    // Toggle the state to show/hide buttons
    setShowButtons(!showButtons);
  };

  return (
    <div className='p-4 flex justify-between items-center bg-slate-600 bg-opacity-50 h-24 backdrop-filter backdrop-blur-md text-center'>
      <Logo className={'md:h-16 md:w-16 h-10 w-10'} />
      <div className='flex gap-2'>
        <div>
          <div className='relative'>
            <div
              className='flex justify-center items-center p-2 rounded-full h-10 w-10 bg-gray-500 cursor-pointer'
              onClick={handleProfileClick}
            >
              <p>Z</p>
            </div>
            {showButtons && ( 
              <div className='absolute top-full right-1 my-2 bg-slate-300 shadow-lg rounded p-4 h-auto  '>
                <p className='  hover:scale-110 transition duration-300 ease-in-out'><BeautyFulBtn text='Login'/></p>
                <p className='  hover:scale-110 transition duration-300 ease-in-out'><BeautyFulBtn text='Register'/></p>
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
