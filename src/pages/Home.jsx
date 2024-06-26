import { useEffect, useState } from "react";
import homeBanner0 from "../assets/Rectangle 6.png";
import homeBanner1 from "../assets/Rectangle 6.png";
import grid1 from "../assets/Rectangle 8.png";
import grid2 from "../assets/Rectangle 9.png";
import grid3 from "../assets/Rectangle 10.png";
import rightArrow from "../assets/Right Arrow.png";
import Button from "../components/Button";
import leftArrow from "../assets/Left Arrow.png";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const images = [homeBanner0, homeBanner1];

const Home = () => {
  useDocumentTitle("Welcome to Property");

  const [carouselCount, setCarouselCount] = useState(1);

  const prev = () => {
    setCarouselCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const next = () => {
    setCarouselCount((prevCount) => Math.min(prevCount + 1, 2));
  };

  const isPrevDisabled = carouselCount === 1;
  const isNextDisabled = carouselCount === 2;

  const currentImage = images[carouselCount - 1];

  return (
    <main className="px-[20px] lg:px-[75px] flex flex-col ">
      <section className="w-full h-full flex flex-col lg:flex-row justify-between">
        <article className="lg:pl-[100px] lg:pt-[40%]">
          <h3 className="text-[64px] text-[#9ca3af] font-thin">Project</h3>
          <h4 className="text-[30px] font-bold">Lorum</h4>
          <div className="controller mt-[20px] flex gap-4">
            <Button
              variant="secondary"
              size="medium"
              onClick={prev}
              disabled={isPrevDisabled}
            >
              <img src={leftArrow} alt="Previous" className="w-4" />
            </Button>
            <Button
              variant="secondary"
              size="medium"
              onClick={next}
              disabled={isNextDisabled}
            >
              <img src={rightArrow} alt="Next" className="w-4" />
            </Button>
          </div>
          <div className="mt-[50px] lg:mb-0 mb-[50px] text-3xl font-thin">
            0{carouselCount} / 02
          </div>
        </article>
        <div className="relative transition-opacity duration-500 ease-in-out">
          <img src={currentImage} alt="homeBanner" />
          <div className="flex justify-center gap-4 absolute bottom-0 left-0  bg-[#e5e5e5] w-[fit-content] pl-4 pr-[40px] py-[10px] text-[#333] transition-opacity duration-500 ease-in-out hover:cursor-pointer">
            View Projects{" "}
            <img src={rightArrow} alt="Arrow" className="w-[20px]" />
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="flex flex-col lg:flex-row sm:flex-col lg:pt-[30px] pb-[30px] bg-[#c4c4c4]      w-full h-[fit-content] gap-[40px] mt-[50px] lg:pl-[150px] lg:pr-[150px] sm:align-center p-[20px]">
        <aside className="w-full lg:w-[50%] flex flex-row gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <img src={grid1} alt="" className="max-w-full h-[50%]" />
            <img src={grid2} alt="" className="max-w-full h-[50%]" />
          </div>
          <div className="">
            <img src={homeBanner0} alt="" className="max-w-full h-auto" />
          </div>
        </aside>
        <article className="w-full lg:w-[50%] flex flex-col gap-[20px]">
          <p>
            Aperiam, porro placeat. Nemo consequatur quaerat soluta minus eum at
            eos facilis aspernatur omnis quos, nobis sapiente praesentium
            explicabo ullam tenetur tempore illum ab tempora magnam ipsam
            pariatur aperiam harum. Sequi, autem minima odit provident ducimus
            illo cum sunt consequuntur quae impedit exercitationem aperiam nam
            architecto? Sed ut unde laboriosam possimus doloremque voluptatum
            ea, quibusdam dolore amet omnis repudiandae exercitationem.
            Deserunt, voluptatibus, animi voluptatum quas quod assumenda
            praesentium similique molestiae aliquam impedit sint! Quas
            accusantium magni repellendus aut unde esse molestias neque, velit
            cum quasi error mollitia maiores id ex!
          </p>
          <Button
            variant="white"
            size="custom"
            className="flex w-[fit-content] gap-2 font-light text-[15px]"
          >
            Read More <img src={rightArrow} alt="Next" className="w-4" />
          </Button>
        </article>
      </section>
    </main>
  );
};

export default Home;
