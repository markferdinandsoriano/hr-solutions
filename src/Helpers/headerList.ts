import TextField from "src/Components/TextField";

const HeaderListComponents = () => {
  const headerList = [
    {
      label: "My Requests",
      name: "myRequest",
    },
    {
      label: "My Team",
      name: "myTeam",
    },
    {
      label: "Company",
      name: "company",
    },
    {
      label: "Administration Tools",
      name: "administration",
    },
    {
      label: "Maintenance",
      name: "maintenance",
    },
    {
      name: "employeeSearch",
      placeholder: "employee search",
      type: "input",
      className: "",
    },
    {
      name: "search",
      type: "search",
      className: "",
    },
  ];

  return headerList;
};

export default HeaderListComponents;
