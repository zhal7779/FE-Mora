import React, { useEffect } from 'react';

export function useOutClcik(target, closeRef, handleClose) {
  console.log(target, closeRef, handleClose);
  const handleClickOutside = () => {
    if (closeRef.current.contains(target)) {
      handleClose(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
}
