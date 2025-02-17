'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowDownRight, ArrowUpRight, Wallet, Pencil, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Transaction {
  _id: string;
  month: string;
  debit: number;
  credit: number;
  balance: number;
}

const AllTransaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/get_transactions");
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/delete_transaction/${id}`);
      setTransactions(transactions.filter(t => t._id !== id));
      toast({
        title: response.data.message,
        variant: 'destructive',
      });
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const handleEdit = (id: string) => {
    console.log("Edit transaction:", id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen  p-8  w-full transition-colors duration-200 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Transaction History :
          </h1>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transactions.map((transaction) => (
            <div
              key={transaction._id}
              className="rounded-xl overflow-hidden group transition-all duration-200 bg-white dark:bg-primary/10 hover:shadow-lg dark:hover:bg-gray-700/80 shadow-sm dark:shadow-lg dark:shadow-gray-900/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/20">
                      <Wallet className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-xl font-semibold capitalize text-gray-900 dark:text-white">
                      {transaction.month}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => handleEdit(transaction._id)}
                      className="p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-500/10"
                      title="Edit transaction"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(transaction._id)}
                      className="p-2 rounded-md transition-colors duration-200 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:text-red-400 dark:hover:bg-red-500/10"
                      title="Delete transaction"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ArrowUpRight className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">Credit</span>
                    </div>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      +${transaction.credit.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ArrowDownRight className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600 dark:text-gray-300">Debit</span>
                    </div>
                    <span className="font-semibold text-red-600 dark:text-red-400">
                      -${transaction.debit.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Balance</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      ${transaction.balance.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTransaction;