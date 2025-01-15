'use client'
import React, { useEffect } from 'react';
import { headers } from '../layout';
import { faBuilding, faFaceLaughSquint, faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutCss from '../style/about.module.css';
import taccoPic from '../pics/tacco-about-pic.png'
import Image from 'next/image';
import toast from 'react-hot-toast';
import aboutSlider1 from '../pics/about-burrito-bg.jpeg';
import aboutSlider2 from '../pics/about-burrito-bg (2).jpeg'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const About = () => {
    useEffect(() => {
        document.querySelectorAll('.loading');
    }, []);

    useEffect(() => {
    const targets = ['expand95', 'expand85', 'expand99', 'expand100'].map((id) =>
        document.getElementById(id)
    );

    const widths = ['95%', '85%', '99%', '100%'];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const targetIndex = targets.indexOf(entry.target);
                if (entry.isIntersecting && targetIndex !== -1) {
                    entry.target.style.width = widths[targetIndex];
                } else if (targetIndex !== -1) {
                    entry.target.style.width = '0%'; // Reset width if out of view
                }
            });
        },
        { threshold: 0.5 } // Adjust this as needed to detect visibility
    );

    targets.forEach((target) => target && observer.observe(target));

    return () => {
        observer.disconnect();
    };
}, []);

    return (
        <div>
            <h1 className={`py-20 ${headers.className} text-header text-center`} data-aos="fade-down" data-aos-duration="1000">Warning spicy content coming at ya !</h1>
            <section className='grid md:grid-cols-3 grid-cols-1 md:gap-15 gap-10 md:py-10 py-5 container'>
                <div className='grid grid-rows-3 text-center items-center' data-aos="fade-up" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faPepperHot} size='2xl' className='mx-auto'/>
                    <h3 className={`${headers.className} text-secondary-color`}>high quality food</h3>
                    <p>we work with the best mexican cheifs to make the greatest food you will ever taste </p>
                </div>
                <div className='grid grid-rows-3 text-center items-center' data-aos="fade-up" data-aos-duration="1000">
                <FontAwesomeIcon icon={faBuilding} className='mx-auto' size='2xl'/>
                    <h3 className={`${headers.className} text-secondary-color`}>best vibes</h3>
                    <p>if it's your first time here omg you will love it, we have multiple restaurants with the same quality so don't worry</p>
                </div>
                <div className='grid grid-rows-3 text-center items-center' data-aos="fade-up" data-aos-duration="1000">
                    <FontAwesomeIcon icon={faFaceLaughSquint}  className='mx-auto' size='2xl'/>
                    <h3 className={`${headers.className} text-secondary-color`}>mexican culture</h3>
                    <p>as you know by now we are inspired by the mexican culture, when you come here you will be one lucky person to know about it</p>
                </div>
            </section>
            <section>
                <figure className="my-20">
                <Swiper
            spaceBetween={0}
            modules={[Autoplay]}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={5000}
            loop={true}
            allowTouchMove={false}
            breakpoints={ {
                1024 : {
                    slidesPerView : 5
                },
                768 : {
                    slidesPerView : 3
                },
                640 : {
                    slidesPerView : 2
                }
            }}
        >
            <SwiperSlide  >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider1} alt="Burrito background"/>
            </SwiperSlide>
            
        </Swiper>
                </figure>
            </section>
            <section className='pt-10 pb-10 md:pb-20 container xl:px-40'>
                <h2 className={`${headers.className} text-secHeader text-center pb-10 md:pb-20`} data-aos="fade-up" data-aos-duration="1000">about the service</h2>
                <div className='grid xl:grid-cols-2 grid-cols-1 gap-5 items-center text-center'>
                    <article>
                        <h5 className={`${headers.className} text-navbar pb-10`}>you worry too much don’t you </h5>
                        <p>but here you dont gotta worry  because we have the best service i guarntee you, the only thing you need to worry about is how spicy you want your food pick wisely we have a good menu, and we have drinks too !!, our services will take care about making you happy and making you the best taccos we could make so what are you waiting for just come here and </p>
                    </article>
                    <figure className='mx-auto'>
                        <Image alt='taccos picture' src={taccoPic} ></Image>
                    </figure>
                </div>
                <button onClick={()=>toast('your burrito is ready !!', {
                    icon: '🌯',
                    position : 'top-center',
                    duration: 4000,
                })} className={`${headers.className} bg-filler-color text-secondary-color rounded-full px-4 py-2 capitalize mx-auto block mt-10`}>
                    try a  burrito
                </button>
            </section>
            <section>
                <figure className="my-20">
                
        <Swiper
            spaceBetween={0}
            modules={[Autoplay]}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={5000}
            loop={true}
            allowTouchMove={false}
            breakpoints={ {
                1024 : {
                    slidesPerView : 5
                },
                768 : {
                    slidesPerView : 3
                },
                640 : {
                    slidesPerView : 2
                }
            }}
        >
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background"  />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background" />
            </SwiperSlide>
            <SwiperSlide >
                <Image src={aboutSlider2} alt="Burrito background" />
            </SwiperSlide>
            
        </Swiper>
                </figure>
            </section>
            <section className='pb-20 pt-10 container md:px-35'>
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className='md:w-1/2 w-full md:px-10 pb-5 md:pb-0'>
                        <h2 className={`${headers.className} text-secHeader pb-7`}>our skills</h2>
                        <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo velit sit amet velit. Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna, in commodo risus justo vitae nibh. Sed mollis sapien erat, id pellentesque libero interdum at. Mauris sodales felis luctus purus hendreri. Vivamus baram sapien era.  </p>
                    </div>
                    <div className='md:w-1/2 w-full md:px-10 pt-5 md:pt-0'>
                        <ul className='grid grid-rows-4'>
                            <li>cooking<div className={`${headers.className} relative ps-3 rounded-full w-full py-2 border `}><span id='expand95' className={` transition-all duration-[2000ms] absolute left-0 top-0 rounded-full bg-primary-color  h-full flex justify-center items-center text-[15px]`}>95%</span></div></li>
                            <li>decorating<div className={`${headers.className} relative ps-3 rounded-full w-full py-2 border `}><span id='expand85' className={` transition-all duration-[2000ms] absolute left-0 top-0 rounded-full bg-secondary-color  h-full flex justify-center items-center text-[15px]`}>85%</span></div></li>
                            <li>vibes<div className={`${headers.className} relative ps-3 rounded-full w-full py-2 border `}><span id='expand99' className={` transition-all duration-[2000ms] absolute left-0 top-0 rounded-full bg-primary-color  h-full flex justify-center items-center text-[15px]`}>99%</span></div></li>
                            <li>culture<div className={`${headers.className} relative ps-3 rounded-full w-full py-2 border `}><span id='expand100' className={` transition-all duration-[2000ms] absolute left-0 top-0 rounded-full bg-primary-color  h-full flex justify-center items-center text-[15px]`}>100%</span></div></li>
                        </ul>
                    </div>
                </div>
                <button onClick={()=>toast('your tacco is ready !!', {
                    icon: '🌮',
                    position : 'top-center',
                    duration: 4000,
                    })} className={`${headers.className} bg-filler-color text-primary-color rounded-full px-4 py-2 capitalize mx-auto block mt-20`}>
                    try a  tacco
                </button>
            </section>
        </div>
    );
}

export default About;
