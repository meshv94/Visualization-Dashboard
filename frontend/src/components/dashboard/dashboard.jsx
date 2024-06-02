import React from 'react'
import { ResponsiveContainer, AreaChart, Cell, LineChart, Area, Line, XAxis, YAxis, PieChart, Pie, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'
import { pdata } from '../../../data'

const Dashboard = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div style={{ width: "80%" }}>

            <ResponsiveContainer width="100%" height={400} stroke="black">
                <AreaChart data={pdata} stroke="black">
                    <CartesianGrid strokeDasharray="3 3" stroke="grey" />
                    <XAxis dataKey="sector" interval={'equidistantPreserveStart'} stroke="black" />
                    <YAxis dataKey="intensity" stroke="black" />
                    <Tooltip stroke="black" fill="white" />
                    <Legend stroke="black" fill="white" />
                    <Area dataKey="intensity" stroke="#06572f" fill="#06572f" />
                </AreaChart>
            </ResponsiveContainer>
            <br />
            <br />
            <br />
            <br />
            <ResponsiveContainer width="100%" height={400} stroke="black">
                <LineChart data={pdata} stroke="black">
                    <CartesianGrid strokeDasharray="3 3" stroke="grey" />
                    <XAxis dataKey="sector" interval={'equidistantPreserveStart'} stroke="black" />
                    <YAxis dataKey="relevance" stroke="black" />
                    <Tooltip stroke="black" fill="white" />
                    <Legend stroke="black" fill="white" />
                    <Line type='monotone' dataKey="relevance" stroke="blue" fill="white" />
                </LineChart>
            </ResponsiveContainer>

            <br />
            <br />
            <br />
            <br />
            <br />

            <ResponsiveContainer width="100%" height={400} stroke="black">
                <BarChart width={500} height={400} data={pdata} stroke="black">
                    {/* <CartesianGrid strokeDasharray="3 3" stroke="grey" /> */}
                    <XAxis dataKey="topic" interval={'equidistantPreserveStart'} stroke="black" />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="likelihood" fill={COLORS}>
                        {pdata.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

            <br />
            <br />
            <br />
            <br />
            <br />

            <PieChart width={400} height={400} stroke="black">
                <Pie data={pdata} dataKey="end_year" cx="50%" cy="50%" outerRadius={100} fill={COLORS} stroke="black">
                    {pdata.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip stroke="blue" fill="white" />
                <Legend stroke="green" fill="white" />
            </PieChart>

        </div>
    )
}

export default Dashboard