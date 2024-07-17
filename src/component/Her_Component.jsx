import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MdArrowOutward } from "react-icons/md";

function HeroComponent() {
  const arrowRef = useRef(null);
  const heroRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Animation for the arrow
    gsap.to(arrowRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1,
    });

    // Fade-in animation for the entire component
    gsap.from(heroRef.current, {
      opacity: 0,
      duration: 2.5,
      ease: "power2.inOut",
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
      window.location.href = "https://yoloker.com/"; // Redirect after loading is complete
    }, 2000); // For example, loading takes 2 seconds
  };

  return (
    <div ref={heroRef} className="element-hero-component  p-2 sm:p-6 lg:px-28">
      <h1 className="text-gray-900 text-3xl sm:text-5xl lg:text-7xl font-bold mb-6">
        Website& <br />
        UI <strong className="text-amber-500 underline"> Designer</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col">
          <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
            Let’s Talk
          </h4>
          <h6 className="text-base sm:text-lg text-gray-900">
            dadifarisa08@gmail.com
          </h6>
          <div className="element-btn mt-4">
            <a
              href="https://yoloker.com/"
              className="inline-flex items-center gap-3 text-gray-900 hover:text-gray-900"
              onClick={handleClick}>
              Resume
              {loading && <div className="loading">Loading...</div>}
              <MdArrowOutward ref={arrowRef} />
            </a>
          </div>
        </div>
        <div className="col">
          <h6 className="text-gray-900 text-base sm:text-lg leading-loose font-medium">
            Hello, I'm Dadi, an online product designer focusing on brand
            identity, advertising, and no-code instruments.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
