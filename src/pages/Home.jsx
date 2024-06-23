import { useEffect } from "react";
import homeBanner from "../assets/Rectangle 6.png";
import rightArrow from "../assets/Right Arrow.png";

// page title manupulation
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

const Home = () => {
  useDocumentTitle("Welcome to Property")
  return (
    <main className="px-[20px] lg:px-[75px]">
      <section className="w-full h-full flex flex-col lg:flex-row justify-between">
        <article className="lg:pl-[100px] lg:pt-[40%]">
          <h3 className="text-[64px] text-[#9ca3af] font-thin">Project</h3>
          <h4 className="text-[30px] font-bold">Lorum</h4>
        </article>
        <div className="relative">
          <img src={homeBanner} alt="homeBanner" />
          <div className="flex justify-center gap-4 absolute bottom-0 left-0  bg-[#e5e5e5] w-[fit-content] pl-4 pr-[40px] py-[10px] text-[#333]">
            View Projects <img src={rightArrow} alt="" className="w-[20px]" />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
