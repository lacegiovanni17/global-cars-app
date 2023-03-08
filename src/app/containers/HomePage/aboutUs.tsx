import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="jeep"/>
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
            Our Vision
            "We will lead our industry by defining service excellence and building unmatched customer loyalty." 

            Our Mission
            "We will ensure a stress-free car rental experience by providing superior services that cater to our customers' individual needs...always conveying the 'We Try Harder spirit with knowledge, caring and a passion for excellence."

            Our Values

            Integrity
            We will honor all commitments to our customers, employees and shareholders.
            We will conduct business with unwavering high standards of honesty, trust, professionalism and ethical behavior.
            We will communicate openly and frequently, sharing what we know, when we know it.

            Respect for the Individual
            We will treat each person with whom we work with respect, professionalism and dignity.
            We will communicate expectations to employees, and provide honest and timely feedback on performance.
            We will embrace a diversity of ideas, cultures, ethnicities, and backgrounds to enhance our promise and value to customers.
            We will provide career development opportunities for employees who show initiative, and performance results to help them individually manage their careers to maximize their potential.

            Quality
            We will place the interests of our customers first.
            We will be dedicated to providing an individualized rental experience that assures customer satisfaction and earns the unwavering loyalty of our customers
            We will ensure that the "We Try Harder®" philosophy underlies everything we do and shines through in our service to customers.

            Teamwork
            We will work as one cohesive team from the smallest unit to the organization as a whole.
            We will develop and retain leaders who continually raise the bar, provide direction, remove barriers and empower people to successfully accomplish goals.
            We will maintain a caring and supportive work environment that fosters a sharing of ideas, skills and resources.

            Growth and Profitability
            We will be dedicated to continuous innovation and pursue new ideas and opportunities to accelerate profitable growth.
            We will deliver value in all we do to assure consistently high returns to our shareholders.
            We will recognize and reward excellent performance, which drives superior results.

            Community Responsibility
            We will be active participants in our communities and encourage employee involvement in civic and charitable activities.
            We will be role model business leaders in the countries and communities in which we operate.
            We will develop and implement business practices consistent with safeguarding the environment. 
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
