import { useState } from "react";
import RoleCard from "../../../components/card/RoleCard/RoleCard"
import CustomInputField from "../../../components/resusable/CustomInputField/CustomInputField"
import Modals from "../../../components/resusable/modals.jsx/Modals"

const RoleAndPermission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
};

  return (
    <div>
      <div>
        <div onClick={showModal} className="flex justify-end my-6">
          <button type="submit" className="bg-[#6B66F6] text-white px-10 py-2 rounded-md">Create Role</button>
        </div>
        <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <div>
            <CustomInputField
              label={"Role Name"}
              type={"text"}
              name={"roleName"}
              placeholder={"Enter Role Name"}

            />
          </div>
        </Modals>
      </div>
      <RoleCard />
    </div>
  )
}

export default RoleAndPermission
