const Projects = ({ isOpen, openMenu }) => {
  return (
    <div
      className={`${
        isOpen ? "opacity-0" : "opacity-100"
      } flex justify-center flex-wrap`}
    >
      <a
        href="https://github.com/Danileson88/CapstoneProject"
        className="fade-In"
      >
        <img
          src="assets/littleLemon-screenShot.png"
          alt="project image"
          className=" max-w-[25rem] md:max-w-[50rem] mt-10"
        />
      </a>
      <h1 className="mt-[5rem] font-serif text-2xl w-[25rem] md:w-[50rem] text-center">
        I recently completed a web development project using React for a
        charming restaurant called Little Lemon. The website is designed to
        showcase the restaurant's unique ambiance and delicious menu offerings.
        Featuring a clean and modern layout, the site includes high-quality
        images, smooth navigation, and responsive design to ensure a seamless
        user experience on all devices. Visitors can easily explore the menu,
        learn about the restaurant's history, and make reservations. The project
        highlights my skills in React, responsive design, and creating visually
        appealing and user-friendly web applications.
      </h1>
    </div>
  );
};

export default Projects;
