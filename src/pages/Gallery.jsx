import gallery_data from "../data";
import Card from "../components/Card";
import Button from "../components/Button";
import { useState } from "react";
import rightArrow from "../assets/Right Arrow.png";
import leftArrow from "../assets/Left Arrow.png";
const Gallery = (props) => {
  const newImages = gallery_data.map(function (images, index) {
    return <Card key={index} data={images} />;
  });
  const [carouselCount, setCarouselCount] = useState(1);

  const prev = () => {
    setCarouselCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const next = () => {
    setCarouselCount((prevCount) => Math.min(prevCount + 1, 5));
  };

  const isPrevDisabled = carouselCount === 1;
  const isNextDisabled = carouselCount === 5;

  return (
    <section className="px-[20px] gap-y-[20px] sm:gap-x-[20px] w-full h-full flex flex-row flex-wrap lg:px-[75px] lg:gap-y-[40px]">
      {newImages}
      <article  className="flex flex-col justify-start gap-[20px]">
      <div className="controller mt-[20px] flex gap-4">
        <Button
          variant="secondary"
          size="small"
          onClick={prev}
          disabled={isPrevDisabled}
        >
          <img src={leftArrow} alt="Previous" className="w-4" />
        </Button>
        <Button
          variant="secondary"
          size="small"
          onClick={next}
          disabled={isNextDisabled}
        >
          <img src={rightArrow} alt="Next" className="w-4" />
        </Button>
      </div>
      <div className="mt-[50px] lg:mb-0 mb-[50px] text-3xl font-thin">
        0{carouselCount} / 05
      </div>
      </article>
    </section>
  );
};
export default Gallery;
