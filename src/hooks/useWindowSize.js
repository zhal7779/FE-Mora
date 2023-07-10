import React, { useState, useEffect } from 'react';

export const useWindowSize = (wide, narrow) => {
  const [mobileSize, setMobileSize] = useState(window.innerWidth <= 480);
  const [isSize, setIsSize] = useState(window.innerWidth > 768);

  useEffect(() => {
    const resizeHandler = () => {
      setIsSize(window.innerWidth > 768);
      setMobileSize(window.innerWidth <= 480);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  const logo = isSize ? wide : narrow;
  return { logo, isSize, mobileSize };
};
