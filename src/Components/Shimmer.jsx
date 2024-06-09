import React from 'react'

 function Shimmer() {
  return (
    <div className='Body'>
        {Array(10).fill("").map((e,index)=>(
            <div key={index} className='shimmer-class'></div>
        ))}
    </div>
  )
}
export default Shimmer