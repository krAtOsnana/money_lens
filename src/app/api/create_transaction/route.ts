import dbConnect from "@/lib/dbConnect";
import TransactionModel from "@/model/Transaction";

export async function POST(request:Request) {
    await dbConnect()
    try {
        const {month, credit, debit, balance} = await request.json()
        const newTransaction = new TransactionModel({
            month,
            credit, 
            debit,
            balance
        })
        await newTransaction.save()
        return Response.json(
            {
              success: true,
              message: 'transaction created ',
              data: newTransaction
            },
            { status: 201 }
          );
    } catch (error) {
        console.log(error);
        
    }
}