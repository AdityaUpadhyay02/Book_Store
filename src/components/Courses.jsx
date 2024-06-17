import React from 'react'
import list from '../../public/list.json'
import Cards from "../components/Cards"
// import {link} from 'react-router-dom'
function Courses() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
     <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We're Delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo aliquam maxime quod voluptatem hic dolorem, perferendis enim doloribus fugit consequatur. Maiores libero enim assumenda tempora hic! Harum corrupti provident neque, consequatur error officiis optio?</p>
        
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded:bg-pink-700 duration-300'>Back</button>
        
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
        }
     </div>
   </div>
   </>
  )
}

export default Courses
