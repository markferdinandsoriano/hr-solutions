import React from "react";
import StatusCount from "src/Components/StatusCount";
import statusList from "src/Common/staticData/statusList";
import filterSectionFields from "src/Common/staticData/filterSectionFields";
import SwitchElements from "src/Components/SwitchElements";

const FilterSection = () => {
  return (
    <section className="flex h-[7%] w-full flex-row items-end justify-end">
      <div className="flex w-[60%] flex-row gap-3">
        {statusList?.map((items, index) => {
          return (
            <React.Fragment key={`${index}-${items?.label}`}>
              <StatusCount
                label={items?.label}
                count={items?.count}
                countColor={items?.countColor}
                textColor={items?.textColor}
                bgColor={items?.bgColor}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex w-[40%] flex-row gap-6">
        {filterSectionFields?.map((items, index) => {
          return (
            <React.Fragment key={index}>
              <SwitchElements
                type={items?.type}
                inputWidth={items?.inputWidth}
                iconContainerWidth={items?.iconContainerWidth}
                placeholder={items?.placeholder}
                optionsMenu={items?.optionsMenu}
                inputContainerClassName={items?.inputContainerClassName}
                inputClassName={items?.inputClassName}
                withIcon={items?.withIcon}
                iconStyle={items?.iconStyle}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default FilterSection;
