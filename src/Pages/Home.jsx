import React from 'react'

import Navbar from '.././components/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from '../components/Carousel';
import img1 from '.././images/im2.jpg'
import img2 from '.././images/planet2.png'
import img3 from '.././images/planet1.png'

import Footer from '../components/Footer';
import Animations from '../components/Animation/Animations';
import Background from '../components/Background/Background';
import { useState } from 'react';
export default function Home() {
  const [playStatus, setPlayStatus] = useState(true);
  const [maincount, setMaincount] = useState(0);
 
  const carouselItems = [
    {
      title: 'A Journey Through the Stars',
      content: 'Explore the cosmos with our guided tours through the galaxy.',
      imageUrl: 'https://via.placeholder.com/800x400/000000/FFFFFF?text=Space+1'
    },
    {
      title: 'Romantic Evenings Under the Stars',
      content: 'Experience the magic of the universe with your loved one.',
      imageUrl: 'https://via.placeholder.com/800x400/000000/FFFFFF?text=Space+2'
    },
    {
      title: 'The Wonders of the Universe',
      content: 'Discover the beauty of distant stars and planets.',
      imageUrl: 'https://via.placeholder.com/800x400/000000/FFFFFF?text=Space+3'
    }
  ];
  return (
    <div>
     <Navbar />
     <Carousel items={carouselItems} />
     
     <Animations
        title="Section 3"
        content="This is the content for the third section."
        imageUrl= {img2}
        from="left"
      />

<Animations
        title="Section 1"
        content="This is the content for the first section."
        imageUrl={img3}
        from ="right"
      />
      <Animations
        title="Section 1"
        content="This is the content for the first section."
        imageUrl={img2}
        from ="left"
      />
     <Footer />
      
    </div>
  )
}
