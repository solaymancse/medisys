import { useEffect, useState } from "react"
import HomeBox from "../../../components/homeBox/HomeBox"
import axiosInstance from "../../../utils/axiosConfig"
import { FaDollarSign, FaUserInjured } from "react-icons/fa"
import { BsCapsule, BsClipboard2CheckFill } from "react-icons/bs"
import { GoProjectSymlink } from "react-icons/go"
import { TbCurrencyTaka, TbTruckDelivery } from "react-icons/tb"

const Home = () => {
  const [total, setTotal] = useState();

  useEffect(() => {
    axiosInstance.get('/count')
      .then((res) => setTotal(res.data.data))
  }, [])

  const HomeBoxdata = [
    {
      title: "Total Purchase",
      number: `৳ ${total?.total_sale}`,
      icon: <BsCapsule className="text-orange-300" />,
      bg: "bg-[#ECF2FF]"
    },
    {
      title: "Total Sell",
      number: `৳ ${total?.total_sale}`,
      icon: "৳",
      bg: "bg-[#ECF2FF]"
    },
    {
      title: "Total Medicine",
      number: total?.total_product,
      icon: <BsCapsule className="text-orange-300" />,
      bg: "bg-[#ECF2FF]"
    },
    {
      title: "In Stock",
      number: `${total?.total_stock} (Pcs)`,
      icon: <BsClipboard2CheckFill color="#B0EBB4" />,
      bg: "bg-[#FEF5E5]"
    },
    {
      title: "Out Of Stock",
      number: total?.out_stock,
      icon: <GoProjectSymlink className="text-[#5D87FF]" />,
      bg: "bg-[#E8F7FF]"
    },
    {
      title: "Total Supplier",
      number: total?.total_supplier || 0,
      icon: <TbTruckDelivery className="text-orange-300 " />,
      bg: "bg-[#FDEDE8]"
    },
    {
      title: "Payroll",
      number: "$78,989",
      icon: <FaDollarSign color="#B0EBB4" />,
      bg: "bg-[#E6FFFA]"
    },
    {
      title: "Customer Due",
      number: `৳ ${total?.customer_due}`,
      icon: <TbCurrencyTaka className="text-[#5D87FF]" />,
      bg: "bg-[#EBF3FE]"
    },
    {
      title: "Total Customer",
      number: total?.total_customer,
      icon: <FaUserInjured className="text-[#5D87FF]" />,
      bg: "bg-[#EBF3FE]"
    },
  ]


  return (
    <div className="w-full">
      <HomeBox data={HomeBoxdata} grid="grid grid-cols-2 md:grid-cols-3 " />
    </div>
  )
}

export default Home
