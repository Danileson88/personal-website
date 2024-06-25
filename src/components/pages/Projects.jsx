const Projects = ({ isOpen, openMenu }) => {
  return (
    <div className={`${isOpen ? "opacity-0" : "opacity-100"}`}>
      <h1>projects Page</h1>
    </div>
  );
};

export default Projects;
