import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { builder } from '@/Helper/context';

import { client } from '@/Helper/context';
import { useEffect, useState } from 'react';
export async function getData(context) {
  const gallery = await client.fetch('*[_type == "gallery"]');
  return gallery;
}

function Gallery() {
  const [galleryData, setGalleryData] = useState([])
  useEffect(() => {
    getData().then((data) => {
      const gallery = data;
      gallery.sort((a, b) => a.id - b.id);
      setGalleryData(gallery);
    });
  }, []);
  function urlFor(source) {
    return builder.image(source);
  }
  // console.log(galleryData[0].image);

  return (

    <div>
      <Carousel data-bs-theme="light">
        {galleryData.length !==0 && galleryData.map((item, index) => {
          return (
            <Carousel.Item key={item.id}>
              <img
                className="d-block md:h-[31vw] h-[70vw]"
                src={urlFor(galleryData[`${item.id-1}`].image).width(800).url()}
                alt="First slide"
                style={{
                  
                }}
              />
              <Carousel.Caption className='mt-20'>
                <h5 className='text-xs md:text-lg'>First slide label</h5>
                <p className='text-xs md:text-lg'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
    </Carousel>
    </div>
  );
}

export default Gallery;