import React from 'react';
import './Background.css';
import vid1 from '../../images/space.mp4';
import img1 from '../../images/9808866.jpg';
import img2 from '../../images/im2.jpg';

const Background = ({ playStatus, maincount }) => {
  return (
    <div className="background-container">
      {playStatus ? (
        <video className="background-video" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img 
          src={maincount === 0 ? img1 : img2} 
          className="background-image" 
          alt="background" 
        />
      )}
    </div>
  );
};

export default Background;
