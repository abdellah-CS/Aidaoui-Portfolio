import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper, ResumeButton } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="xs:w-[220px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[270px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white w-[219px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <div className="sm:px-16 pl-12 pr-4 pt-12">
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>
      <Button
      style={{
        animationName: "bounce",
        animationDuration: "0.75s",
        animationTimingFunction: "ease-in-out",
        animationDelay: "0.1s",
        animationIterationCount: "infinite",
        animationDirection: "alternate",
        fontWeight: "500",
        fontSize: "1rem", // Adjust as needed
        backgroundImage: "-webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%)", // Adjust gradient colors
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)", // Adjust shadow properties
        padding: "0.75rem 1.5rem", // Adjust padding
        borderRadius: "0.5rem", // Adjust border radius
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem auto",
        color: "#fff", 
        marginTop: "30px",
        WebkitTapHighlightColor: "white",
      }}
      startIcon={<DownloadIcon />}
    >
      <ResumeButton />
    </Button>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");

