import React from "react";
import SwitchElements from "src/Components/SwitchElements";

const TableHeader = ({
  headers,
}: {
  headers: { [key: string]: unknown }[];
}) => {
  return (
    <thead className="w-full rounded-2xl border-[2px] border-lightgray text-left">
      <tr className="flex w-full flex-row items-center border-lightgray pl-[0.8em] text-left">
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
            // <th
            //   key={index}
            //   className={`py-[0.8em] px-[0.8em] font-bold text-announcement ${items?.className}`}
            // >
            //   {items?.header as string}
            // </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
