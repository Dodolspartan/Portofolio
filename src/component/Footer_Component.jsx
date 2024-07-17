import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Footer_Component() {
  return (
    <div className="element-footer p-4 sm:p-6 lg:p-8">
      <div className="element-heading-title text-center mb-6">
        <h1 className="text-4xl sm:text-6xl lg:text-9xl font-semibold text-gray-900">
          Let’s talk!
        </h1>
      </div>
      <div className="element-btn-items text-center py-6">
        <a
          href="mailto:dadifarisa08@gmail.com"
          className="text-xl text-gray-700 flex justify-center items-center">
          dadifarisa08@gmail.com <MdArrowOutward className="ml-2" />
        </a>
      </div>
      <div className="element-tags py-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="element-made-in mb-4 md:mb-0">
            <h6 className="text-sm text-gray-500">
              2024 © — Made by Dadi Farisa
            </h6>
          </div>
          <div className="element-social-in">
            <div className="flex flex-row gap-5">
              <a href="https://dribbble.com" className="text-sm text-gray-500">
                Dribbble
              </a>
              <a href="https://github.com" className="text-sm text-gray-500">
                Github
              </a>
              <a href="https://linkedin.com" className="text-sm text-gray-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_Component;
