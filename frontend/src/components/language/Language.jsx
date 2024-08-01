import { Select, Space } from 'antd';
const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Language = () => (
  <div className='languageSelect'>
    <Space wrap>
      <Select
        defaultValue="US"
        onChange={handleChange}
        optionLabelProp="label"
      >
        {[
          {
            name: "United States",
            dialCode: "+1",
            isoCode: "US",
            lan: "en",
            flag: "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
          },
          {
            name: "Bangladesh",
            dialCode: "+880",
            isoCode: "BD",
            lan: "bn",
            flag: "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
          },
          {
            name: "Saudi Arabia",
            dialCode: "+966",
            isoCode: "SA",
            lan: "ar",
            flag: "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
          },
          {
            name: "India",
            dialCode: "+91",
            isoCode: "IN",
            lan: "hi",
            flag: "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
          },
        ].map((country) => (
          <Option key={country.isoCode} value={country.isoCode} label={<img src={country.flag} alt={country.name} style={{ backgroundColor: 'red', width: 20 }} />}>
            <span className='flex items-center'>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: 20, marginTop: 5 }}
              />

            </span>
          </Option>
        ))}
      </Select>
    </Space>
  </div>
);

export default Language;
