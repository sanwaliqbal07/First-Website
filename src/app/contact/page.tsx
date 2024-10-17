// src/pages/contact.js

import Header from '../../components/Header';

const Contact = () => {
  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <Header />
      <h1 className="text-center text-3xl mt-10">Contact Us</h1> {/* Reduced margin-top */}
      <p className="text-center mt-4">
       I Would Love To Hear About You 
      </p>
      <h2 className="text-center text-2xl mt-6">Get in Touch</h2>
      <p className="text-center mt-2">
        You can contact us via email at <a href="mailto:info@pookies.com" className="text-teal-600">info@pookies.com</a>
      </p>
      <p className="text-center mt-2">
        Or follow us on our social media channels:
      </p>
      <ul className="flex justify-center space-x-4 mt-4">
        <li>
          <a href="https://facebook.com/pookies" target="_blank" rel="noopener noreferrer" className="text-teal-600">Facebook</a>
        </li>
        <li>
          <a href="https://instagram.com/pookies" target="_blank" rel="noopener noreferrer" className="text-teal-600">Instagram</a>
        </li>
      </ul>
      <p className="text-center mt-6">
        Thank you for connecting with us! We can’t wait to hear from you.
      </p>
    </div>
  );
};

export default Contact;
