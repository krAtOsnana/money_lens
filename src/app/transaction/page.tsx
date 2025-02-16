import AddTransactionForm from "@/components/AddTransactionForm";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full p-6 ">
      <div className="h-full flex flex-col justify-center items-center max-w-5xl mx-auto">
        <div className="space-y-10 min-w-[40vw] ">
            <AddTransactionForm/>
        </div>
      </div>
    </div>
  );
};

export default page;
