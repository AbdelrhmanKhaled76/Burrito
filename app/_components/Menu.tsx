'use client'
import Image from 'next/image';
import React from 'react';
import bgMenu from '../pics/burrito_menu.png';
import bfMenu from '../pics/black_menu.png';
import dinnerMenu from '../pics/yellow_menu.png';
import drinksMenu from '../pics/red_menu.png';
import { headers } from '../layout';

const Menu = () => {
    return (
        <div>
            <section>
                <Image alt='a picture has the menu with a logo on it' src={bgMenu} className='pt-10' ></Image>
            </section>
            <section className='flex flex-col justify-between container items-center text-center py-20'>
                <article>
                    <h2 className={`${headers.className} py-10 text-secHeader`} data-aos="fade-right" data-aos-duration="1000">breakfast menu</h2>
                </article>
                <figure>
                    <Image src={bfMenu} alt='breakfast menu' className='w-[569px]' data-aos="fade-left" data-aos-duration="1000"></Image>
                </figure>
                <article>
                    <h2 className={`${headers.className} py-10 text-secHeader text-secondary-color`} data-aos="fade-right" data-aos-duration="1000">dinner menu</h2>
                </article>
                <figure>
                    <Image src={dinnerMenu} alt='breakfast menu' className='w-[569px]' data-aos="fade-left" data-aos-duration="1000"></Image>
                </figure>
                <article>
                    <h2 className={`${headers.className} py-10 text-secHeader text-primary-color`} data-aos="fade-right" data-aos-duration="1000">drinks menu</h2>
                </article>
                <figure>
                    <Image src={drinksMenu} alt='breakfast menu' className='w-[569px]' data-aos="fade-left" data-aos-duration="1000"></Image>
                </figure>
            </section>
        </div>
    );
}

export default Menu;
