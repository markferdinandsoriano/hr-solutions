import React from "react";
import ForwardPlayIcons from "src/Components/PlayForwardStep";
import TextField from "src/Components/TextField";

const Pagination = () => {
  const iconColors = "#506860";

  return (
    <section className="flex w-full flex-row items-center justify-center gap-6">
      <div className="flex w-auto flex-row gap-4">
        <ForwardPlayIcons
          forwardStepStyle={{
            transform: "rotate(180deg)",
            color: iconColors,
          }}
          playStyle={{
            transform: "rotate(180deg)",
            color: iconColors,
          }}
        />
      </div>
      <div className="flex w-[30%] flex-row items-center justify-center gap-6">
        <h2 className="w-[20%] font-semibold text-textDefaultColor">Page</h2>
        <div className="flex w-[30%] flex-row items-center">
          <TextField
            inputClassName={
              "outline-none border-[1px] border-textDefaultColor w-[100%] rounded-md text-center"
            }
            inputContainerClassName={"outline-none"}
            placeholder={"1"}
          />
        </div>
        <h2 className="flex-ro flex w-[20%] font-semibold text-textDefaultColor">
          of 1
        </h2>
      </div>
      <div className="flex w-auto flex-row gap-4">
        <ForwardPlayIcons
          forwardStepStyle={{
            color: iconColors,
          }}
          playStyle={{ color: iconColors }}
        />
      </div>
    </section>
  );
};

export default Pagination;
