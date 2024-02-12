import React from 'react'

const Error = (props) => {  
  return (
    <div className='h-auto w-auto top-auto left-auto m-[15em] group'><p className='font-extralight scale-150 duration-1000 text-center text-black' >{props.sentence}</p></div>
  )
}

export default Error