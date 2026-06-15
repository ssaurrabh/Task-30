import {Link, NavLink} from 'react-router-dom'


function Header() {
  return (
    <div className='bg-blue-400 h-fit w-80% flex justify-between p-4 sticky top-0 z-10 text-white'>
    <div>
        <Link to='/'><img src="../../../public/joomla.png" alt="logo" className='h-10 '/></Link>
    </div>
    <div><Link to='/home'>Home</Link></div>
    <div className='flex gap-2'>
      <div><Link to='/login' className='p-2'>Login</Link></div>
    <div><Link to='/signup' className='p-2'>Sign-Up</Link></div>
    </div>
    </div>
  )
}

export default Header
