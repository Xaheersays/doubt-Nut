import React from 'react'


const Report = () => {
  const categories = ['hate', 'abuse Harassment', 'violent Speech', 'Child Safety', 'Privacy', 'Spam', 'Suicide SelfHarm', 'Sensitive or DisturbingMedia', 'Deceptive Identities', 'Violent & hatefulEntities']
  return (
    <div className='border bg-gray-900 p-4 rounded-md h-96 overflow-auto my-2'>
      <div className='flex flex-col gap-2 '>
        {categories.map(cat=>(
          <div className='  p-2 rounded-md cursor-pointer bg-black hover:bg-blue-600 hover:scale-105 transition duration-300 ease-in-out'>
            {cat}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Report