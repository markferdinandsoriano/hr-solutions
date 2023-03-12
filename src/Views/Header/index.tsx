import HeaderListComponents from "src/Common/staticData/headerList";
import SwitchElements from "src/Components/SwitchElements";
import SproutLogo from "src/assets/SproutLogo.png";

const Header = () => {
  const headerList = HeaderListComponents();
  return (
    <header className="flex h-[10%] w-[100%] flex-row items-center justify-start bg-headerBg">
      <nav className="ml-[2.5em] flex h-full w-[10%] flex-row items-center justify-center">
        <img src={SproutLogo} width={120} height={120} />
        <div className="ml-[0.5em] h-[45%] w-0 border-2 border-solid border-placeholder"></div>
        <h1 className="ml-[0.3em] text-[2.5em] font-light text-headerTextColor">
          HR
        </h1>
      </nav>
      <nav className="flex h-full w-[90%]">
        <ul className="flex h-full w-full flex-row items-center justify-end gap-[2em] pr-[1.5em]">
          {headerList?.map((items, index) => {
            return (
              <li key={index}>
                <SwitchElements
                  type={items?.type}
                  placeholder={items?.placeholder}
                  label={items?.label}
                  inputClassName={items?.className}
                  styles={items?.styles}
                  textClassName={items?.textClassName}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
