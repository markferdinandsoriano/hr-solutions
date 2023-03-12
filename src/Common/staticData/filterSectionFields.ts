import filterByList from "./filterByList";

const filterSectionFields = [
  {
    type: "select",
    placeholder: "Filter by",
    optionsMenu: filterByList,
    inputContainerClassName: "relative w-[50%] h-full",
    inputClassName:
      "w-[100%] rounded border-[1px] border-textDefaultColor py-[0.4em] px-[0.7em] flex flex-row items-center",
    iconContainerWidth: "5%",
    inputWidth: "w-[95%]",
  },
  {
    type: "input",
    withIcon: true,
    placeholder: "Search...",
    inputContainerClassName:
      "w-[50%] rounded border-[1px] border-textDefaultColor py-[0.4em] px-[0.7em] flex flex-row items-center",
    inputClassName: "outline-none w-[95%]",

    iconStyle: {
      color: "rgba(102,122,115,255)",
      fontSize: "16px",
      fontWeight: "bold",
      width: "5%",
    },
  },
];

export default filterSectionFields;
