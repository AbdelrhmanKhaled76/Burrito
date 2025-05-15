import Image from "next/image";
import React from "react"
import footerLogo from '../pics/white_logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { faFacebook, faInstagram, faPinterest, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpLong, faUpLong } from "@fortawesome/free-solid-svg-icons";

const Footer : React.FC = () => {

    return <>
        <footer className="bg-filler-color text-secondary-filler-color">
            <div className="h-full w-[30%] mx-auto text-center flex justify-between items-center flex-col">
                <button type="button" onClick={()=>{
                    window.scroll({
                        behavior : "smooth",
                        top :  0
                    })
                }}><FontAwesomeIcon icon={faUpLong}  className="pt-7 hover:text-secondary-color transition-all duration-500"/></button>
                <p className="text-navbar py-10" data-aos="fade-down" data-aos-duration="1000">follow our socials for more spiciness !!</p>
                <Image src={footerLogo} alt="footer logo" className="pb-10" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1000"></Image>
                <div className="pb-10 flex justify-between items-center">
                    <Link href={'https://www.facebook.com/'} className="m-5 hover:text-secondary-color transition-all duration-500"><FontAwesomeIcon icon={faFacebook} size="xl" data-aos="fade-right" data-aos-duration="1000"/></Link>
                    <Link href={'https://www.facebook.com/'} className="m-5 hover:text-secondary-color transition-all duration-500"><FontAwesomeIcon icon={faInstagram} size="xl" data-aos="fade-right" data-aos-duration="1000"/></Link>
                    <Link href={'https://www.facebook.com/'} className="m-5 hover:text-secondary-color transition-all duration-500"><FontAwesomeIcon icon={faTiktok}  size="xl" data-aos="fade-left" data-aos-duration="1000"/></Link>
                    <Link href={'https://www.facebook.com/'} className="m-5 hover:text-secondary-color transition-all duration-500"><FontAwesomeIcon icon={faPinterest}  size="xl" data-aos="fade-left" data-aos-duration="1000"/></Link>
                </div>
            </div>
        </footer>
    </>
}

export default Footer;