import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';
function Freebook() {
    const filterData=list.filter((data)=>data.category ==="free");
    // console.log(filterData);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <><div>
    <h1 className='text-2xl font-semibold cursor-pointer px-4 py-6'>Free couses Couses</h1>
    <p className='text-xl cursor-pointer px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maxime tempora reiciendis commodi beatae ea perferendis! Illo voluptate perferendis in laudantium ea rerum quaerat aperiam.</p>
  </div>
  <div className='px-4'>
  <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
  </div>
    </>
  )
}

export default Freebook
