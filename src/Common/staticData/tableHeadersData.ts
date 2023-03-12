const tableHeaders = [
  {
    header: "TITLE",
    accessor: "title",
    className: "w-[10%]",
    type: "normaltext",
  },
  {
    header: "MESSAGE",
    accessor: "message",
    className: "w-[10%]",
    type: "normaltext",
  },
  {
    header: "SENT BY",
    accessor: "sentBy",
    className: "w-[10%]",
    type: "normaltext",
  },
  {
    header: "SENT THROUGH",
    accessor: "sentThrough",
    className: "w-[15%] flex flex-row items-center",
    styles: {
      color: "#2979ff",
    },
    type: "info",
  },
  {
    header: "DATE CREATED",
    accessor: "dateCreated",
    className: "w-[15%]",
    type: "normaltext",
  },
  {
    header: "START DATE",
    accessor: "startDate",
    className: "w-[15%]",
    type: "dateTime",
  },
  {
    header: "END DATE",
    accessor: "endDate",
    className: "w-[35%]",
    type: "dateTime",
  },
];

export default tableHeaders;
