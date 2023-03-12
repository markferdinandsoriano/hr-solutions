import React from "react";
import SwitchElements from "src/Components/SwitchElements";
import CheckType from "src/Common/helpers/checkTypes";

const TableBody = ({
  headers,
  bodyData,
}: {
  headers: { [key: string]: unknown }[];
  bodyData: { [key: string]: unknown }[];
}) => {
  return (
    <tbody className="rounded-lg border-lightgray px-[1em] text-left">
      {bodyData &&
        bodyData?.map((Bodyitems, index) => {
          return (
            <tr
              key={index}
              className="flex flex-row items-center border-[1px] border-lightgray pl-[0.8em] text-left"
            >
              {headers?.map((headerItems, index) => {
                return (
                  <React.Fragment key={index}>
                    <SwitchElements
                      textClassName={headerItems?.className as string}
                      type={CheckType(Bodyitems, headerItems) as string}
                      label={
                        Bodyitems[headerItems["accessor"] as string] as string
                      }
                    />
                  </React.Fragment>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBody;
