import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../utils/projectsSection";
import "swiper/css";
import Project from "./Project";
import FindMore from "./FindMore";

const ProjectsSwiper = () => {
  return (
    <Swiper swiper slidesPerView={1} spaceBetween={10} breakpoints={{ 1024: { slidesPerView: 2.3, spaceBetween: 30 } }}>
      {projects.map((project, i) => (
        <SwiperSlide key={i}>
          <Project project={project} />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <FindMore />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProjectsSwiper;
