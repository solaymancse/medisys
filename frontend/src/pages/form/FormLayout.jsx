import { Form, Button, Row, Col, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomInputField from '../../components/resusable/CustomInputField/CustomInputField';


const FormLayout = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container mx-auto md:p-4 dark:bg-dark dark:text-white ">
      <Card title="Basic Header Form" bordered={false}>
        <Card
          type="inner"
          title={<span><InfoCircleOutlined /> Person Info</span>}
          className="mb-4 dark:bg-dark dark:text-white"
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
                  label="First Name"
                  name="firstName"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                  type="text"
                />
              </Col>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="Last Name"
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your last name!' }]}
                  type="text"
                />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="Select Gender"
                  name="gender"
                  rules={[{ required: true, message: 'Please select your gender!' }]}
                  type="select"
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
              </Col>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="Date of Birth"
                  name="dob"
                  rules={[{ required: true, message: 'Please select your date of birth!' }]}
                  type="date"
                />
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="City"
                  name="city"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                  type="text"
                />
              </Col>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="State"
                  name="state"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                  type="text"
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="Street"
                  name="street"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                  type="text"
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="Hobbies"
                  name="hobbies"
                  rules={[{ required: true, message: 'Please select at least one hobby!' }]}
                  type="checkbox"
                  options={[
                    { label: 'Reading', value: 'reading' },
                    { label: 'Traveling', value: 'traveling' },
                    { label: 'Cooking', value: 'cooking' },
                  ]}
                /></Col>
              <Col xs={24} sm={12}>
                <CustomInputField
                  label="Membership"
                  name="membership"
                  rules={[{ required: true, message: 'Please select your membership type!' }]}
                  type="radio"
                  options={[
                    { value: 'free', label: 'Free' },
                    { value: 'paid', label: 'Paid' },
                  ]}
                />
              </Col>
            </Row>
            <Form.Item>
              <Button className='bg-[#6B66F6] dark:border dark:bg-dark dark:text-white  h-[40px] text-white px-8' htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Card>
    </div>
  );
};

export default FormLayout;
