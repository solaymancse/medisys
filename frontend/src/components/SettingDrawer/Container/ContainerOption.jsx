import { CgMenuBoxed } from "react-icons/cg"
import Box from "../box/Box"
import { GoScreenFull } from "react-icons/go"
import { useRef } from "react";


const ContainerOption = () => {
  const containerRef = useRef(null);

  const toggleScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) { /* Firefox */
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) { /* IE/Edge */
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    }
  };


  return (
    <div ref={containerRef}>
      <p className="text-sm font-medium my-4 ">Container Option</p>
      <div className="grid grid-cols-2 gap-2">
        <Box icon={<CgMenuBoxed />} title="Boxed" />
        <Box onClick={toggleScreen} icon={<GoScreenFull />} title="Full" />
      </div>
    </div>
  )
}

export default ContainerOption