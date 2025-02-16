import mongoose, { Schema, Document } from 'mongoose';

export interface Transaction extends Document {
  month: string; // e.g., "January 2025"
  debit: number;
  credit: number;
  balance: number;
}

const TransactionSchema: Schema<Transaction> = new mongoose.Schema({
  month: {
    type: String,
    required: true,
    unique: true,
  },
  debit: {
    type: Number,
    required: true,
    default: 0,
  },
  credit: {
    type: Number,
    required: true,
    default: 0,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});

const TransactionModel =
  (mongoose.models.Transaction as mongoose.Model<Transaction>) ||
  mongoose.model<Transaction>('Transaction', TransactionSchema);

export default TransactionModel;
