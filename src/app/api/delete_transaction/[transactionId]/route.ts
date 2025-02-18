import {  NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TransactionModel from "@/model/Transaction";

interface RouteParams {
  params: {
    transactionId: string;
  };
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
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
