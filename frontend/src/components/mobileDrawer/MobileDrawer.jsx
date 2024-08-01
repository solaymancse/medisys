import { Drawer } from 'antd';
import PropTypes from 'prop-types';
import Sidebar from '../../shared/sidebar/Sidebar';

const MobileDrawer = ({ open, setOpen }) => {

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      width={280}
    >
      <Sidebar onClose={onClose}/>
    </Drawer>
  );
};

MobileDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MobileDrawer;
