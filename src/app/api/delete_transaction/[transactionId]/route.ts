import {  NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TransactionModel from "@/model/Transaction";

export async function DELETE(
  request: Request,
  { params }: { params: { transactionId: string } }
) {
  await dbConnect();

  try {
    const { transactionId } = params; // Extract transactionId properly

    const result = await TransactionModel.deleteOne({ _id: transactionId });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Transaction not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Transaction deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete transaction" },
      { status: 500 }
    );
  }
}
