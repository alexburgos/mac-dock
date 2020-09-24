import React from 'react';
import { useMotionValue } from 'framer-motion';
import Img from './Img';

function Dock({ images }) {
  const mouseX = useMotionValue(null);

  return (
    <div className='dock'>
      <div
        className='icons'
        onMouseMove={(event) => mouseX.set(event.nativeEvent.x)}
        onMouseLeave={() => mouseX.set(null)}
      >
        {images.map((image, index) => (
          <Img src={image} key={index} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
}

export default Dock;
