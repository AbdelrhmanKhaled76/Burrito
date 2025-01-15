'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import redLogo  from '../pics/red_logo.png'
import blackLogo  from '../pics/black_logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Nav = () => {

    const [menu, setMenu] = useState<boolean>(false);
    
    useEffect(()=>{
        const list = document.getElementById('menu');
        const links = document.querySelectorAll('.links');
        const handleClick = ()=> {
            setMenu(!menu);
            if(menu){
                list?.classList.add('text-secondary-color');
                links.forEach(link=>{
                    link.classList.remove('hidden');
                    link.classList.add('block');
                });
            }
            else{
                list?.classList.remove('text-secondary-color');
                links.forEach(link=>{
                    link.classList.add('hidden');
                    link.classList.remove('block');
                });
            };
        }
        list?.addEventListener('click', handleClick);
        return ()=>{
            list?.removeEventListener('click', handleClick);
        }
    }, [menu]);

    return (
        <nav className={`${ usePathname() === '/' ? 'text-primary-color absolute top-0 left-0 w-screen mx-auto' : 'text-filler-color'}`}>
            <div className={`container grid grid-cols-5 items-start md:items-center py-6`}>
                <div className='col-span-1'>
                    <Image alt='burrito logo' src={ usePathname() === '/' ? redLogo : blackLogo } />
                </div>
                <div className='col-span-4'>
                    <ul className='grid md:grid-cols-4 grid-cols-5 mx-auto items-start gap-5 pe-5 md:gap-12 text-center navbar '>
                        <li className='md:hidden block col-span-5 text-right '><button id='menu' className='transition-all duration-500 hover:text-secondary-color' type='button'><FontAwesomeIcon icon={faSquareCaretDown} /></button></li>
                        <li className='links hidden md:block col-span-5 md:col-span-1 text-right'><Link href={'/'} className='transition-all duration-500 hover:text-secondary-color '>home</Link></li>
                        <li className='links hidden md:block col-span-5 md:col-span-1 text-right'><Link href={'/about'} className='transition-all duration-500 hover:text-secondary-color '>about</Link></li>
                        <li className='links hidden md:block col-span-5 md:col-span-1 text-right'><Link href={'/menu'} className='transition-all duration-500 hover:text-secondary-color '>menus</Link></li>
                        <li className='links hidden md:block col-span-5 md:col-span-1 text-right'><Link href={'/contact'} className='transition-all duration-500 hover:text-secondary-color '>contact us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
