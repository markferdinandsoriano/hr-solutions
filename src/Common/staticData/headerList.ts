const iconsStyle = {
  color: "rgba(219,219,219,255)",
  fontSize: "12px",
  marginBottom: "0.2em",
  cursor: "pointer",
};

const HeaderListComponents = () => {
  const headerList = [
    {
      label: "My Requests",
      name: "myRequest",
      type: "text",
      styles: iconsStyle,
      textClassName: "h-full text-xl text-headerTextColor",
    },
    {
      label: "My Team",
      name: "myTeam",
      type: "text",
      styles: iconsStyle,
      textClassName: "h-full text-xl text-headerTextColor",
    },
    {
      label: "Company",
      name: "company",
      type: "text",
      styles: iconsStyle,
      textClassName: "h-full text-xl text-headerTextColor",
    },
    {
      label: "Administration Tools",
      name: "administration",
      type: "text",
      styles: iconsStyle,
      textClassName: "h-full text-xl text-headerTextColor",
    },
    {
      label: "Maintenance",
      name: "maintenance",
      type: "text",
      styles: iconsStyle,
      textClassName: "h-full text-xl text-headerTextColor",
    },
    {
      name: "employeeSearch",
      placeholder: "employee search",
      type: "input",
      className:
        "outline-none border-b-4 border-placeholder bg-headerBg text-headerTextColor text-center pb-2 w-auto placeholder:text-xl",
    },
    {
      name: "search",
      type: "search",
      styles: {
        color: "rgba(80,80,80,255)",
        fontSize: "30px",
        cursor: "pointer",
      },
    },
    {
      name: "notification",
      type: "bell",
      styles: {
        color: "rgba(80,80,80,255)",
        fontSize: "30px",
        cursor: "pointer",
      },
    },
    {
      name: "usernameImage",
      type: "circle",
      styles: {
        color: "rgba(219,219,219,255)",
        fontSize: "30px",
        cursor: "pointer",
      },
    },
    {
      name: "username",
      label: "Admin",
      type: "text",
      styles: iconsStyle,
      textClassName: "h-full text-xl text-sentThru",
    },
  ];

  return headerList;
};

// border: "none",
// outline: "none",
// borderBottom: "4px solid rgba(80,80,80,255)",
// backgroundColor: "rgba(52,52,52,255)",

export default HeaderListComponents;
