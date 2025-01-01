import React, { useState } from "react";
// import "./ContactMe.css"; // Create a separate CSS file for styles

const key = process.env.access_key
const ContactMe = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isValidated, setIsValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsValidated(true);

    if (!e.target.checkValidity()) {
      return;
    }

    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formState,
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: "New Submission from Web3Forms",
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResult(json.message);
      } else {
        setResult(json.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    } finally {
      setFormState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setIsValidated(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <div className="flex items-center min-h-screen ">
      <div className="w-1/2 flex flex-col justify-center text-center text-white px-10">
      <h1 className="text-4xl font-bold">I would Love to Hear From You</h1>
      <p className="mt-4">Reach out with any questions or feedback you may have!</p>
    </div>
  <div className="container">
    <div className="max-w-lg mx-auto my-5 bg-white p-4 rounded-md shadow-sm">
      <div className="text-center">
        <h1 className="my-2 text-2xl font-medium  dark:text-gray-800">
          Contact Us
        </h1>
        <p className="text-sm text-gray-400 dark:text-gray-800">
          Fill up the form below to send us a message.
        </p>
      </div>
      <div className="m-5">
        <form
          onSubmit={handleSubmit}
          noValidate
          className={`needs-validation ${isValidated ? "was-validated" : ""}`}
        >
          <div className="flex mb-4 space-x-3">
            <div className="w-full">
              <label
                htmlFor="firstName"
                className="block mb-1 text-sm text-gray-600 dark:text-gray-800"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div className="empty-feedback invalid-feedback text-red-400 text-xs mt-1">
                Please provide your first name.
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block mb-1 text-sm text-gray-600 dark:text-gray-800"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Doe"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div className="empty-feedback invalid-feedback text-red-400 text-xs mt-1">
                Please provide your last name.
              </div>
            </div>
          </div>

          <div className="flex mb-4 space-x-3">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-600 dark:text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div className="empty-feedback text-red-400 text-xs mt-1">
                Please provide your email address.
              </div>
              <div className="invalid-feedback text-red-400 text-xs mt-1">
                Please provide a valid email address.
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-sm mb-1 text-gray-600 dark:text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 (555) 1234-567"
                value={formState.phone}
                onChange={handleChange}
                required
                className="w-full px-2 py-1 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              />
              <div className="empty-feedback invalid-feedback text-red-400 text-xs mt-1">
                Please provide your phone number.
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-1 text-sm text-gray-600 dark:text-gray-800"
            >
              Your Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Your Message"
              value={formState.message}
              onChange={handleChange}
              className="w-full px-2 py-1 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              required
            ></textarea>
            <div className="empty-feedback invalid-feedback text-red-400 text-xs mt-1">
              Please enter your message.
            </div>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-3 py-2 text-sm text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>
          <p className="text-xs text-center text-gray-400" id="result">
            {result}
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactMe;
