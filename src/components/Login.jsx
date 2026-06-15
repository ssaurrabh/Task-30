

function Login() {
  return (
    <>
    
    <div className='bg-blue-50 flex justify-center items-start h-screen w-full p-10'>
      <div className='outline-2 outline-dashed outline-offset-4 outline-fuchsia-600 pb-15 px-20 pt-10 rounded-2xl'>
            <form action="" className='relative'>
                <h2 className='text-center text-3xl mb-4 font-semibold'>Login Page</h2>
                <label htmlFor="user">Username:</label>
                <input type="text" id='user' placeholder='Enter Username' className='h-10 outline-none pl-3 border rounded-xl ml-2'/><br />
                <label htmlFor="pass">Password: </label>
                <input type="password" id="pass" className='h-10 outline-0 pl-3 border rounded-xl ml-2 mt-2' placeholder='Enter Password' /><br />
                <button className='absolute top-35 left-20 my-3 bg-amber-200 py-2 px-5 rounded-xl border'>Login</button>
            </form>
      </div>
    </div>
  </>
  )
}

export default Login
