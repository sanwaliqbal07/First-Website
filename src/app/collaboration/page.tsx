// src/pages/collaboration.js

import Header from '../../components/Header';
import Image from 'next/image'; // Import the Image component

const Collaboration = () => {
  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <Header />
      <h1 className="text-center text-4xl mt-4">Collaboration</h1>
      <p className="text-center mt-2">
        Some Amazing People <span className="text-red-700">Pookie&apos;s</span> Collaborated with
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        
        {/* Collaboration Item 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/a.jpg"
            alt="Collaborator A"
            width={384} // Use appropriate dimensions
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-center">Our <span className="text-red-700">Pookie&apos;s</span> with Black Widow</p>
        </div>

        {/* Collaboration Item 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/b.jpg"
            alt="Collaborator B"
            width={384}
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-center">Our <span className="text-red-700">Pookie&apos;s</span> with Iron Man</p>
        </div>

        {/* Collaboration Item 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/c.jpg"
            alt="Collaborator C"
            width={384}
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-center">Our <span className="text-red-700">Pookie&apos;s</span> with Ben 10</p>
        </div>

        {/* Collaboration Item 4 */}
        <div className="flex flex-col items-center">
          <Image
            src="/d.jpg"
            alt="Collaborator D"
            width={384}
            height={384}
            className="object-cover mb-2"
          />
          <p className="text-center">Our <span className="text-red-700">Pookie&apos;s</span> with Spider Man</p>
        </div>

      </div>
    </div>
  );
};

export default Collaboration;
