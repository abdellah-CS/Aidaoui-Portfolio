import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import { styles } from "../../constants/styles";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (active) {
    
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } sm:px-32 fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <LanguageIcon style={{ fontSize: 'xx-large' }} />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.fullName}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          <li className="text-white cursor-pointer text-[18px] font-medium hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white cursor-pointer text-[18px] font-medium hover:text-white">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-white cursor-pointer text-[18px] font-medium hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } transition-transform absolute right-0 top-20 p-6 bg-primary z-150 w-full h-screen lg:hidden rounded-2xl ${toggle ? "max-h-screen" : "max-h-0 overflow-hidden"} duration-500 ease-in-out transform ${toggle ? "translate-y-0" : "-translate-y-full"}`}
          >
            <ul className="flex flex-1 list-none flex-col items-center justify-center gap-4">
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link to="/about" onClick={() => setToggle(!toggle)}>About</Link>
              </li>
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link to="/projects" onClick={() => setToggle(!toggle)}>Projects</Link>
              </li>
              <li className="font-poppins cursor-pointer text-[32px] font-medium text-white">
                <Link to="/contact" onClick={() => setToggle(!toggle)}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
