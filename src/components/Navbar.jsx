import { Link, NavLink } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className='h-auto md:h-24 p-2 bg-blue-200 max-w-12xl mx-auto flex justify-between md:items-center'>
      <Link to='/'>
        <FcHome className='text-6xl' />
      </Link>
      <div className={togglerNav ? 'flex flex-col gap-4 md:flex md:flex-row md:gap-8' : 'hidden md:flex md:flex-row md:gap-8 md:items-center'}>
        <div className="flex justify-center"> {/* Bu div içine eklenen sınıf */}
          <NavLink className='nav-link' onClick={clickHandler} to='/'>
            Ana Sayfa
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/create'>
            Etkinlik Oluştur
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/createlist'>
            Etkinlik Listele
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/createdetail'>
            Etkinlik Detayları
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/profile'>
            Profil
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/memberlists'>
            Üye Listesi
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/login'>
            Giriş Yap
          </NavLink>
          <NavLink className='nav-link' onClick={clickHandler} to='/register'>
            Üye Ol
          </NavLink>
        </div>
      </div>
      <button
        className='inline md:hidden self-start nav-link'
        onClick={clickHandler}
      >
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
