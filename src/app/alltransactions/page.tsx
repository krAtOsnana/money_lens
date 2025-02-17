import AllTransaction from "@/components/AllTransaction";

const page = async () => {
  return (
    <div className="h-full w-full p-6 bg-background">
      <div className="h-full flex flex-col justify-center  mx-auto">
        <div className="overflow-scroll scrollbar ">
          <AllTransaction />
        </div>
      </div>
    </div>
  );
};

export default page;
