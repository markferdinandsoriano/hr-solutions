import Announcements from "src/Views/Announcements";
import FilterSection from "src/Views/FIlterSection";
import MainTable from "src/Views/Table";

const Main = () => {
  return (
    <main className="b h-[92%] w-[93%]">
      <Announcements />
      <FilterSection />
      <MainTable />
    </main>
  );
};

export default Main;
