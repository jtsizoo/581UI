import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import map from '../Images/map.jpg'

const Main = () => {

  const [count, setCount] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <div className='flex h-[100vh]'>
      <div className='w-[60%] h-[100vh] flex flex-col items-center'>
          <div className='flex flex-row justify-center border-[#3E3B3B] border-[3px] drop-shadow-2xl shadow-2xl border-solid rounded-xl py-16 mt-12 w-[350px]'>
            <h1 className='text-[#3E3B3B] text-5xl'>{isActive ? 17 : 0}</h1>
            <h1 className='text-[#3E3B3B] text-5xl ml-2'>mph</h1>
          </div>
          <div className='flex text-6xl justify-center bg-[#3E3B3B] text-white w-[200px] py-2 rounded-b-2xl shadow-xl'>
            <Icon icon="game-icons:golf-tee" className=''/>
            <h2 className='ml-2 tee'>{count}</h2>
          </div>
          <button style={{display: isActive ? 'none' : 'block'}} className='my-6' onClick={handleClick}>
            <div class="flex bg-green-700 aspect-square shrink-0 rounded-full grow-0 w-[260px] h-[260px] justify-center items-center flex-col shadow-2xl drop-shadow-2xl">
            <Icon icon="mdi:golf-cart" className='text-white text-9xl mt-[1rem]'/>
            <Icon icon="file-icons:go" className='text-white text-9xl mt-[-.35em] mr-[.2em]'/>
            </div>
          </button>
          <button style={{display: isActive ? 'block' : 'none'}} onClick={handleClick} className='my-6 hidden'>
              <Icon icon="game-icons:stop-sign"  className='text-[275px] text-red-700 border-[#3E3B3B] drop-shadow-2xl'/>
          </button>
          <button onClick={function incTee() {if(count<18) setCount(count+1)}} className='bg-[#3E3B3B] text-white py-4 w-[275px] rounded-xl shadow-lg text-3xl'>Next Teebox</button>
          <button className='bg-[#3E3B3B] text-white py-4 w-[275px] rounded-xl shadow-lg mt-4 text-3xl'>Next Green</button>
      </div>


      
      <div className='bg-[#3E3B3B] pl-4 py-3 rounded-l-xl'>
         <iframe title="map" className='map rounded-l-xl' width="500" height="780" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-95.26860415935516%2C38.976263117537805%2C-95.26184499263765%2C38.97992040605664&amp;layer=mapnik&amp;marker=38.978091785409354%2C-95.2652245759964"></iframe>
      </div>
    </div>

    
  )
}

export default Main