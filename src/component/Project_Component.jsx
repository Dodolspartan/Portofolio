import React from "react";
import Image1 from "../asset/portofolio/Santri Quran.png";
import Image2 from "../asset/portofolio/Childhish.png";
import Image3 from "../asset/portofolio/Defas Oil.png";
import Image4 from "../asset/portofolio/PT Putra Sahabat Internasional.png";
import { IoArrowForward } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

function ProjectComponent() {
  return (
    <div className="element-project py-10 px-5 lg:p-28">
      <div className="element-head-and-more flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="element-left-items text-center md:text-left mb-5 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-900">Project</h2>
          <h6 className="text-gray-500 text-base leading-loose py-3">
            As a user-friendly and experienced web design creator and graphic
            designer, I aim to help you build the brand of your dreams.
          </h6>
        </div>
        <div className="element-right-items">
          <a
            className="float-right flex gap-2 items-center text-gray-400"
            href="#">
            More <IoArrowForward />
          </a>
        </div>
      </div>

      <div className="element-items-project grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-10">
        <div className="element-card-items-project bg-white rounded-lg overflow-hidden">
          <div className="element-image-items">
            <img
              src={Image1}
              alt="Project Thumbnail"
              className="w-full  object-cover"
            />
          </div>
          <div className="element-text-and-link p-5">
            <h4 className="font-semibold text-2xl mb-2">UI/UX Design</h4>
            <a className="flex gap-3 items-center text-gray-400" href="">
              <h5>Designer</h5>
              <GoArrowUpRight />
            </a>
          </div>
        </div>

        <div className="element-card-items-project bg-white rounded-lg overflow-hidden">
          <div className="element-image-items">
            <img
              src={Image2}
              alt="Project Thumbnail"
              className="w-90  object-cover"
            />
          </div>
          <div className="element-text-and-link p-5">
            <h4 className="font-semibold text-2xl mb-2">CMS Website</h4>
            <a className="flex gap-3 items-center text-gray-400" href="">
              <h5>WordPres Development</h5>
              <GoArrowUpRight />
            </a>
          </div>
        </div>

        <div className="element-card-items-project bg-white rounded-lg overflow-hidden">
          <div className="element-image-items">
            <img
              src={Image3}
              alt="Project Thumbnail"
              className="w-full  object-cover"
            />
          </div>
          <div className="element-text-and-link p-5">
            <h4 className="font-semibold text-2xl mb-2">Graphic Designer</h4>
            <a className="flex gap-3 items-center text-gray-400" href="">
              <h5>Social Media</h5>
              <GoArrowUpRight />
            </a>
          </div>
        </div>

        <div className="element-card-items-project bg-white rounded-lg overflow-hidden">
          <div className="element-image-items">
            <img
              src={Image4}
              alt="Project Thumbnail"
              className="w-90  object-cover"
            />
          </div>
          <div className="element-text-and-link p-5">
            <h4 className="font-semibold text-2xl mb-2">Front End Website</h4>
            <a className="flex gap-3 items-center text-gray-400" href="">
              <h5>Slicing Website</h5>
              <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
