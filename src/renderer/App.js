import React, { useEffect, useState } from 'react';
import './App.css';
import { 
  RiHome9Line,
  RiDiscussLine,
  RiAccountCircleLine
} from "react-icons/ri";

const App = () => {
  const [page, setPage] = useState('Home');

  return (
    <div className='App'>
      {page === 'Home' && (
        <div className='page'>
          <nav className='appnav'>
            <RiAccountCircleLine
              style={{ position: 'fixed', bottom: '4px', left: '20px' }}
              size={25}
              onClick={() => setPage('Profile')}
            />
            <RiHome9Line 
              style={{ position: 'fixed', bottom: '3px', left: '45%' }} 
              size={30}
              onClick={() => setPage('Home')}
            />
            <RiDiscussLine 
              style={{ position: 'fixed', bottom: '4px', right: '20px' }} 
              size={25}
              onClick={() => setPage('Messages')}
            />
          </nav>
        </div>
      )}
      {page === 'Profile' && (
        <div className='page'>
          <nav className='appnav'>
            <RiAccountCircleLine
              style={{ position: 'fixed', bottom: '4px', left: '20px' }}
              size={25}
              onClick={() => setPage('Profile')}
            />
            <RiHome9Line 
              style={{ position: 'fixed', bottom: '3px', left: '45%' }} 
              size={30}
              onClick={() => setPage('Home')}
            />
            <RiDiscussLine 
              style={{ position: 'fixed', bottom: '4px', right: '20px' }} 
              size={25}
              onClick={() => setPage('Messages')}
            />
          </nav>
        </div>
      )}
      {page === 'Messages' && (
        <div className='page'>
          <nav className='appnav'>
            <RiAccountCircleLine
              style={{ position: 'fixed', bottom: '4px', left: '20px' }}
              size={25}
              onClick={() => setPage('Profile')}
            />
            <RiHome9Line 
              style={{ position: 'fixed', bottom: '3px', left: '45%' }} 
              size={30}
              onClick={() => setPage('Home')}
            />
            <RiDiscussLine 
              style={{ position: 'fixed', bottom: '4px', right: '20px' }} 
              size={25}
              onClick={() => setPage('Messages')}
            />
          </nav>
        </div>
      )}
    </div>
  );
};

export default App;
