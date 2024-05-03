import React, { useRef, useEffect } from "react";

const InfiniteScroll = ({ loadMore }) => {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          loadMore();
        }
      });
    });

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [loadMore]);

  return <div ref={sentinelRef}></div>;
};

export default InfiniteScroll;
    