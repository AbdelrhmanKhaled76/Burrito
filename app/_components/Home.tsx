'use client';
import { Metadata } from "next";
import Image from "next/image";
import { normal, headers } from "../layout";
import taco1 from '../pics/yellow-taco-2.jpeg';
import taco3 from '../pics/yellow-taco.jpeg';
import taco2 from '../pics/red-taco.jpeg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import restaurant1 from '../pics/home slider image.jpeg';
import restaurant2 from '../pics/home slider image2.jpeg';
import restaurant3 from '../pics/home slider image3.jpeg';
import restaurant4 from '../pics/home slider image4.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import '../style/home.css';
import Head from "next/head";



export default function Home() {
  return (
    <>
      <section id="home-first-section" className="flex justify-center items-center flex-col w-screen h-screen" >
        <h1 className={`text-header ${headers.className} text-secondary-color`} data-aos="fade-up" data-aos-duration="1000">welcome to our restaurant</h1>
        <h2 className={`text-navbar text-secondary-filler-color` } data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">we serve mexican food</h2>
      </section>
      <section id="home-second-section" className="py-20 container">
        <h2 className={`${headers.className} text-secHeader text-primary-color text-center pb-20`} data-aos="fade-up" data-aos-duration="1000">taste a delicious food with mexican touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <figure>
            <Image src={taco1} alt="taco picture with background pink" className="lg:h-[600px] " />
          </figure>
          <figure>
            <Image src={taco2} alt="taco picture with background red" />
          </figure>
          <figure>
            <Image src={taco3} alt="taco picture with background yellow" className="lg:h-[600px]"/>
          </figure>
        </div>
      </section>
      <section id="home-third-section" className="container">
        <article>
          <h2 className={`text-primary-color text-secHeader ${headers.className} text-center pt-10`} data-aos="fade-up" data-aos-duration="1000">Siente el poder de la cultura mexicana, compa!</h2>
        </article>
        <figure className="py-20 flex justify-center items-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            
          >
            <SwiperSlide className="w-full">
              <Image src={restaurant1} alt="restaurant picture number 1"  className="md:w-[735px] md:h-[490px]" />
            </SwiperSlide>
            <SwiperSlide className="w-full ">
              <Image src={restaurant2} alt="restaurant picture number 2"  className="md:w-[735px] md:h-[490px]"/>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <Image src={restaurant3} alt="restaurant picture number 3"  className="md:w-[720px] md:h-[540px]"/>
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <Image src={restaurant4} alt="restaurant picture number 3"  className="md:w-[736px] md:h-[487px]"/>
            </SwiperSlide>
          </Swiper>
        </figure>
      </section>
    </>
  );
}
