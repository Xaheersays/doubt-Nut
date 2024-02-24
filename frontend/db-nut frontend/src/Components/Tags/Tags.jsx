import React ,{memo}from 'react'

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const Tags = ({tags}) => {
  tags = tags.slice(0,5)
  return (
    <div>
      <div className=' flex gap-2 '>
        {tags.map(tag=>(
          <p className='font-bold p-2 w-auto rounded-full  hover:scale-110 transition duration-300 ease-in-out' style={{backgroundColor:getRandomColor()}}>{tag}</p>
        ))}
      </div>
    </div>
  )
}


export default memo(Tags)