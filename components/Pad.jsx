import React from 'react'
export default function Pad({children, className='', ...props}){

  const baseStyle = 'w-[100px] h-[100px] rounded mx-auto active:scale-99 shadow-[inset_0px_0px_2px_rgba(0,0,0,0.5)] shadow-white'

  return(
    <button className={`${baseStyle} || "" ${className} ` } style={{backgroundColor: props.color, }} {...props}>
      {children}
      </button>
  )
}