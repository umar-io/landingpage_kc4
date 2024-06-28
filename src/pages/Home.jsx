import { useEffect, useState } from "react";
import homeBanner0 from "../assets/Rectangle 6.png";
import homeBanner1 from "../assets/Rectangle 6.png";
import grid1 from "../assets/Rectangle 8.png";
import grid2 from "../assets/Rectangle 9.png";
import grid3 from "../assets/Rectangle 10.png";
import person from "../assets/image 12.png";
import project2 from "../assets/image 15.png";
import project3 from "../assets/image 16.png";
import project4 from "../assets/image 17.png";
import project5 from "../assets/image 18.png";
import project1 from "../assets/Rectangle 12.png";
import rightArrow from "../assets/Right Arrow.png";
import Button from "../components/Button";
import leftArrow from "../assets/Left Arrow.png";
import { Link } from "react-router-dom";

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

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData(function (formData) {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      interest: "",
      message: "",
    });
    alert("email sent");
  };

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
      <section className="mt-[50px] w-full]">
        <h1 className="text-[20px]  lg:text-[40px] capitalize text-[#9ca3af] font-thin w-2/4">
          main focus/mission statement
        </h1>
        <article className="flex flex-row gap-[20px] justify-center items-center">
          <div className="w-1/2 flex flex-row justify-center items-center gap-[10px]">
            <h1 className="text-[50px] lg:text-[100px] text-[#9ca3af] font-bold">
              1
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat
            </p>
          </div>
          <div className="w-1/2 flex flex-row justify-center items-center gap-[10px]">
            <h2 className="text-[50px] lg:text-[100px] text-[#9ca3af] font-bold">
              2
            </h2>
            <p className="text-ellipsis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>
        </article>
      </section>
      <section className="w-full flex flex-col mt-[50px] gap-[10px] relative h-[fit-content]">
        <h3 className="text-[#9ca3af] lg:text-[40px] capitalize text-[20px]">
          our projects
        </h3>
        <div className="flex lg:flex-row flex-col mt-[30px] w-full gap-[20px] justify-center">
          <div className="w-full lg:w-[50%] relative">
            <img
              src={project1}
              alt=""
              width="100%"
              className="rounded brightness-50"
            />
            <article className="absolute py-2.5 top-[40px] left-[30px] w-1/3">
              <h3 className=" lg:text-[40px] text-[#fff] z-10">
                Sample Project
              </h3>
              <Link className="text-[#fff] capitalize gap-[5px]" to="projects/">
                view more →
              </Link>
            </article>
          </div>
          <img src={project2} alt="" className="rounded lg:w-[50%] w-full" />
        </div>
        <div className="flex lg:flex-row flex-col w-full gap-[20px] justify-center">
          <img src={project3} alt="" className="rounded lg:w-[30%]" />
          <img src={project4} alt="" className="rounded lg:w-[40%]" />
          <img src={project5} alt="" className="rounded lg:w-[30%]" />
        </div>
        <Button
          variant="dark"
          size="medium"
          className="w-full text-[#fff] hover:text-[#000] lg:w-[150px] font-thin mt-[20px] lg:absolute bottom-[-70px] right-0"
        >
          View Project →
        </Button>
      </section>
      <section className="flex flex-col w-full mt-[120px] gap-[40px]">
        <h1 className="text-[#9ca3af] capitalize text-[30px]">contact us</h1>
        <article className="flex flex-col-reverse lg:flex-row gap-[30px]">
          <div className="w-full lg:w-[40%] gap-[10px]">
            <form action="" className="flex flex-col gap-[10px]">
              <input
                type="text"
                placeholder="Name"
                className="input-field rounded outline-none"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input-field rounded outline-none"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="input-field rounded outline-none"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Interested in"
                className="input-field rounded outline-none"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              />
              <textarea
                type="text"
                placeholder="Message*"
                className="input-field message pt-[10px] rounded outline-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </form>
            <Button
              variant="dark"
              size="medium"
              className="w-full text-[#fff] hover:text-[#000] lg:w-[150px] font-thin mt-[20px]"
              onClick={handleSubmit}
            >
              Send Email →
            </Button>
          </div>
          <div className=" w-full lg:w-[60%]">
            <img src={person} alt="" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
