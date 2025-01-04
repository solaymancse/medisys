import { FiMenu } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MobileDrawer from "../../components/mobileDrawer/MobileDrawer";
import { bool } from 'prop-types';

const Navbar = ({ isClicked, setIsClicked, isVerticalLayout }) => {
  const [open, setOpen] = useState(false);
  const [, setIsModalOpen] = useState(false);

  const isLarge = useMediaQuery({ query: "(max-width: 1200px)" });
  const showDrawer = () => {
    setOpen(true);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClicked = () => {
    setIsClicked(!isClicked);
  }


  return (
    <div className={`flex justify-between items-center w-full ${isVerticalLayout ? "max-w-[1200px] mx-auto" : ""}`}>
      <div className="flex items-center gap-6">
        {!isLarge ? (<div className=" cursor-pointer" onClick={handleClicked} >
          {!isVerticalLayout && <FiMenu />}
        </div>) : (
          <div className=" cursor-pointer" onClick={showDrawer}>
            <FiMenu />
          </div>
        )}

        <MobileDrawer open={open} setOpen={setOpen} />

      </div>


      <div className="flex items-center gap-6">
        <IoMail color="#777" />
        <BsBellFill color="#777" />
        <p>{user?.user?.name}</p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isClicked: bool,
  setIsClicked: bool,
  isVerticalLayout: bool,
};
export default Navbar;
