import SimpleLineChart from "@/components/SimpleLineChart";
import { Card } from "@/components/ui/card";
import {
  CreditCard,
  DollarSign,
  Wallet
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full p-6 bg-background">
      <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
        <div className="space-y-10 max-w-fit ">

          <div className="flex items-center justify-center gap-14 flex-wrap">
            
            <Card className="p-6 bg-primary/5 border-primary/10 w-[280px]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Balance
                  </p>
                  <h3 className="text-2xl font-bold mb-2">$24,560.00</h3>
                  
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
                  <h3 className="text-2xl font-bold mb-2">$8,120.00</h3>
                  
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
                  <h3 className="text-2xl font-bold mb-2">$4,250.00</h3>
                  
                </div>
                <div className="bg-red-500/10 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </Card>
          </div>

            <div>
                <SimpleLineChart/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default page;
