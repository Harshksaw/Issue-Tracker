'use client'
import { Card, Container } from '@radix-ui/themes';
import React from 'react'
import {ResponsiveContainer, PieChart, Pie, Cell, Legend, XAxis, YAxis, BarChart, Bar} from 'recharts';
interface Props {
    open: number;
    inProgress: number;
    closed: number;
  }
  
const IssueChart = ({open, inProgress, closed}: Props) => {
    const data = [
        {label: 'Open',  value: open},
        {label: 'In Progress',  value: inProgress},

        {label: 'Closed',  value: closed},
    ]

  return (
    <Card>
        <ResponsiveContainer width="100%" height={300} >
            <BarChart data={data}>
                <XAxis dataKey="label" />
                <YAxis />
                <Bar dataKey="value"  barSize={50} style={{fill: 'var(--accent-8)'}}/>

            </BarChart >

        </ResponsiveContainer>
      
    </Card>
  )
}

export default IssueChart
