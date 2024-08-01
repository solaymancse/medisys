import { FaBorderStyle } from "react-icons/fa"
import Box from "../box/Box"
import { RiShadowLine } from "react-icons/ri"


const CardWith = () => {
  return (
    <>

    <p className="text-sm font-medium my-4 ">Card With</p>

    <div className="grid grid-cols-2 gap-2">
        <Box icon={<FaBorderStyle />} title="Border" />
        <Box icon={<RiShadowLine />} title="Horizontal" />
        
    </div>

</>
  )
}

export default CardWith