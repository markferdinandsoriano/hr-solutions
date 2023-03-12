import React from "react";
import TableHeader from "src/Components/TableComponents/Header";
import TableBody from "src/Components/TableComponents/Body";
import tableHeaderListData from "src/Common/staticData/tableHeadersData";
import tableBodyData from "src/Common/staticData/tableBodyData";

const MainTable = () => {
  return (
    <section className="h-[78%] w-full pt-[2em]">
      <table className="border-2xl h-[90%] w-full">
        <TableHeader headers={tableHeaderListData} />
        <TableBody headers={tableHeaderListData} bodyData={tableBodyData} />
      </table>
    </section>
  );
};

export default MainTable;
