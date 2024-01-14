import React from 'react';
import { AlignRight, Strip } from '../export';
import { useSelector, useDispatch } from 'react-redux';
import { togglePopup } from '../../Store/PopupSlice';

function ListPopup({ data, title }) {
  // const showPopup = useSelector((state) => state.popup.showPopup);
  // const dispatch = useDispatch();

  function generateRandomId() {
    const randomId = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomId.toString();
  }

  return (
    <>
      {(
        <div className='p-4 flex flex-col gap-4'>
          <div className='sticky top-0 z-50'>
            <AlignRight>
              <div
                onClick={() => dispatch(togglePopup())}
                className='bg-slate-600 bg-opacity-50 active:scale-95 text-white rounded focus:outline-none focus:shadow-outline backdrop-filter backdrop-blur-md flex justify-center items-center h-10 w-10 font-semibold cursor-pointer my-2'
              >
                X
              </div>
            </AlignRight>
          </div>
            <p className='text-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-4 rounded-md font-semibold'>
              {title}
            </p>
          <p className='text-center bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-5 rounded-md'>
            Search Box
          </p>
          <div>
            {data.map((el) => {
              return <Strip key={generateRandomId()} name={el}></Strip>;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ListPopup;
