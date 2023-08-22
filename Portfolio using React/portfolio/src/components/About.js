import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="h-full w-full text-white max-w-screen-lg mx-auto flex flex-col justify-center p-4">
        <div>
          <p className="text-4xl inline border-b-4 border-gray-500 font-bold">
            About
          </p>
        </div>
        <p className="sm:text-xl my-4 text-xs">
          Hello there! I'm a passionate and creative web developer with one year
          of hands-on experience in crafting immersive digital experiences. My
          journey in the world of web development began with a spark of
          curiosity and a determination to transform ideas into captivating
          online realities.
        </p>
        <br />
        <p className="sm:text-xl text-xs">
          My journey has been one of continuous learning, experimentation, and
          growth. With a solid foundation in HTML, CSS, and JavaScript, I've
          built responsive and user-friendly websites that seamlessly adapt to
          various devices and screen sizes.From mastering modern front-end
          frameworks like React to exploring the potential of back-end
          technologies such as Node.js, I'm always eager to expand my skill set
          and embrace new challenges.
        </p>
        <br />
        <p className="sm:text-xl text-xs">
          Thank you for taking the time to learn more about me. If you're
          looking for a dedicated and adaptable web developer who is excited to
          contribute fresh perspectives to your projects, I would love to
          connect. Let's collaborate and turn your digital dreams into reality!
        </p>
      </div>
    </div>
  );
};

export default About;
