import React from 'react'

const Footer = () => {
  const handleClick = () =>{
    console.log("hello world");
  };
  return (
    <div className='m-1'>
      <div className=' bg-[#1d165c] bottom-0 w-[1519.2px] h-[389.2px]'>
        <div className="w-full ">Footer</div>
        <button type="button" className='p-3 m-3 border-2' onClick="(e)=>console.log('you clicked here')">click</button>
      </div>
    </div>
  )
}

export default Footer