import React from 'react'

const Footer = () => {
  return(<div class=" rounded-lg hover:border hover:border-white group hover:-translate-y-3 z-10 ease-in-out duration-700 hover:duration-700 hover:delay-100 hover:shadow-violet shadow-2xl m-4 p-4  dark:bg-gray-800">
  <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span class="text-sm text-gray-900 sm:text-center dark:text-gray-400">© 2023 <a href="#" class=" dark:text-gray-400 group-hover:underline">Innodatatics™</a>. All Rights Reserved.
  </span>
  <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 dark:text-gray-400 sm:mt-0">
      <li>
          <a href="#" class="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
          <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
      </li>
      <li>
          <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
          <a href="#" class="hover:underline">Contact</a>
      </li>
  </ul>
  </div>
</div>);

}
//   return (
//     <div className='m-1'>
//       <div className=' bg-[#1d165c] bottom-0 w-[1519.2px] shadow-xl shadow-[#1d165c] delay-100 duration-700 ease-in hover:-translate-y-2 hover:space-150 box-border border-2 rounded-lg  h-[129.2px]'>
//         <div className="w-full ">Footer</div>
//         <button type="button" className='p-3 m-3 border-2' onClick="(e)=>console.log('you clicked here')">click</button>
//       </div>
//     </div>
//   )
// }

export default Footer