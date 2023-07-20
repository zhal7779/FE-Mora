import React, { useEffect } from 'react';
//무한스크롤 DOM요소 가시성 감지 함수
export const useObserver = (
  observerRef: React.RefObject<HTMLDivElement>,
  fetchNextPage: () => void,
  hasNextPage: boolean = false
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);
};
