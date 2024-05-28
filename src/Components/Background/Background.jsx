import React from 'react';
import bg_bannner1 from '../../assets/banner-bg.png'
import bg_bannner2 from '../../assets/bg-banner2.jpg'
import bg_bannner3 from '../../assets/bg-banner3.jpg'
import bg_bannner4 from '../../assets/bg-banner4.jpg'

const Background = ({heroCount}) => {
    if(heroCount === 0) {
        return <img className='w-full h-[68vh] absolute object-cover ' src={bg_bannner1} alt="" />
    } 
    else if(heroCount === 1) {
        return <img className='w-full h-[68vh] absolute object-cover ' src={bg_bannner2} alt="" />
    }
    else if(heroCount === 2) {
        return <img className='w-full h-[68vh] absolute object-cover ' src={bg_bannner3} alt="" />
    }
    else if(heroCount === 3) {
        return <img className='w-full h-[68vh] absolute object-cover ' src={bg_bannner4} alt="" />
    }
}

export default Background;
