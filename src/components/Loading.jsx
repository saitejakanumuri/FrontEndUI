import React from 'react'

const Loading = () => {
  return (
    <div id="on_loading" className='flex-col m-auto'>
    <img id="loading gif" className=" h-[100px] w-[80px]  " src= "./src/assets/load-gif.gif"/>
    <span>Loading...</span>
    </div>
  )
}

export default Loading