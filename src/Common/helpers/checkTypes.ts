const CheckType = (
  Bodyitems: { [key: string]: unknown },
  headerItems: { [key: string]: unknown }
) => {
  return Bodyitems[headerItems["accessor"] as string] === "bookmark mobile"
    ? "bookmark mobile"
    : Bodyitems[headerItems["accessor"] as string] === "bookmark"
    ? "bookmark"
    : Bodyitems[headerItems["accessor"] as string] === "mobile"
    ? "mobile"
    : headerItems["type"];
};

export default CheckType;
