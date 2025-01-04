import { Modal } from 'antd';
import { bool, node } from "prop-types";

const Modals = ({ isModalOpen, setIsModalOpen, children,width }) => {


  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (

    <Modal width={width} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      {children}
    </Modal>

  );
};

Modals.propTypes = {
  isModalOpen: bool,
  setIsModalOpen: bool,
  children: node
}
export default Modals;