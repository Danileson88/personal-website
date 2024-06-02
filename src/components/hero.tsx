import React from "react";

const Hero: React.FC = () => {
  return (
    <div className=" flex justify-center h-screen mt-32">
      <div className=" flex items-center gap-5">
        <img
          src="./src/assets/profile-pic.JPG"
          className=" w-[500px] h-[500px] border-solid rounded-full object-cover mt-32"
        />
        <div className="w-[500px]">
          <h1 className=" text-8xl font-bold">Hello</h1>
          <h2 className=" font-bold text-2xl mt-10 mb-2">A Bit About Me</h2>
          <h3 className=" font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            sunt ab! Laborum doloremque animi impedit esse rerum exercitationem
            necessitatibus nostrum incidunt nisi corporis. Quod accusamus quidem
            numquam dolores, reprehenderit quisquam?
          </h3>
          <div className="flex mt-20 gap-5">
            <span
              className=" flex justify-center items-center border-solid bg-gray-500 
            rounded-full w-36 h-36 text-center font-bold text-2xl"
            >
              Resume
            </span>
            <span
              className=" flex justify-center items-center border-solid bg-yellow-500
            rounded-full w-36 h-36 text-center font-bold text-2xl"
            >
              Projects
            </span>
            <span
              className=" flex justify-center items-center border-solid bg-rose-500 
            rounded-full w-36 h-36 text-center font-bold text-2xl"
            >
              Contact
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
