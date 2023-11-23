/**
 * scrollTop: This property represents the number of pixels that the content of an element is scrolled vertically.
 *  For example, if the content is scrolled to the very top, scrollTop will be 0. As the user scrolls down, scrollTop will increase.

clientHeight: This property represents the height of the viewport in the browser, excluding the browser's
 chrome (such as the address bar, navigation buttons, etc.). It essentially gives you the height of the visible 
 content area within the browser window.

 clientHeight:

Represents the height of the visible content area of an element.
Includes the height of the content, excluding padding, border, and margin.
Essentially, it gives you the height of the part of the element that is currently visible in the viewport.
scrollHeight:

Represents the total height of the content area, including the portions that are currently hidden due to overflow and not visible in the viewport.
Includes the height of the content, padding, and potentially the height of any horizontal scrollbar (if it's present and affecting the layout).
It represents the full height of the content, whether it's currently visible or not.
   10 +  212 = 222 >= 500 -200  => 222 >= 300
if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
  // Load more items when the user is near the bottom
  setPage((prevPage) => prevPage + 1);
}
scrollTop: The number of pixels that the content of the container is scrolled vertically.

clientHeight: The height of the container's content area in pixels, including padding but not the scrollbar.

scrollHeight: The total height of the container, including padding and the height of any potential scrollbar.
 */

import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';

const FAQ: React.FC = () => {
  const myElementRef = useRef<HTMLDivElement>(null);
  const inputValueRef = useRef<string>('');
  const [scrollInfo, setScrollInfo] = useState({
    scrollHeight: 0,
    scrollTop: 0,
    clientHeight: 0,
  });
  const [list, setList] = useState<string[]>([
    'Chris',
    'Alex',
    'Brittney',
    'Ciara',
    'Tyler',
    // 'Jay',
    // 'Mia',
    // 'Shawna',
    // 'Larry',
    // 'Jackson',
    // 'Michael',
    // 'Juan',
  ]);
  // const [pageNumber, setPageNumber] = useState(1);
  // const pageSize = 3;

  useEffect(() => {
    updateScrollHeight();
  }, [list]); // Update scroll height whenever the list changes

  const updateScrollHeight = () => {
    if (myElementRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = myElementRef.current;
      setScrollInfo({ scrollHeight, scrollTop, clientHeight });
    }

    console.log('before', scrollInfo.scrollTop + scrollInfo.clientHeight);
    if (
      scrollInfo.scrollTop + scrollInfo.clientHeight >=
      scrollInfo.scrollHeight - 200
    ) {
      console.log('left', scrollInfo.scrollTop + scrollInfo.clientHeight);
      // Add your logic to load more items here
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputValueRef.current = event.target.value;
  };

  const addUser = () => {
    // Use the setList function to update the state and trigger a re-render
    setList((prevList) => [...prevList, inputValueRef.current]);
  };

  // Use useMemo to memoize the user list
  const memoizedUserList = useMemo(updateUser, [list]);

  return (
    <div className='container123 bg-pink-250'>
      <div className='border-4 mb-22 bg-orange-200'>
        <input type='text' onChange={handleInputChange} />
        <button onClick={addUser}>Submit</button>
      </div>
      <div>
        <p>
          Scroll Height: {scrollInfo.scrollHeight} {''} ScrollTop:{' '}
          {scrollInfo.scrollTop} {''}
          ClientHeight: {scrollInfo.clientHeight}
        </p>
      </div>

      <div
        onScroll={updateScrollHeight}
        className={classNames(
          'my-12 border  bg-blue-200 flex-col  justify-center items-center overflow-y-auto max-h-40'
        )}
        ref={myElementRef}
      >
        {memoizedUserList}
      </div>
    </div>
  );

  function updateUser() {
    return list.map((user, index) => (
      <div key={index} className='border p-4 mb-4'>
        {user}
      </div>
    ));
  }

  // function updateUser2() {
  //   const startIndex = (pageNumber - 1) * pageSize;
  //   const endIndex = startIndex + pageSize;
  //   return list.slice(startIndex, endIndex).map((user, index) => (
  //     <div key={index} className='border p-4 mb-2'>
  //       {user}
  //     </div>
  //   ));
  // }
};

export default FAQ;
