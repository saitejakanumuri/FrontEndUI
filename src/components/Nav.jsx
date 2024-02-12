import React from 'react'

const Nav = () => {
  const word_spice= ["S","P","I","C","E","  "]
  const word_price = ["P","R","I","C","E","  "]
  const word_forecasting=["F","O","R","E","C","A","S","T","I","N","G","  "]
  const word_app = ["A","P","P"]
    
  return (
    <div className='m-1 shadow-xl group shadow-slate-300 group  m-r-2  w-vwh h-[100px] bg-slate-400  rounded-lg'>
        <div className="flex ">
            <div className="mt-5 ml-[100px]  h-full  flex-none">
                <img src='./src/assets/innodatatics-white1.png' className='object-left group-hover:scale-0 duration-700 h-[38px] w-[150px] bg-black' />
            </div>
            <div className='flex-auto left-auto group-hover:duration-700 font-black group-hover:text-[#1f1d1c] duration-1000 delay-500 text-slate-500 ease-in-out  right-auto justify-center inline-flex ml-[100px] m:auto group-hover:scale-150 self-center mt-4'>
             <div className='mr-3 '> {word_spice.map((e)=>{return <div className='inline-block'><span className='text-4xl   duration-500' key={e}>{e}</span></div>})}</div> <div className='mr-3'> {word_price.map((e)=>{return <div className='inline-block duration-300 '><span key={e} className='text-4xl '>{e}</span></div>})}</div><div className='mr-3 duration-500 '>{word_forecasting.map((e)=>{return <div className='inline-block '><span key={e} className='text-4xl  '>{e}</span></div>})}</div><div className="mr-3 ">{word_app.map((e)=>{return <div className='inline-block  '><span className='text-4xl'>{e}</span></div>})}</div>
          </div>
          <div className='flex-none  mr-[190px] pt-2 h-[10px] w-[100px] '><img className="group-hover:scale-0 duration-700" src='./src/assets/ruchi-new-logo-white.png'/></div>
    </div>
    </div>
  )
    
}

export default Nav

//ml-[100px]  pl-[15px] height={53} width={150} 

//<h1 className='uppercase text-5xl font-dark tracking-wide text-center text-pretty text-red-500 my-5   line-height-1'>spice forecasting App</h1>
//project_name.map((letter)={<div className='inline-block' ><span>{letter}</span></div>})


