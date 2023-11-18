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
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [list, setList] = useState<string[]>([
    'Chris',
    'Alex',
    'Brittney',
    'Ciara',
    'Tyler',
    'Jay',
  ]);

  useEffect(() => {
    updateScrollHeight();
  }, [list]); // Update scroll height whenever the list changes

  const updateScrollHeight = () => {
    if (myElementRef.current) {
      const newScrollHeight = myElementRef.current.scrollHeight;
      console.log('Scroll Height:', newScrollHeight);
      setScrollHeight(newScrollHeight);
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
    <>
      <div className='border-4 mb-22 bg-orange-200'>
        <input type='text' onChange={handleInputChange} />
        <button onClick={addUser}>Submit</button>
      </div>
      <div>
        <p>Scroll Height: {scrollHeight}</p>
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
    </>
  );

  function updateUser() {
    console.log('Updating user list');
    return list.map((user, index) => (
      <div key={index} className='border p-4 mb-4'>
        {user}
      </div>
    ));
  }
};

export default FAQ;
