import React, { useState,memo } from 'react';
import { Avatar, AskedQuestions,Answered,Draft } from '../export'; // Import components for each tab

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // TODO: edit route

  };

  return (
    <div className='border'>
      <Avatar />
      
      <div className='flex justify-center gap-4 '>
        <p className={`font-bold cursor-pointer ${activeTab === 'posts' ? 'text-green-400 hover:scale-110 transition duration-300 ease-in-out  ' : ''}`} onClick={() => handleTabClick('posts')}>Posts</p>
        <p className={`font-bold cursor-pointer ${activeTab === 'answers' ? 'text-green-400 hover:scale-110 transition duration-300 ease-in-out  ' : ''}`} onClick={() => handleTabClick('answers')}>Answers</p>
        <p className={`font-bold cursor-pointer ${activeTab === 'drafts' ?'text-green-400 hover:scale-110 transition duration-300 ease-in-out  ': ''}`} onClick={() => handleTabClick('drafts')}>Drafts</p>
      </div>
      <hr className='mt-2'/>
      {activeTab === 'posts' && <AskedQuestions/>}
      {activeTab === 'answers' && <Answered/> }
      {activeTab === 'drafts' && <Draft/> }
    </div>
  );
}

export default memo(Profile);
