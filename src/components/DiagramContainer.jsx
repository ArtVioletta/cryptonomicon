import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Area, Legend,Line,Tooltip,XAxis,CartesianGrid, AreaChart, ResponsiveContainer,YAxis } from 'recharts';
import classes from './Diagram.module.css';
import moment from 'moment';

export const DiagramContainer = ({setGraph,graph, setCurrentTickers, setShowDiagram}) => {
  return (
    <div style={{width:'100%', height:'100%'}}>
      <div style={{width:'100%', height:'5%'}}>
        <span style={{float:'right', cursor:'pointer'}} 
        onClick={() => {
          console.log('close');
          setGraph([])
          setCurrentTickers('')
          setShowDiagram(false)
        }}>
        <CloseIcon/>
          </span>
        </div>
        <div style={{ height:'50%', marginTop:20}}>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={300}
          data={graph}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
          <XAxis 
          dataKey="date"
          allowDuplicatedCategory={false}
          dy={3}
          interval={3}
          tickFormatter={str => {
            return moment(str).format('hh:mm:ss')
          }}/>
          <YAxis 
            yAxisId={'value'}
            type='number'
            dataKey={'value'}
            tickCount={4}
            domain={['auto', 'dataMax * 1.2']}
            tickFormatter={number => `$${number}`}
            />
          <Tooltip 
              content={<CustomTooltip3 />}
              cursor={{ strokeDasharray: '3 3' }}
              position={{ y: -50 }}/>
          <Area
            connectNulls
            yAxisId={'value'}
            type='linear'
            dataKey='value'
            activeDot={{ r: 3 }}
            name='value'
            strokeWidth='1'
            fillOpacity={1}
            fill={ '#8884d8'}
          />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

const CustomTooltip3 = ({ active, payload, label }) => {
  console.log(active, payload, label,'tooltip');
  if (active && payload && payload.length) {
    return (
      <div className={classes.customTooltip}>
      <div>
        <p className={classes.label}>
          <b>{`${payload[0].value}$`}</b> {`${ new Date(label).toUTCString()}`}
        </p>
      </div>
    </div>
    );
  }
  return null;
};