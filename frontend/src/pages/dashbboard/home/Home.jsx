import { HomeBoxdata } from "../../../Data"
import EmployeeSalary from "../../../components/EmployeeSalary/EmployeeSalary"
import HomeBox from "../../../components/homeBox/HomeBox"
import Revenue from "../../../components/revenue/Revenue"

const Home = () => {
  return (
    <div className="w-full">
      <HomeBox data={HomeBoxdata} grid="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6" />
      <Revenue />
      <EmployeeSalary />

    </div>
  )
}

export default Home
