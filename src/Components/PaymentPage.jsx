import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/babaka.jpg";

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePaymentOptionClick = (paymentMethod) => {
    const yourUpiId = "bi63951@axl"; // Replace with your actual UPI ID
    const price = 299;

    const upiDeepLinks = {
      GPay: `upi://pay?pa=bi63951@axl&pn=Payment&am=${price}&cu=INR`,
      Paytm: `upi://pay?pa=6395142354@pthdfc&pn=Payment&am=${price}&cu=INR`,
      PhonePe: `upi://pay?pa=bi63951@axl&pn=Payment&am=${price}&cu=INR`,
    };

    const upiUrl = `upi://pay?pa=bi63951@axl&pn=Payment&am=${price}&cu=INR`;

    if (upiUrl) {
      // Open the UPI app for payment
      window.location.href = upiUrl;

      // Redirect to the form page after a delay to simulate payment completion
      setTimeout(() => {
        alert("Payment successful! Redirecting to the form...");
        navigate('/form'); // Replace '/form' with your actual route for the form page
      }, 50000); // Adjust the delay as needed
    } else {
      alert("Payment method not supported.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Image Section */}
      <img
        src={img} // Replace with your image URL
        alt="Payment"
        className="mb-8 w-80 rounded-lg shadow-lg"
      />
      {/* Payment Details */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Advance Payment</h1>
      <p className="text-lg text-gray-600 mb-6">Pay ₹299 to continue</p>

      {/* UPI Payment Options */}
      <div className="flex flex-wrap gap-4 justify-center">
        {['Payment'].map((method, index) => (
          <button
            key={index}
            className="bg-indigo-500 text-white py-2 px-4 rounded shadow hover:bg-indigo-600 transition"
            onClick={() => handlePaymentOptionClick(method)}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentPage;
