const Login = ({ isOpen, openMenu }) => {
  return (
    <div
      className={`${isOpen ? "opacity-0" : "opacity-100"}
       mt-[6rem] flex justify-center`}
    >
      <form
        className="flex gap-4 flex-col justify-evenly items-center border-2
      bg-gray-500 border-gray-400 p-10 w-fit"
      >
        <input type="text" name="userName" placeholder="UserName" />
        <input type="password" name="password" placeholder="Password" />
        <button className=" p-3 bg-red-300">Login</button>
      </form>
    </div>
  );
};

export default Login;
