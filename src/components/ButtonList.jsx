import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Button from './Button'
import { useRef } from "react";

const ButtonList = () => {
  const scrollRef = useRef(null)
  const handleScroll = (direction, distance, duration)=> {
   if(!scrollRef.current) return 

    if(scrollRef.current) {
      const start = scrollRef.current.scrollLeft;
      const target =  direction === 'left'? start -distance : start+distance
      const startTime = performance.now()

      const animateScroll = (currentTime) =>{
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed/duration,1)
        const linearScroll = start + (target -start) * progress

        scrollRef.current.scrollLeft  = linearScroll

        if(progress <1){
          requestAnimationFrame(animateScroll)
        }
      }
      requestAnimationFrame(animateScroll)
    }
  }
  return (
    <div className="flex items-center gap-2">
     <div onClick={()=> handleScroll('left', 100, 100)} className=" cursor-pointer">
        <IoIosArrowBack size={24}/>
      </div>
    <div ref={scrollRef}    className='  duration-100 ease-linear delay-1000 flex justify-start gap-5 mt-3 items-center  px-2  overflow-x-scroll  [&::-webkit-scrollbar]:h-0  w-[1200px] snap-x snap-x-mandatory  button-list-horizontal-scroll'>
     
      <Button name="All"/>
      <Button name="Live"/>
      <Button name="Podcasts"/>
      <Button name="Music "/>
      <Button name="Trailers"/>
      <Button name="News"/>
      <Button name="Thrillers"/>
      <Button name="Mixes"/>
      <Button name="Strategies"/>
      <Button name="Drama"/>
      <Button name="Comedy"/>
      <Button name="Romance"/>
      <Button name="Cricket"/>
      <Button name="Football"/>
      <Button name="Gadgets"/>
      <Button name="Watched"/>
    </div>
      <div onClick={()=> handleScroll('right',100, 100)} className=" cursor-pointer">
      <IoIosArrowForward size={24}/>
      </div>
    </div>
  )
}

export default ButtonList