"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";


const Carousel = async ({members}) => {
  const index = 0;
  const Data = await getServerSideProps();
  const membersData = Data.props.members;
  membersData.sort((a, b) => a.id - b.id);
  // console.log(membersData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    // <div className="">
      <div className="border border-red-500">
        <Slider {...settings}>
        {membersData && membersData.map((d, index) => (
            <div key={d.por} className="bg-white h-[23.5vw] text-black rounded-xl">
                <div className='bg-white flex justify-center items-center rounded-t-xl'>
                <img src={`${builder.image(d.image).url()}`} alt="" className="rounded-full object-cover flex items-center justify-center"/>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-[0.8vw]">
                    <p className=" text-[1.25vw] [font-family:'Archivo-SemiBold',Helvetica]">{d.name}</p>
                    <p className="text-center text-[1.08vw] [font-family:'Archivo-SemiBold',Helvetica] font-medium">{d.por}</p>
                    <button className='bg-[#050816] text-[0.9vw] text-white px-[1.5vw] py-[0.5vw] rounded-xl'><a href={d.linkedin}>Know More</a></button>
                </div>
            </div>
          
        ))}
      </Slider>
      </div>
    // </div>
  );
};



export default Carousel;

export async function getServerSideProps(context) {
  const members = await client.fetch('*[_type == "members"]');

  return {
    props: {
      members,
    },
  };
}
