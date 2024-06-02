import React from "react";

const Hero: React.FC = () => {
  return (
    <div className=" grid grid-cols-1 grid-rows-1 justify-items-center h-screen">
      <div>
        <img
          src="./src/assets/profile-pic.JPG"
          className=" w-[400px] h-[400px] border-solid rounded-full object-cover mt-32"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
