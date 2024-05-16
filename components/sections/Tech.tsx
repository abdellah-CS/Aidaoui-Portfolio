import React from "react";
import { technologiesOne, technologiesTwo } from "../../constants";
import { SectionWrapper } from "../../hoc";
import styled, { keyframes, css } from "styled-components";

interface IServiceCard {
  index: number;
  name: string;
  icon: string;
}

const Marquee = styled.div`
display: flex;
width: 1200px;
overflow: hidden;
user-select: none;

mask-image: linear-gradient(
  to right,
  hsl(0 0% 0% / 0),
  hsl(0 0% 0% / 1) 10%,
  hsl(0 0% 0% / 1) 90%,
  hsl(0 0% 0% / 0)
);
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%); /* 25% width + 10px space */
  }
`;

const common = css`
  flex: 0 0 25%; /* Each item takes up 25% of the container width */
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  animation: ${scrollX} 10s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
`;

const ServiceCard: React.FC<IServiceCard> = ({ name, icon }) => (
  <div className="mr-7 xs:w-[200px] w-full">
    <div className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]">
      <div className="bg-tertiary flex h-[196px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
        <img
          src={icon}
          alt="web-development"
          className="h-16 w-16 object-contain"
        />

        <h3 className="text-center text-[20px] font-bold text-white">
          {name}
        </h3>
      </div>
    </div>
  </div>
);

const Tech = () => {
  return (
    <>
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        <Marquee>
          <MarqueeGroup>
            {technologiesOne.map((technology, index) => (
              <ServiceCard key={technology.name} index={index} {...technology} />
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {technologiesOne.map((technology, index) => (
              <ServiceCard key={technology.name} index={index} {...technology} />
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {technologiesTwo.map((technology, index) => (
              <ServiceCard key={technology.name} index={index} {...technology} />
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {technologiesTwo.map((technology, index) => (
              <ServiceCard key={technology.name} index={index} {...technology} />
            ))}
          </MarqueeGroup2>
        </Marquee>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "techs");
