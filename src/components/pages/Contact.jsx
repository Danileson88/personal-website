import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = ({ isOpen }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("Ayden", "Daniel", form.current, "rEKqJFUM4yK7M12BJ").then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        alert("Form Submitted!");
        form.current.reset();
      },
      (error) => {
        console.error("Email sending failed:", error.text);
        alert("Failed to submit form. Please try again later.");
      }
    );
  };

  return (
    <div
      className={`${
        isOpen ? "opacity-0" : "opacity-100"
      } flex justify-center mt-[2rem]`}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="fade-In flex justify-center border-solid border-[2px] border-black p-12 md:w-fit xxs:w-[20rem] xs:w-[24rem]
         mt-28 bg-gray-600 rounded-xl shadow-2xl shadow-gray-400"
      >
        <div className="flex-col flex gap-9 w-full">
          <h1 className="flex justify-center xxs:text-5xl xs:text-6xl font-bebas text-yellow-600 font-bold">
            Contact Me
          </h1>
          <input
            autoFocus
            type="text"
            required
            name="firstName"
            placeholder="First Name"
            className="text-center xxs:text-xl xs:text-3xl font-extralight placeholder:text-black p-1 shadow-inner shadow-black"
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="text-center xxs:text-xl xs:text-3xl font-extralight placeholder:text-black p-1 shadow-inner shadow-black"
          />
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="text-center xxs:text-xl xs:text-3xl font-extralight placeholder:text-black p-1 shadow-inner shadow-black"
          />
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="text-center xxs:text-xl xs:text-3xl font-extralight placeholder:text-black p-1 shadow-inner shadow-black"
          />
          <textarea
            onChange={handleChange}
            name="message"
            placeholder="Comment..."
            className="flex font-extralight xxs:text-xl xs:text-3xl placeholder:text-black h-[8rem] p-1 shadow-inner shadow-black"
          />
          <button
            type="submit"
            className="xxs:text-xl xs:text-3xl p-10 bg-red-300 rounded-xl shadow-inner shadow-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
