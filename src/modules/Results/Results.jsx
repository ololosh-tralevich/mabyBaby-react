import styles from './results.module.scss';
import Button from '../../shared/components/Button';


import { PieChart, Pie, Cell } from 'recharts';
import catPc from './catPcx.png';
import catPc2x from './catPcx2.png';

const data = [
  { name: 'false answer', value: 3 },
  { name: 'true answer', value: 9 },
];

const COLORS = ['#D7D7D7', '#FF6B09'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Crujok = () => {
  return (
    <>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={145}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};
const btnClick = () => {};

const Results = () => {
  return (
    <div className="container">
      <div className={styles.wrapper_answer}>
        <h1 className={styles.header}>Results</h1>
        <p className={styles.header__text}>[ Testing theory_]</p>
        {Crujok()}
        <div className={styles.answers}>
          <p className={styles.text_answers}>Correct answers - 9 </p>
          <p>Total questions - 12</p>
        </div>
        <picture>
          <source
            media="(max-width: 719px)"
            src="./CatMobilex2.png  1x, ./CatMobilex2.png 2x"
          />
          <source
            media="(min-width: 720px)"
            src={catPc2x}
          />
          <img src={catPc} alt="котек" />
        </picture>
        <h2>Not bad!</h2>
        <p className={styles.text}>But you still need to learn some materials.</p>
        <Button
          btnText="Try again"
          type="button"
          onClickBtn={btnClick}
          className={styles.button}
          isActive={true}
        ></Button>
      </div>
    </div>
  );
};

export default Results;
