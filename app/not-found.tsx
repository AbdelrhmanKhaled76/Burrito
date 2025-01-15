import Image from 'next/image';
import React from 'react';
import notFoundImage from './pics/not-found.png'

const NotFound = () => {
    return (
        <div>
            <div className='text-center py-10'><Image src={notFoundImage} alt='not found image'></Image></div>
        </div>
    );
}

export default NotFound;
