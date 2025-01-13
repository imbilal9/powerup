import React from 'react';
import InquiryForm from './Inqueryform';
import Videoplay from './Videoplay';
import img1 from '../assets/medicine.jpg';
import img2 from '../assets/info.jpg';
import video1 from '../assets/link.mp4';
import video2 from '../assets/paadi.mp4';
import video3 from '../assets/buda.mp4';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <Videoplay />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Service</h1>
          <p className="text-lg md:text-xl max-w-xl text-center">
            Discover quality products and services designed to meet your needs. Let's connect and grow together.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-10 px-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Make an Inquiry</h2>
        <InquiryForm />
      </section>

      {/* Media Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative group">
            <img
              src={img1}
              alt="medicine"
              className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white transition-opacity duration-300">
              <p className="text-lg font-bold">Quality Medicines</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group">
            <img
              src={img2}
              alt="information"
              className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white transition-opacity duration-300">
              <p className="text-lg font-bold">Expert Advice</p>
            </div>
          </div>

          {/* Video 1 */}
          <div className="relative group">
            <video
              src={video1}
              autoPlay
              loop
              muted
              className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white transition-opacity duration-300">
              <p className="text-lg font-bold">Customer Success</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="relative group">
            <video
              src={video2}
              autoPlay
              loop
              muted
              className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white transition-opacity duration-300">
              <p className="text-lg font-bold">Inspiring Stories</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="relative group">
            <video
              src={video3}
              autoPlay
              loop
              muted
              className="w-full h-60 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white transition-opacity duration-300">
              <p className="text-lg font-bold">Trusted Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Inquiry */}
      <section className="py-10 px-6 bg-gray-800 text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Still Have Questions?</h2>
        <InquiryForm />
      </section>
    </div>
  );
};

export default Home;
