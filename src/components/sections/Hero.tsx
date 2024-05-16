import { Link } from "react-router-dom";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50"></div>
      <div className="relative z-10"></div>
      <section className={`relative mx-auto h-screen w-full`}>
        <div className={`absolute inset-0 top-[120px] mx-auto max-w-7xl sm:px-16 px-8 flex flex-row items-start gap-5 sm:px-32`}>
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#210068]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#210068]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {config.hero.p[0]} <br className="hidden sm:block" />
              {config.hero.p[1]}
            </p>
            <ul className="list-none flex-row gap-10 sm:flex my-12">
                <li className="text-white z-20 mb-6 cursor-pointer lg:text-[20px] text-[26px] font-medium hover:text-white">
                  <Link to="/about" className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-width before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full">
                    <ArrowForwardIcon />
                    <span>More about me</span>
                  </Link>
                </li>
                <li className="text-white z-20 cursor-pointer lg:text-[20px] text-[26px] font-medium hover:text-white">
                  <Link to="/projects" className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-width before:duration-300 before:ease-in-out before:content-[''] block hover:before:w-full">
                    <ArrowForwardIcon />
                    <span>See my projects</span>
                  </Link>
                </li>
              </ul>
          </div>
        </div>
        <ComputersCanvas/>
      </section>
    </div>
  );
};
  
export default Hero;
