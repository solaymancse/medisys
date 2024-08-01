import PropTypes from 'prop-types';
import { IoIosSearch } from 'react-icons/io';
import Modals from '../resusable/modals.jsx/Modals';

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {


    return (
        <>
            <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <div className="flex mt-8 items-center justify-between border border-slate-200 py-2 rounded-md px-6">
                    <input type="text" placeholder="Search" className="outline-none" />
                    <IoIosSearch />
                </div>
            </Modals>
        </>
    );
};

SearchModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.bool.isRequired,
}

export default SearchModal;