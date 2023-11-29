import { useRef, useState } from 'react';

const useInfiniteScroll = (callback: () => void) => {
  const myElementRef = useRef<HTMLDivElement>(null);

  const [scrollInfo, setScrollInfo] = useState({
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
  });

  /**
   * The slice function is used to create a shallow copy of a portion of the
   *  users array. In this case, it's creating a copy of the first 4 items
   * in the users array, and this is the initial set of visible users.
   */

  const updateScrollHeight = () => {
    if (myElementRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = myElementRef.current;
      setScrollInfo({ scrollHeight, scrollTop, clientHeight });
    }
  };

  const handleScroll = () => {
    const container = myElementRef.current;
    if (container) {
      const { scrollHeight, scrollTop, clientHeight } = container;
      if (scrollHeight - scrollTop === clientHeight) {
        // User has scrolled to the bottom, fetch more users
        callback();
      }
    }
    updateScrollHeight(); // Update scroll information
  };

  return { myElementRef, scrollInfo, handleScroll };
};

export default useInfiniteScroll;
