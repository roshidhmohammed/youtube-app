import React from 'react'

const Button = ({name}) => {
  return (
    <div className=' snap-start scroll-m-6'>
         <button className=' bg-[#302e2e] text-[#f1f1f1] hover:bg-[#494848] hover:cursor-pointer font-bold px-3 py-2 rounded-lg'>
    {name}
  </button>
  </div>
  )
}

export default Button