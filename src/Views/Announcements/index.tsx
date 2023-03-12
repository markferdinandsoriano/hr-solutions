import Button from "src/Components/Buttons";

const Announcements = () => {
  return (
    <section className="flex h-[15%] w-full flex-row items-center justify-center">
      <hgroup className="flex h-full w-[70%] flex-col justify-end">
        <h1 className="text-[2.5em]">
          <strong className="text-announcement">Announcements</strong>
        </h1>
        <p className="text-[1em] font-bold tracking-wider text-textDefaultColor">
          View, create, or edit announcements for all employees of your company.
        </p>
      </hgroup>
      <div className="flex h-full w-[30%] items-end justify-end pb-3">
        <Button
          label={"Post an Announcement"}
          iconStyles={{ color: "#FFFFFF", fontSize: "20px", cursor: "pointer" }}
          buttonContainerClass="w-auto bg-postAnnouncemntBg rounded px-3 py-1 gap-2 flex flex-row items-center shadow-2xl"
          buttonClass="text-white font-bold text-xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Announcements;
