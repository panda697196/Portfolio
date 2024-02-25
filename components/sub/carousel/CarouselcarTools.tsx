"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image"

function IndexCarouselcar() {

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]} // Add Autoplay module
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }} // Modify to specify delay if needed
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide >
        <Image src={"/官网轮播图2_副本.jpg"} alt={""}
            width={600}
            height={200}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md cursor-pointer w-full h-full"
            sizes="100vw"
            // Make the image display full width
            style={{
              width: 'auto',
              height: 'auto',
            }}
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"/VS7趣选配——1.webp"} alt={""}
            width={600}
            height={200}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md cursor-pointer w-full h-full"
            sizes="100vw"
            // Make the image display full width
            style={{
              width: 'auto',
              height: 'auto',
            }}
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"/VS7趣选配——2_副本.jpg"} alt={""}
            width={600}
            height={200}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md cursor-pointer w-full h-full"
            sizes="100vw"
            // Make the image display full width
            style={{
              width: 'auto',
              height: 'auto',
            }}
            />
        </SwiperSlide>
        
        <SwiperSlide >
        <Image src={"/VS7趣选配——3.webp"} alt={""}
            width={600}
            height={200}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="rounded-md cursor-pointer w-full h-full"
            sizes="100vw"
            // Make the image display full width
            style={{
              width: 'auto',
              height: 'auto',
            }}
            />
        </SwiperSlide>

        
    
      
      </Swiper>
    </>
  )
}

export default IndexCarouselcar