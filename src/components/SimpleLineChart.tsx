'use client'
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import axios from "axios";

interface Transaction {
  _id: string;
  month: string;
  debit: number;
  credit: number;
  balance: number;
}

const SimpleLineChart = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/get_transactions");
      const sortedTransactions = response.data.transactions
      setTransactions(sortedTransactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full p-4  rounded-lg shadow-sm ">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Transaction Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={transactions}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
          <XAxis 
            dataKey="month" 
            className="dark:text-gray-400"
            tick={{ fill: 'currentColor' }}
          />
          <YAxis 
            className="dark:text-gray-400"
            tick={{ fill: 'currentColor' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="credit"
            name="Income"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="debit"
            name="Expenses"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="balance"
            name="Balance"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;