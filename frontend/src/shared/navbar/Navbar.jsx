import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MobileDrawer from "../../components/mobileDrawer/MobileDrawer";
import SearchModal from "../../components/searchModal/SearchModal";
import Language from "../../components/language/Language";
import { bool } from 'prop-types';
import HoverProfile from "./profile/HoverProfile";

const Navbar = ({ isClicked, setIsClicked,isVerticalLayout }) => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLarge = useMediaQuery({ query: "(max-width: 1200px)" });
  const showDrawer = () => {
    setOpen(true);
  };

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

        <div onClick={showModal}>
          {isLarge ? (
            <IoIosSearch />
          ) : (
            <div className="flex items-center border border-slate-200 py-1 rounded-md px-6">
              <input type="text" placeholder="Search" className="outline-none dark:bg-dark" />
              <IoIosSearch />
            </div>
          )}
        </div>
      </div>

      <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="flex items-center gap-6">
        <Language />
        <IoMail color="#777" />
        <BsBellFill color="#777" />

        <HoverProfile />


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
