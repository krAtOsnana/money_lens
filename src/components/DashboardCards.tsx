'use client'
import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'
import { CreditCard, DollarSign, Wallet } from 'lucide-react'
import axios from 'axios'

const DashboardCards = () => {
  interface Transaction {
    _id: string;
    month: string;
    debit: number;
    credit: number;
    balance: number;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totals, setTotals] = useState({
    balance: 0,
    credit: 0,
    debit: 0
  });

  const calculateTotals = (transactions: Transaction[]) => {
    return transactions.reduce((acc, transaction) => ({
      balance: acc.balance + transaction.balance,
      credit: acc.credit + transaction.credit,
      debit: acc.debit + transaction.debit
    }), {
      balance: 0,
      credit: 0,
      debit: 0
    });
  };

  const getData = async () => {
    try {
      const response = await axios.get("/api/get_transactions");
      const transactionsData = response.data.transactions;
      setTransactions(transactionsData);
      setTotals(calculateTotals(transactionsData));
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    getData()
  }, )

  return (
    <div>
      <div className="flex items-center justify-center gap-14 flex-wrap">
        <Card className="p-6 bg-primary/5 border-primary/10 w-[280px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Total Balance
              </p>
              <h3 className="text-2xl font-bold mb-2">
                ${totals.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h3>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-emerald-500/5 border-emerald-500/10 w-[280px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Total Income
              </p>
              <h3 className="text-2xl font-bold mb-2">
                ${totals.credit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h3>
            </div>
            <div className="bg-emerald-500/10 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-emerald-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-red-500/5 border-red-500/10 w-[280px]">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Total Expenses
              </p>
              <h3 className="text-2xl font-bold mb-2">
                ${totals.debit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h3>
            </div>
            <div className="bg-red-500/10 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DashboardCards