import dbConnect from "@/lib/dbConnect";
import TransactionModel from "@/model/Transaction";

export async function GET(request: Request){
    dbConnect()
    try {
        const transactions = await TransactionModel.find({})
        return Response.json(
            { transactions: transactions},
            {
              status: 200,
            }
        )
    } catch (error) {
        console.log(error)
    }
}