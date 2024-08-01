import { Form, Button, Row, Col, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomInputField from '../../components/resusable/CustomInputField/CustomInputField';


const RandomFormLayout = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container mx-auto md:p-4 ">
            <Card title="Register Form" bordered={false}>
                <Card
                    type="inner"
                    title={<span><InfoCircleOutlined /> Register Form Layout</span>}
                    className="mb-4"
                >
                    <Form
                        form={form}
                        name="basic"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <CustomInputField
                                    label="Full Name"
                                    name="fullName"
                                    rules={[{ required: true, message: 'Please Enter Your Full Name!' }]}
                                    type="text"
                                />
                            </Col>
                            <Col xs={24} sm={12}>
                                <CustomInputField
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please Enter Your Username!' }]}
                                    type="text"
                                />
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <CustomInputField
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please Enter your Email!' }]}
                                    type="email"
                                />
                            </Col>
                            <Col xs={24} sm={12}>
                                <CustomInputField
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input Your password!' }]}
                                    type="password"
                                />
                            </Col>
                        </Row>


                        <Form.Item>
                            <Button className='bg-[#6B66F6] h-[40px] text-white px-8' htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Card>
        </div>
    );
};

export default RandomFormLayout;
