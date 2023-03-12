const headerPadding = "py-[0.3em] px-[0.8em]";

const tableHeaders = [
  {
    header: "TITLE",
    accessor: "title",
    className: `w-[250px] ${headerPadding}`,
    type: "normaltext",
  },
  {
    header: "MESSAGE",
    accessor: "message",
    className: `w-[250px] ${headerPadding}`,
    type: "normaltext",
  },
  {
    header: "SENT BY",
    accessor: "sentBy",
    className: `w-[200px] ${headerPadding}`,
    type: "normaltext",
  },
  {
    header: "SENT THROUGH",
    accessor: "sentThrough",
    className: `w-[250px] ${headerPadding}`,
    styles: {
      color: "#2979ff",
      cursor: "pointer",
    },
    type: "info",
  },
  {
    header: "DATE CREATED",
    accessor: "dateCreated",
    className: `w-[250px] ${headerPadding}`,
    type: "normaltext",
  },
  {
    header: "START DATE",
    accessor: "startDate",
    className: `w-[250px] ${headerPadding}`,
    type: "dateTime",
  },
  {
    header: "END DATE",
    accessor: "endDate",
    className: `w-[300px] ${headerPadding}`,
    type: "dateTime",
  },
];

export default tableHeaders;
