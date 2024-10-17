// src/pages/about.js

import Header from '../../components/Header';

const About = () => {
  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <Header />
      <h1 className="text-center text-3xl md:text-4xl mt-4">About Pookie&apos;s</h1>
      <p className="text-center mt-4 text-lg md:text-xl">
        Welcome to Pookie&apos;s! We are i mean I Am the Pookies, founded in 2024 with the creation of our website.
      </p>
      <h2 className="text-center text-2xl md:text-3xl mt-6">Our Story</h2>
      <p className="text-center mt-2 text-base md:text-lg">
        At Pookie&apos;s, we believe in the power of community and connection. Our journey started when I had an assignment to create a website.
      </p>
      <h2 className="text-center text-2xl md:text-3xl mt-6">What We Offer</h2>
      <p className="text-center mt-2 text-base md:text-lg">
        We offer a wide range of products and collaboration opportunities!
      </p>
      <h2 className="text-center text-2xl md:text-3xl mt-6">Join Us</h2>
      <p className="text-center mt-2 text-base md:text-lg">
        You can join us by(idk). If you're wondering about the perks, you'll receive the mythical title <span className="text-red-700">Pookie&apos;s</span>.
      </p>
      <p className="text-center mt-6 text-base md:text-lg">
        Thank you for being a part of Pookie&apos;s journey (which started just a week ago!).
      </p>
    </div>
  );
};

export default About;
