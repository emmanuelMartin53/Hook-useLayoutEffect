import {useState, useEffect, useLayoutEffect} from 'react';



const Layout = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
      // Effect
      console.log("je suis dans useEffect ")
  }, [count]);


    useLayoutEffect(() => {
      // Effect
      console.log("je suis dans useLayoutEffect")
  }, [count]);

  console.log("render")

  return (
    <div>
      <h2>{count}</h2>
      <button className='btn btn-info mx-3 px-5' onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  )
}

export default Layout
