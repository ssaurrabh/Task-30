import React from 'react'

function Home() {
  return (
    <div>
      <div className=' w-2xl h-screen absolute top-50 right-30 bg-fuchsia-600 rounded-full -z-10 outline-4 outline-indigo-600 outline-offset-8 outline-dashed'></div>
      <div className="flex gap-50 justify-around h-screen w-full mt-5">
        <div className='w-1/2 p-5'>
          <h1 className='text-6xl mb-5 '>Develop your <br />skills in a new<br /> and unique way</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore excepturi quia qui pariatur minus?</p>
        </div>
        <div className='w-1/2'>
          <img src="../../public/icons8-team-FcLyt7lW5wg-unsplash.jpg" alt="student" className='h-120 outline outline-dashed outline-offset-4 outline-indigo-600 rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Home
