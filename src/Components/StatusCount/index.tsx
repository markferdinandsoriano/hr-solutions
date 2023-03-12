const StatusCount = ({
  bgColor,
  count,
  label,
  textColor,
  countColor,
}: {
  bgColor?: string;
  count?: string | number;
  label?: string;
  textColor?: string;
  countColor?: string;
}) => {
  return (
    <div
      className={`flex w-auto flex-row items-center justify-center gap-2 rounded-lg ${bgColor} px-2 py-1`}
    >
      <p>
        <strong
          className={`h-0 w-auto rounded-full ${countColor} px-3 py-0 text-base font-bold text-white`}
        >
          {count}
        </strong>
      </p>
      <h1 className={`font-bold ${textColor}`}>{label}</h1>
    </div>
  );
};

export default StatusCount;
