import React from "react";
import TableHeader from "src/Components/TableComponents/Header";
import TableBody from "src/Components/TableComponents/Body";
import TableFooter from "src/Components/TableComponents/Footer";
import tableHeaderListData from "src/Common/staticData/tableHeadersData";
import tableBodyData from "src/Common/staticData/tableBodyData";

const MainTable = () => {
  return (
    <section className="z-50 mt-[2em] h-[78%] w-full overflow-y-auto">
      <table className="h-auto w-full overflow-x-auto overflow-y-auto bg-white">
        <TableHeader headers={tableHeaderListData} />
        <TableBody headers={tableHeaderListData} bodyData={tableBodyData} />
        <TableFooter />
      </table>
    </section>
  );
};

export default MainTable;
