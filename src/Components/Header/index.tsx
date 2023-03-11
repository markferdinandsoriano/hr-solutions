import React from "react";
import HeaderListComponents from "src/Helpers/headerList";
import SwitchElements from "src/Components/SwitchElements";
import SproutLogo from "src/assets/SproutLogo.png";

const Header = () => {
  const headerList = HeaderListComponents();
  return (
    <header className="flex h-[8svh] w-[100%] flex-row items-center justify-start bg-headerBg pl-[2%]">
      <nav className="flex h-full w-[10%] flex-row items-center justify-center">
        <img src={SproutLogo} width={120} height={120} />
        <div className="ml-[0.5em] h-[45%] w-0 border-2 border-solid border-placeholder"></div>
        <h1 className="ml-[0.3em] text-[2.5em] font-thin text-headerTextColor">
          HR
        </h1>
      </nav>
      <nav className="flex h-full w-[90%]">
        <ul className="flex h-full w-full flex-row items-center justify-center gap-6 bg-postAnnouncemntBg">
          {headerList?.map((items) => {
            return items?.type ? (
              <li>
                <SwitchElements
                  type={items?.type}
                  className={items?.className}
                />
              </li>
            ) : (
              <div key={items?.label}>{items?.label}</div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
