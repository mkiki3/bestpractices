import React, { useRef, useState, useCallback } from 'react';
import { users } from '../data/index';
import classNames from 'classnames';

const FAQ: React.FC = () => {
  const myElementRef = useRef<HTMLDivElement>(null);
  const [scrollInfo, setScrollInfo] = useState({
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
  });
  const [loading, setLoading] = useState(false);
  /**
   * The slice function is used to create a shallow copy of a portion of the
   *  users array. In this case, it's creating a copy of the first 4 items
   * in the users array, and this is the initial set of visible users.
   */
  const [visibleUsers, setVisibleUsers] = useState(users.slice(0, 4)); // Initial visible users
  const pageSize = 3; // Number of items to show per page

  const updateScrollHeight = () => {
    if (myElementRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = myElementRef.current;
      setScrollInfo({ scrollHeight, scrollTop, clientHeight });
    }
  };

  const fetchMoreUsers = useCallback(async () => {
    setLoading(true);
    // Simulating fetching more users with a delay (you can replace this with an actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Simulating fetching more users
    const newUsers = users.slice(
      visibleUsers.length,
      visibleUsers.length + pageSize
    );
    console.log(newUsers);
    setVisibleUsers((prevUsers) => [...prevUsers, ...newUsers]);
    setLoading(false);
  }, [visibleUsers]);

  const handleScroll = () => {
    const container = myElementRef.current;
    if (container) {
      const { scrollHeight, scrollTop, clientHeight } = container;
      if (scrollHeight - scrollTop === clientHeight) {
        // User has scrolled to the bottom, fetch more users
        fetchMoreUsers();
      }
    }
    updateScrollHeight(); // Update scroll information
  };

  return (
    <div className=''>
      <div className='container-sizes'>
        <p>
          Scroll Height: {scrollInfo.scrollHeight} ScrollTop:{' '}
          {scrollInfo.scrollTop} ClientHeight: {scrollInfo.clientHeight}
        </p>
      </div>
      <div className='container'>
        <div
          onScroll={handleScroll}
          className={classNames(
            'my-12 border bg-blue-200 flex-col justify-center items-center overflow-y-auto max-h-36'
          )}
          ref={myElementRef}
        >
          {visibleUsers.map((x: string, index: number) => (
            <div key={index} className={classNames('p-2 border')}>
              {x}
            </div>
          ))}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
