import React, { useState, useEffect } from 'react';

export const useWindowSize = (wide, narrow) => {
  const [isSize, setIsSize] = useState(window.innerWidth > 768);

  useEffect(() => {
    const resizeHandler = () => {
      setIsSize(window.innerWidth > 768);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  const logo = isSize ? wide : narrow;
  return { logo, isSize };
};
