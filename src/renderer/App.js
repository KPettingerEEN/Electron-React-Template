import React, { useEffect, useState } from 'react';
import './App.css';
import { PiCoins } from "react-icons/pi";
import { 
  RiHome9Line,
  RiDiscussLine,
  RiHeart3Line,
  RiHeart3Fill,
  RiAccountCircleFill,
  RiAccountCircleLine,
  RiSearchLine
} from "react-icons/ri";

const App = () => {
  const [page, setPage] = useState('Home');

  useEffect(() => {
    window.electron.onMenuClick((event, label) => {
      setPage(label);
    });
  }, []);

  return (
    <div className='App'>
      {page === 'Home' && (
        <div className='page'>
          <RiSearchLine style={{ position: 'fixed', top: '10px', left: '10px' }} size={25}/>
          <RiAccountCircleFill style={{ position: 'fixed', top: '10px', right: '10px' }} size={25}/>
          <RiHeart3Line style={{ position: 'fixed', bottom: '110px', right: '10px' }} size={25}/>
          <PiCoins style={{ position: 'fixed', bottom: '70px', right: '10px' }} size={25}/>
          <nav className='appnav'>
            <RiAccountCircleLine style={{ position: 'fixed', bottom: '4px', left: '20px' }} size={25}/>
            <RiHome9Line style={{ position: 'fixed', bottom: '3px', left: '45%' }} size={30}/>
            <RiDiscussLine style={{ position: 'fixed', bottom: '4px', right: '20px' }} size={25}/>
          </nav>
        </div>
      )}
      {page === 'Create' && (
        <div className='page'>
          {/* Add Create Page Content */}
        </div>
      )}
      {page === 'Search' && (
        <div className='page'>
          {/* Add Search Page Content */}
        </div>
      )}
      {page === 'Profile' && (
        <div className='page'>
          {/* Add Profile Page Content */}
        </div>
      )}
    </div>
  );
};

export default App;
