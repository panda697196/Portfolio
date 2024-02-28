"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image"

function IndexCarouselinsight() {

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
        <Image src={"/custominsighr1.png"} alt={""}
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
        <Image src={"/custominsighr2.jpg"} alt={""}
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
        <Image src={"/custominsighr3.jpg"} alt={""}
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

export default IndexCarouselinsight