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
        <input
          className=" p-1 shadow-inner shadow-black rounded"
          type="text"
          name="userName"
          placeholder="UserName"
        />
        <input
          className=" p-1 shadow-inner shadow-black rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className=" shadow-inner shadow-gray-600 p-3 bg-red-300">
          Login
        </button>
        <div className=" text-white">
          <p className="">Sign Up</p>
          <p>Forgot Password?</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
