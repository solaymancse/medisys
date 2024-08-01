import { Form, Input, DatePicker, Select, Radio, Checkbox } from 'antd';

const { Option } = Select;

const CustomInputField = ({ label, name, rules, type, options }) => {
    const getInput = (type) => {
        switch (type) {
            case 'text':
                return <Input className='py-2 dark:bg-dark dark:text-white ' />;
            case 'date':
                return <DatePicker className="w-full py-2" />;
            case 'select':
                return (
                    <Select allowClear className='dark:bg-dark dark:text-white'>
                        {options.map((option) => (
                            <Option key={option.value} value={option.value} label={option.label}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                );
            case 'radio':
                return (
                    <Radio.Group>
                        {options.map((option) => (
                            <Radio key={option.value} value={option.value}>
                                {option.label}
                            </Radio>
                        ))}
                    </Radio.Group>
                );
            case 'checkbox':
                return (
                    <Checkbox.Group options={options} />
                );

            default:
                return <Input className='py-2 dark:bg-dark dark:text-white' />;
        }
    };

    return (
        <Form.Item label={label} name={name} rules={rules}>
            {getInput(type)}
        </Form.Item>
    );
};

CustomInputField.propTypes = {
    label: String,
    name: String,
    rules: String,
    type: String,
    options: String,
};

export default CustomInputField;
