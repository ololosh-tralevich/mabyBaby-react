import styles from "./results.module.scss"
import cartinka from "../Results/catWithBubble.png"
import Button from '../../shared/components/Button';

import { PieChart, Pie, Cell } from "recharts";
const data = [
    { name: 'false answer', value: 3 },
    { name: 'true answer', value: 9 },
  ];
  
  const COLORS = ['#D7D7D7', '#FF6B09'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const Crujok=()=>{
      return(
          <>
        <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </>
      )
  }
  const btnClick=()=>{
    
  }

  const Results = () => {
    return (
        <div className="container">
    
            <h1>Результаты</h1>
            <p>[ Теория тестирования_]</p>
            {Crujok()}
            <div className={styles.answers}>
            <p>Верных ответов - 12 </p>
            <p>Всего вопросов - 12</p>
            </div>
            <img className={styles.image} src={cartinka}></img>
            <h2>Неплохой результат!</h2>
            <p>Но тебе еще нужно доучить материалы.</p>
            <Button btnText="Пройти еще раз" type='button' onClickBtn={btnClick} className={styles.button} isActive={true}></Button>
        </div>
    )
}

export default Results;