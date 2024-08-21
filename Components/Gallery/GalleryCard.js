"use client"
import { useEffect, useMemo, useState } from 'react';
import { client, builder } from '@/Helper/context';

import { useContext } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from '../assets/img.jpg'
import './gallery.css'

useState
function GalleryCard() {
  
  const index = 0;
  // const galleryData = useContext(gallery);
  const [galleryData, setGalleryData] = useState([])
  useEffect(() => { 
    client.fetch('*[_type == "gallery"]').then((res) => {
      const data = res;
      data.sort((a, b) => a.id - b.id);
      // console.log("gallery ", data);
      setGalleryData(data);
    });
  } , [])
  // console.log(galleryData[index]);
  
  const settings = useMemo(() => {
    return {
      cssEase: "linear",
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      horizontalSwiping: true,
      swipeToSlide: true,
      pauseOnHover: true,
      variableWidth: false,
      
    };
  }, []);
  return ( 
    <div className=' w-full  p-2'>
      <Slider {...settings}>
        {galleryData && galleryData.map((galleryinfo) => (
          <div key={galleryinfo.id} className=" flex flex-col">
            <img className="w-full md:h-[30vw] h-[70vw] rounded-md object-cover object-center" src={builder.image(galleryinfo.image).width(800).url()} alt="Sunset in the mountains"/>
            <div className=" py-3 flex justify-end ">
              <p className="text-gray-100 md:w-[70%] xl:text-base text-xs text-center md:text-right mt-2 md:mt-0">
                {galleryinfo.description}
              </p>
            </div>

          </div>
        ))}

      </Slider>

    </div>
  );
}
export default GalleryCard;