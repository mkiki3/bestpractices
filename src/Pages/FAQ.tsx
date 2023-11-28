import React from 'react';
// import { users } from '../data/index';
import classNames from 'classnames';
import useInfiniteScroll from '../hooks/useInfinitScroll';

const FAQ: React.FC = () => {
  //   const container = myElementRef.current;
  //   if (container) {
  //     const { scrollHeight, scrollTop, clientHeight } = container;
  //     if (scrollHeight - scrollTop === clientHeight) {
  //       // User has scrolled to the bottom, fetch more users
  //       fetchMoreUsers();
  //     }
  //   }
  //   updateScrollHeight(); // Update scroll information
  // };

  const { myElementRef, scrollInfo, visibleUsers, loading, handleScroll } =
    useInfiniteScroll(3);

  return (
    <div className=''>
      <div className='container'>
        <div className='container-sizes'>
          <p>
            Scroll Height: {scrollInfo.scrollHeight} ScrollTop:{' '}
            {scrollInfo.scrollTop} ClientHeight: {scrollInfo.clientHeight}
          </p>
        </div>
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

/**
 *  <div className=''>
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
 */
