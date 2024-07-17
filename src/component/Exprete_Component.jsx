import React from "react";

function Exprete_Component() {
  return (
    <div className="Element-exprete-items bg-gray-100 p-4 sm:p-3 lg:p-32">
      <div className="element-title-items mb-8">
        <h1 className="text-4xl font-semibold">Expertise</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 sm:gap-2 gap-4">
        <div className="element-graphic py-7">
          <div className="heading-title">
            <h1 className="font-semibold py-2 text-xl">Graphic Designer</h1>
            <h6 className="font-normal text-gray-800 text-base leading-loose">
              I have had a career in the world of graphic designer for 2 years,
              I have created work such as banners, social media, motion video
              editing and regular videos.
            </h6>
          </div>
        </div>

        <div className="element-graphic py-7">
          <div className="heading-title">
            <h1 className="font-semibold py-2 text-xl">UI/UX Designer</h1>
            <h6 className="font-normal text-gray-800 text-base leading-loose">
              I have had a career in the world of UI/UX designer for 1 years,
              the work I have done is making the appearance neater and more
              elegant, making prototypes, looking for references for user or
              client needs.
            </h6>
          </div>
        </div>

        <div className="element-graphic py-7">
          <div className="heading-title">
            <h1 className="font-semibold py-2 text-xl">
              WordPress Development
            </h1>
            <h6 className="font-normal text-gray-800 text-base leading-loose">
              I have worked in the world of WordPress development for more than
              1 year, the work I have done is installing domains, servers,
              installing themes used and custom themes for client needs, and I
              also repair websites that have problems when plugins have errors.
            </h6>
          </div>
        </div>

        <div className="element-graphic py-7">
          <div className="heading-title">
            <h1 className="font-semibold py-2 text-xl">
              Front End Development
            </h1>
            <h6 className="font-normal text-gray-800 text-base leading-loose">
              I worked in the world of front end development for more than 1
              year, my usual work was slicing from Figma to HTML, CSS, JS, and
              React JS. And I also made the appearance more attractive, such as
              on desktop and mobile responsive
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exprete_Component;
