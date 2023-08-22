import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="h-full max-w-screen-lg w-full flex flex-col justify-center p-4 mx-auto">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 w-fit">
          Contact
        </p>
        <p className="my-2">Submit the form below to get in touch me</p>
        <div className="flex justify-center text-center mt-4 p-2">
          <form
            action="https://getform.io/f/24e99c53-b0f6-4d44-95f4-f839b550d540"
            className="flex flex-col gap-4 w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              id=""
              className="rounded-md p-2 bg-transparent border-2 outline-none"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              id=""
              className="rounded-md p-2 bg-transparent border-2 outline-none"
              placeholder="Enter your email"
            />
            <textarea
              name="text"
              id=""
              rows="10"
              className="rounded-md p-2 bg-transparent border-2 outline-none"
              placeholder="Enter your message"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto px-3 py-1 rounded-md"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
