"use client"
import { useEffect, useMemo, useState } from 'react';
import {client, builder} from '@/Helper/context'
// import { useContext } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img from '../assets/img.jpg'
import './gallery.css'

function CandidCard() {

  // const index = 0;
  const [galleryData, setGalleryData] = useState([])
  useEffect(() => {
    client.fetch('*[_type == "gallery"]').then((res) => {
      const data = res;
      data.sort((a, b) => a.id - b.id);
      // console.log("response ", data);
      setGalleryData(data);
    });
  } , [])
  // console.log(galleryData[index]);

  const settings = useMemo(() => {
    return {
      autoplay: true,
      speed: 500,
      autoplaySpeed: 1500,
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
          <div key={galleryinfo.id} className="h-full flex flex-col">
            <img className="w-full h-40  object-cover object-center" src={builder.image(galleryinfo.image).width(400).url()} alt="Sunset in the mountains"/>
          </div>
        ))}

      </Slider>

    </div>
  );
}
export default CandidCard

