import dbConnect from "@/lib/dbConnect";
import TransactionModel from "@/model/Transaction";


export async function DELETE(
    request: Request,
    { params }: { params: { transactionId: string } }
  ) {

    const transactionId = params.transactionId
    await dbConnect()
    try {
        await TransactionModel.deleteOne({ _id: transactionId });
        return Response.json(
            {
              success: true,
              message: 'transaction Deleted ',
            },
            { status: 201 }
          );
    } catch (error) {
        console.log(error)
    }
}