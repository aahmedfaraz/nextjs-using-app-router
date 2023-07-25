import { useEffect, useState } from "react";

const Spotlight = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});

  const mouseMoveHandler = (event: MouseEvent) => {
    setMouseCoordinates({
        x:event.clientX,
        y:event.clientY
    });
    document.getElementById('spotlight')!.style.left = `${mouseCoordinates.x}px`;
    document.getElementById('spotlight')!.style.top = `${mouseCoordinates.y}px`;
  }

  useEffect(()=>{
    window.addEventListener('mousemove', mouseMoveHandler);
    return(()=>{
        window.removeEventListener('mousemove', mouseMoveHandler);
    })
  }, [mouseCoordinates]);

  if(mouseCoordinates === null) {
    return <></>;
  };

  return (
    <div id="spotlight" className={`
        absolute
        -translate-x-1/2
        -translate-y-1/2
        w-[350px]
        h-[350px]
        rounded-full
        bg-[#ffffff7e]
        blur-[200px]
        brightness-200
      `}></div>  
  );
}

export default Spotlight;