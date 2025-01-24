import React from 'react';
import InquiryForm from './Inqueryform';
import Videoplay from './ProductPage';
import img1 from '../assets/medicine.jpg';
import img2 from '../assets/info.jpg';
import video1 from '../assets/link.mp4';
import video2 from '../assets/paadi.mp4';
import video3 from '../assets/buda.mp4';
import InfoPage from './InfoPage';
import UserTestimonial from './UserTestimonial';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative text-white">
        <Videoplay />
        
      </section>

      {/* Media Section */}
      <section className="py-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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
      <section className="py-10 px-6 justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center pt-5 bg-orange-500 h-20 justify-center">हमारे संतुष्ट ग्राहक</h2>
        <UserTestimonial/>
      </section>
    </div>
  );
};

export default Home;
