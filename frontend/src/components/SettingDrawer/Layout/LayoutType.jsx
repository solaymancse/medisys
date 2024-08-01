import { MdHorizontalSplit, MdVerticalShades } from "react-icons/md"
import Box from "../box/Box"
import { bool } from 'prop-types';

const LayoutType = ({setVerticalLayout }) => {

    const handleLayoutChange = (layoutType) => {
        setVerticalLayout(layoutType === 'vertical');
    };
    return (
        <>

            <p className="text-sm font-medium my-4 ">Layout Type</p>

            <div className="grid grid-cols-2 gap-2">
                <Box icon={<MdVerticalShades />} title="Vertical" onClick={() => handleLayoutChange('vertical')} />
                <Box icon={<MdHorizontalSplit />} title="Horizontal" onClick={() => handleLayoutChange('horizontal')} />
                
            </div>

        </>
    )
}

LayoutType.propTypes = {
    setVerticalLayout: bool
}

export default LayoutType