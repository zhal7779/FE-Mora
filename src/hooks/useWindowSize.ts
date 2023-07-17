import React, { useState, useEffect } from 'react';

interface windowSizeValue {
  logo: JSX.Element;
  tabletSize: boolean;
  mobileSize: boolean;
}

export const useWindowSize = (wide: JSX.Element, narrow: JSX.Element): windowSizeValue => {
  const [mobileSize, setMobileSize] = useState(window.innerWidth <= 480);
  const [tabletSize, setTabletSize] = useState(window.innerWidth > 768);

  useEffect(() => {
    const resizeHandler = () => {
      setTabletSize(window.innerWidth > 768);
      setMobileSize(window.innerWidth <= 480);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  const logo = tabletSize ? wide : narrow;
  return { logo, tabletSize, mobileSize };
};
