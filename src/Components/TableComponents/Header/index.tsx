import React from "react";
import SwitchElements from "src/Components/SwitchElements";

const TableHeader = ({
  headers,
}: {
  headers: { [key: string]: unknown }[];
}) => {
  return (
    <thead className="sticky top-0 z-50 w-full rounded-2xl border-lightgray bg-white text-left">
      <tr className="flex w-full flex-row items-center border-[1px] border-lightgray py-[0.8em] pl-[0.8em] text-left">
        {headers?.map((items, index) => {
          return (
            <React.Fragment key={index}>
              <SwitchElements
                textClassName={items?.className as string}
                type={items?.type === "info" ? "info" : "headerText"}
                label={items?.header as string}
                styles={items?.styles as { [key: string]: unknown }}
              />
            </React.Fragment>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
