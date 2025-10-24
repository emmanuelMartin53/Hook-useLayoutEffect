import { useLayoutEffect, useState, useRef, useEffect } from "react";
import Content from "./Content";

const Box = () => {

  const [height, setHeight] = useState(100)

  const boxRef = useRef(null)
  const timeRef = useRef(0)


  useLayoutEffect(() => {

    if (boxRef.current.offsetHeight < 150) {
      setHeight(height + 100)
      console.log(`Attente: ${performance.now() - timeRef.current}`)
    }

  }, [height])


  timeRef.current = performance.now()

  const boxStyle = {
      width: "400px",
      height: `${height}px`,
      margin: "0 auto",
      background: height > 100 ? "blue" : "red"
  }



  return (
    <div ref={boxRef} style={boxStyle}>
      {`height: ${height}`}
      <Content />
    </div>
  )
}

export default Box;
