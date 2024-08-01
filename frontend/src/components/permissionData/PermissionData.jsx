import { Checkbox, Row } from "antd"
import { permission } from "../../Data"

const PermissionData = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {permission?.map((item, idx) => (
                <div key={idx} >
                    <h1 className="text-text font-semibold mb-2">{item?.title}</h1>
                    {item?.subtitle?.map((data, index) => (
                        <Row key={index} className="my-2"><Checkbox key={index}>{data}</Checkbox></Row>
                    ))}

                </div>
            ))}

        </div>
    )
}

export default PermissionData
