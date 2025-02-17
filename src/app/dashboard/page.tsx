
import DashboardCards from "@/components/DashboardCards";
import SimpleLineChart from "@/components/SimpleLineChart";


import React from "react";


const page = () => {
  return (
    <div className="h-full w-full p-6 bg-background">
      <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
        <div className="space-y-10 max-w-fit ">

          <DashboardCards/>

            <div>
                <SimpleLineChart/>
            </div>

        </div>
      </div>
    </div>
  );
};

export default page;
