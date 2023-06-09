import React from "react";
import Events from "../../../components/events/Events";
import BrandArea from "../../../components/HomeTwo/BrandArea";
import CategoryArea from "../../../components/HomeTwo/CategoryArea";
import CourseArea from "../../../components/HomeTwo/CourseArea";
import HeroArea from "../../../components/HomeTwo/HeroArea";
import HomeTwoFooter from "../../../components/HomeTwo/HomeTwoFooter";
import HomeTwoHeader from "../../../components/HomeTwo/HomeTwoHeader";
import ResearchArea from "../../../components/HomeTwo/ResearchArea";
import TeamArea from "../../../components/HomeTwo/TeamArea";
import Testimonials from "../../../components/HomeTwo/Testimonials";
import SEO from "../../../components/seo";

const HomeTwo = () => {
  return (
    <>
      <SEO pageTitle="Home Two" />
      <HomeTwoHeader />
      <HeroArea />
      <CategoryArea />
      <CourseArea />
      <ResearchArea />
      <Events />
      <TeamArea />
      <Testimonials />
      <BrandArea />
      <HomeTwoFooter />
    </>
  );
};

export default HomeTwo;
