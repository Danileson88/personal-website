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
        alert("Form Submitted!"); // Optionally notify user
        form.current.reset(); // Optionally reset the form after successful submission
      },
      (error) => {
        console.error("Email sending failed:", error.text);
        alert("Failed to submit form. Please try again later."); // Notify user of failure
      }
    );
  };

  return (
    <div className={`${isOpen ? "opacity-0" : "opacity-100"} mt-[8rem]`}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex ml-auto mr-auto justify-center border-[.2rem] p-12 w-fit mt-28 bg-gray-300 rounded-xl"
      >
        <div className="flex-col flex gap-9">
          <h1 className="flex justify-center text-6xl font-bebas text-yellow-600 font-bold">
            Contact Me
          </h1>
          <input
            type="text"
            required
            name="firstName"
            placeholder="First Name"
            className="text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="text-center text-3xl font-extralight placeholder:text-black shadow-md shadow-gray-500"
          />
          <textarea
            onChange={handleChange}
            name="message"
            placeholder="Comment..."
            className="flex font-extralight text-3xl placeholder:text-black h-[8rem] w-[18rem] shadow-md shadow-gray-500"
          />
          <button
            type="submit"
            className="text-3xl p-10 bg-red-300 rounded-xl shadow-md shadow-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
