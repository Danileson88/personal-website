import { useRef, useState } from "react";
import { HeroProps } from "../../types";
import emailjs from "emailjs-com";

const Contact: React.FC<HeroProps> = ({ isOpen }) => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Form Submitted!");
  };
  const sendEmail = () => {};

  return (
    <div className={`${isOpen ? "opacity-0" : "opacity-100"} mt-[8rem]`}>
      <form
        onSubmit={sendEmail}
        className={`flex ml-auto mr-auto justify-center border-[.2rem]
         p-12 w-fit mt-28 bg-gray-300 rounded-xl`}
      >
        <div className="flex-col flex gap-9">
          <h1 className=" flex justify-center text-6xl font-bebas text-yellow-600 font-bold">
            Contact Me!
          </h1>
          <input
            type="text"
            required
            placeholder="First Name"
            className=" text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className=" text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <input
            type="email"
            required
            value={email}
            onChange={handleChange}
            placeholder="Email"
            className=" text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className=" text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <textarea
            placeholder="Comment..."
            className=" flex font-extralight text-3xl placeholder:text-black h-[8rem] w-[18rem] shadow-md shadow-gray-500"
          />
          <button
            type="submit"
            className=" text-3xl p-10 bg-red-300 rounded-xl shadow-md shadow-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
