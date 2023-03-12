const padding = "py-[0.8em] px-[0.8em]";

const tableHeaders = [
  {
    header: "TITLE",
    accessor: "title",
    className: `w-[250px] ${padding}`,
    type: "normaltext",
  },
  {
    header: "MESSAGE",
    accessor: "message",
    className: `w-[250px] ${padding}`,
    type: "normaltext",
  },
  {
    header: "SENT BY",
    accessor: "sentBy",
    className: `w-[200px] ${padding}`,
    type: "normaltext",
  },
  {
    header: "SENT THROUGH",
    accessor: "sentThrough",
    className: `w-[185px] ${padding}`,
    styles: {
      color: "#2979ff",
      cursor: "pointer",
    },
    type: "info",
  },
  {
    header: "DATE CREATED",
    accessor: "dateCreated",
    className: `w-[250px] ${padding}`,
    type: "normaltext",
  },
  {
    header: "START DATE",
    accessor: "startDate",
    className: `w-[250px] ${padding}`,
    type: "dateTime",
  },
  {
    header: "END DATE",
    accessor: "endDate",
    className: `w-[500px] ${padding}`,
    type: "dateTime",
  },
];

export default tableHeaders;
