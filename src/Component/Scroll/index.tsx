import React, { useState, useCallback } from 'react';
import { users } from '../../data/index';
import classNames from 'classnames';
import useInfiniteScroll from '../../hooks/useInfinitScroll';

const Scroll: React.FC = () => {
  const [visibleUsers, setVisibleUsers] = useState(users.slice(0, 4));
  const [loading, setLoading] = useState(false);
  const pageSize = 3;

  const fetchMoreUsers = useCallback((): Promise<void> => {
    setLoading(true);

    return new Promise<void>((resolve) => {
      // Simulating fetching more users with a delay (you can replace this with an actual API call)
      setTimeout(() => {
        const newUsers = users.slice(
          visibleUsers.length,
          visibleUsers.length + pageSize
        );
        console.log(newUsers);
        setVisibleUsers((prevUsers) => [...prevUsers, ...newUsers]);
        setLoading(false);
        resolve(); // Resolve the promise after updating the state
      }, 1000);
    });
  }, [visibleUsers]);

  const { myElementRef, scrollInfo, handleScroll } =
    useInfiniteScroll(fetchMoreUsers);

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

export default Scroll;
