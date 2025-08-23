import React from "react";

function SkillsHome() {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <h2 className="h2">
          Skills<span>.</span>
        </h2>
        <div className="flex flex-wrap  text-[#845f56]">
          {/* Languages */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="inner">
              <h3 className="h3 pb-3">Languages</h3>
              <ul>
                <li className="pb-1">HTML5</li>
                <li className="pb-1">CSS3</li>
                <li className="pb-1">SASS</li>
                <li className="pb-1">JavaScript (ES6+)</li>
                <li className="pb-1">TypeScript</li>
              </ul>
            </div>
          </div>

          {/* Frameworks */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="inner">
              <h3 className="h3 pb-3">Frameworks</h3>
              <ul>
                <li className="pb-1">ReactJS</li>
                <li className="pb-1">NextJS</li>
              </ul>
            </div>
          </div>

          {/* Libraries */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="inner">
              <h3 className="h3 pb-3">Libraries</h3>
              <ul>
                <li className="pb-1">Redux</li>
                <li className="pb-1">TanStack Query</li>
                <li className="pb-1">Zustand</li>
                <li className="pb-1">Bootstrap</li>
                <li className="pb-1">Tailwind</li>
              </ul>
            </div>
          </div>

          {/* Other Skills */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <div className="inner">
              <h3 className="h3 pb-3">Other Skills</h3>
              <ul>
                <li className="pb-1">Problem Solving</li>
                <li className="pb-1">Responsive Design</li>
                <li className="pb-1">Component-Based Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsHome;
