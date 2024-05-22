
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Animation.css';

const Animations = ({ title, content, imageUrl, from }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div
      className={`animated-section ${from} ${inView ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="text-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default Animations;
