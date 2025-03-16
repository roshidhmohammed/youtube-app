import React from 'react'

const DescriptionButton = ({name, icon}) => {
    console.log(icon)
  return (
<button className="flex items-center gap-2 border-1 px-4 py-2 rounded-full text-md hover:bg-[#717171] hover:cursor-pointer"><span className=' text-2xl'>{React.createElement(icon)}</span>{name}</button>

  )
}

export default DescriptionButton