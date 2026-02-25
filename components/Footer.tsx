import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative z-0" id="contact">
      {/* Background grid with proper layering */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 -z-10">
        <img
          src="/footer-grid.svg"
          alt="footer background grid"
          className="w-full h-full opacity-50"
        />
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Always ready to take{" "}
          <span className="text-purple">digital presence to the next level</span>
        </h1>

        <p className="text-white-200 md:mt-10 my-5 max-w-xl">
          Always seeking opportunities to apply my skills to real-world challenges.
        </p>

        <a href="mailto:krigup789@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        {/* Social Media Links */}
        <div className="flex gap-5 items-center justify-center mt-10 z-10">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${
                item.img.includes("git") ? "GitHub" :
                item.img.includes("link") ? "LinkedIn" :
                item.img.includes("twit") ? "Twitter" : "social"
              } profile`}
            >
              <img
                src={item.img}
                alt="social-icon"
                className="w-6 h-6 hover:scale-125 transition-transform duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
