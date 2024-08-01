import {
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { number } from 'prop-types'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Areacharts = ({ height, top }) => {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="100%" height={height ? height : 200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: top ? top : 80,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >

          <Tooltip />
          <Area type="monotone" dataKey="pv" fill="#F6FCFF" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

Areacharts.demoUrl = 'https://codesandbox.io/p/sandbox/synchronized-line-charts-37rhmf';

Areacharts.propTypes = {
  height: number,
  top: number,
}
export default Areacharts;
