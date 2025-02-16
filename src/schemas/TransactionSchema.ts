import { z } from 'zod';

export const transactionSchema = z.object({
  month: z
    .string()
    .min(3, 'Month name must be at least 3 characters')
    .max(20, 'Month name must be no more than 20 characters'),
  debit: z
    .number()
    .min(0, 'Debit amount cannot be negative'),
  credit: z
    .number()
    .min(0, 'Credit amount cannot be negative'),
  balance: z
    .number()
    .min(0, 'Balance cannot be negative'),
});
