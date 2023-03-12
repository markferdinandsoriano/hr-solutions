import SelectField from "src/Components/SelectField";
import tableCountMenu from "src/Common/staticData/tableCountMenu";
import Pagination from "src/Components/Pagination";

const Footer = () => {
  return (
    <footer className="flex h-[8%] w-full flex-row items-center justify-between border-[1px] border-lightgray pl-[0.8em] text-left">
      <section className="flex w-[30.33%] flex-row items-center justify-center">
        <h6 className="w-[25%] font-bold text-textDefaultColor">
          Items per page
        </h6>
        <div className="w-[75%]">
          <SelectField
            placeholder={"10"}
            optionsMenu={tableCountMenu}
            inputContainerClassName={"relative w-[15%] h-auto"}
            inputWidth={"w-[85%]"}
            iconContainerWidth={"25%"}
            inputClassName={
              "w-[100%] rounded border-[1px] border-textDefaultColor px-[0.7em] flex flex-row items-center text-center"
            }
          />
        </div>
      </section>
      <section className="flex w-[30.33%] flex-row">
        <Pagination />
      </section>
      <section className="flex w-[30.33%] flex-row justify-end gap-5 pr-[1.5em]">
        <h2 className="font-bold text-textDefaultColor">Showing 1 - 10 of 1</h2>
      </section>
    </footer>
  );
};

export default Footer;
