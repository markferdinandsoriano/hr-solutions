const iconsStyle = {
  color: "rgba(219,219,219,255)",
  fontSize: "12px",
  marginBottom: "0.2em",
  cursor: "pointer",
};
const headerIconStyle = {
  fontSize: "1.6vw",
  cursor: "pointer",
};

const fonSize = "text-[clamp(1vw,1vw,1vw)]";

const HeaderListComponents = () => {
  const headerList = [
    {
      label: "My Requests",
      name: "myRequest",
      type: "text",
      styles: iconsStyle,
      textClassName: `h-full ${fonSize} text-headerTextColor`,
    },
    {
      label: "My Team",
      name: "myTeam",
      type: "text",
      styles: iconsStyle,
      textClassName: `h-full ${fonSize} text-headerTextColor`,
    },
    {
      label: "Company",
      name: "company",
      type: "text",
      styles: iconsStyle,
      textClassName: `h-full ${fonSize} text-headerTextColor`,
    },
    {
      label: "Administration Tools",
      name: "administration",
      type: "text",
      styles: iconsStyle,
      textClassName: `h-full  ${fonSize} text-headerTextColor`,
    },
    {
      label: "Maintenance",
      name: "maintenance",
      type: "text",
      styles: iconsStyle,
      textClassName: `h-full  ${fonSize} text-headerTextColor`,
    },
    {
      name: "employeeSearch",
      placeholder: "employee search",
      type: "input",
      className:
        "outline-none border-b-4 border-placeholder bg-headerBg text-headerTextColor text-center pb-2 w-[180px] placeholder:text-[1vw] max-[1440px]:w-[100px] max-[1440px]:placeholder:text-[12px]",
    },
    {
      name: "search",
      type: "search",
      styles: {
        color: "rgba(80,80,80,255)",
        ...headerIconStyle,
      },
    },
    {
      name: "notification",
      type: "bell",
      styles: {
        color: "rgba(80,80,80,255)",
        ...headerIconStyle,
      },
    },
    {
      name: "usernameImage",
      type: "circle",
      styles: {
        color: "rgba(219,219,219,255)",
        ...headerIconStyle,
      },
    },
    {
      name: "username",
      label: "Admin",
      type: "text",
      styles: iconsStyle,
      textClassName: `h-full  ${fonSize} text-sentThru`,
    },
  ];

  return headerList;
};

export default HeaderListComponents;
