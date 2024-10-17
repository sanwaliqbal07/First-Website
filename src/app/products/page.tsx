// src/pages/products.js

import Header from '../../components/Header';
import Image from 'next/image'; // Import the Image component

const products = [
  {
    id: 1,
    name: 'Black Pookie',
    description: 'Common Pookie.',
    price: '220pkr',
    image: '/11111.jpg', // Replace with your actual image path
  },
  {
    id: 2,
    name: 'Purple Pookie',
    description: 'Special Epic Pookie.',
    price: '550pkr',
    image: '/1111.jpg', // Replace with your actual image path
  },
  {
    id: 3,
    name: 'Green Pookie',
    description: 'Special Legendary Pookie.', // Fixed typo from "Legendry" to "Legendary"
    price: '1100pkr',
    image: '/111.jpg', // Replace with your actual image path
  },
  {
    id: 4,
    name: 'Blue Pookie',
    description: 'Special Mythical Pookie.',
    price: '2000pkr',
    image: '/11.jpg', // Replace with your actual image path
  },
];

const Products = () => {
  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <Header />
      <h1 className="text-center text-4xl mt-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={500} // Add width for Next.js Image optimization
              height={300} // Add height for Next.js Image optimization
              className="w-full h-32 object-cover mb-2"
            />
            <h2 className="text-xl text-center">{product.name}</h2>
            <p className="text-center">{product.description}</p>
            <p className="text-center font-bold">{product.price}</p>
            <button className="mt-2 w-full bg-teal-600 text-white p-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
