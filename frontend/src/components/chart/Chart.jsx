import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '16/08',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '17/08',
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '18/08',
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: '19/08',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '20/08',
    uv: -1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '21/08',
    uv: 2390,
    pv: -3800,
    amt: 2500,
  },
  {
    name: '22/08',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#fff" />
        <Bar type='monotone' dataKey="pv" fill="#23AFDB" />
        <Bar type='monotone' dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default Chart;
