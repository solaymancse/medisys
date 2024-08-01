import { Drawer, Slider } from 'antd';
import { bool } from 'prop-types';
import Theme from './Theme/Theme';
import Color from './color/Color';
import LayoutType from './Layout/LayoutType';
import ContainerOption from './Container/ContainerOption';
import CardWith from './Card/CardWith';
import { useState } from 'react';

const SettingDrawer = ({ open, setOpen,setVerticalLayout }) => {
    const [stepsCount, setStepsCount] = useState(5);

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Drawer
                title="Pick Your Style"
                placement="right"
                width={300}
                onClose={onClose}
                open={open}
                
            >
                <Theme />
                <Color onClose={onClose}/>
                <LayoutType setVerticalLayout={setVerticalLayout}/>
                <ContainerOption />
                <CardWith />

                <div className='mt-6'>
                    <p className="text-sm font-medium my-4 ">Theme Border Radius</p>
                    <Slider min={2} max={10} value={stepsCount} onChange={setStepsCount} />
                </div>

            </Drawer>
        </>
    );
};
SettingDrawer.propTypes = {
    open: bool,
    setOpen: bool,
    setVerticalLayout: bool,
}
export default SettingDrawer;