import footerImg from "../assets/footerimage.png";
import locationImg from "../assets/Google Maps_1.svg";
import phoneImg from "../assets/Phone.svg";
import mailImage from "../assets/Mailbox.svg";
import fbImage from "../assets/Facebook F.svg";
import xImage from "../assets/Twitter.svg";
import ldImage from "../assets/LinkedIn.svg";
import pinterestImage from "../assets/Pinterest.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-start mt-[100px] bg-[#2c2c2c] px-[20px] lg:px-[75px] py-[20px]">
      <section className="flex flex-col gap-[40px] lg:flex-row justify-evenly">
        <img src={footerImg} alt="" className="w-[145px] object-contain" />
        <article className="flex flex-col text-[#fff] gap-[20px]">
          <p className="font-bold">Information</p>
          <Link to="/" className="font-thin hover:text-[#333] ml-[10px]">
            Home
          </Link>
          <Link to="gallery/" className="font-thin hover:text-[#333] ml-[10px]">
            Gallery
          </Link>
          <Link to="projects/" className="font-thin hover:text-[#333] ml-[10px]">
            Projects
          </Link>
          <Link to="certifitions/" className="font-thin hover:text-[#333] ml-[10px]">
            Certifications
          </Link>
          <Link to="contacts/" className="font-thin hover:text-[#333] ml-[10px]">
            Contacts
          </Link>
        </article>
        <article className="flex flex-col text-[#fff] gap-[20px]">
          <p className="font-bold">Contact</p>
          <p className="flex items-center gap-[20px] ml-[10px]">
            <img src={locationImg} alt="" className="w-[40px] object-contain" />{" "}
            <span className="font-thin">
              1234 Sample Street <br />
              Austin Texas 78704
            </span>
          </p>
          <p className="flex items-center gap-[20px] ml-[10px]">
            <img src={phoneImg} alt="" className="w-[40px] object-contain" />{" "}
            <span className="font-thin">512.333.2222</span>
          </p>
          <p className="flex items-center gap-[20px] ml-[10px]">
            <img src={mailImage} alt="" className="w-[40px] object-contain" />{" "}
            <span className="font-thin">sampleemail@gmail.com</span>
          </p>
        </article>
        <article className="flex flex-col gap-[20px]">
          <p className="text-[#fff] font-bold">Social</p>
          <p>
            <span className="transition ease-in-out delay-[1s] flex flex-row gap-[20px] ml-[10px]">
              <img src={fbImage} alt="" className="hover:scale-150 cursor-pointer"/>
              <img src={xImage} alt="" className="hover:scale-150 cursor-pointer"/>
              <img src={ldImage} alt="" className="hover:scale-150 cursor-pointer"/>
              <img src={pinterestImage} alt="" className="hover:scale-150 cursor-pointer"/>
            </span>
          </p>
        </article> 
      </section>
    </footer>
  );
};
export default Footer;
