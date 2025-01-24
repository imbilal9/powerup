import React from "react";
import img1 from "../assets/imgx.jpeg";
import img2 from "../assets/imgy.webp";
import img3 from "../assets/imgz.webp";
import img4 from "../assets/imga.jpeg";

const UserTestimonial = () => {
  const testimonials = [
    {
      name: "राकेश गुप्ता",
      quote:
        "अतिरिक्त हस्तमैथुन के कारण, मेरा लिंग छोटा हो गया और मुझे शीघ्रपतन वाली समस्या का सामना करना पड़ा। मेरे करीबी दोस्त ने मुझे X Power Power के बारे में समझाया और मुझे इस उत्पाद का उपयोग करने का भी सुझाव दिया। 1 महीने के लिए इसका उपयोग करने के बाद, मेरे लिंग का आकार 8 Inch तक बढ़ गया है।",
      imageUrl: img1,
    },
    {
      name: "कीटु",
      quote:
        "मेरी बीवी मज़ाक करती थी कि वो मुझे छोड़ कर जाने वाली है मैंने फैसला किया कि अपनी बीवी को एक नई चीज से सरप्राइज़ दूँगा और मैंने X Power Gold खरीद ली। मेरा आत्म-विश्वास बढ़ गया और मैं एक गबरू मर्द जैसा महसूस करने लगा।",
      imageUrl: img2,
    },
    {
      name: "कमल",
      quote:
        "मेरा 4 Inch का था। लड़कियाँ हमेशा मुझ पर हँसती थीं। मैं फिलहाल X Power Gold Capsule ली रहा हूँ और मेरा लिंग 8 Inch हो चुका है। अब मैं दो सेमी और बड़ा करना चाहता हूँ लेकिन मेरा आत्मविश्वास बहुत बढ़ चुका है। विश्वास नहीं होता कि कुछ दिनों पहले तक मेरी जीने की इच्छा तक खत्म हो गई थी!।",
      imageUrl: img3,
    },
    {
      name: "Neeraj Kumar",
      quote:
        "मेरे लाइफ को खुशहाल बनाने के लिए Thanks X Power Gold अब अपने को मैं पूरी संतुष्टि दे पा रहा हूँ। जब से मैंने इस दवाई का सेवन किया है तब से मैं अपने अंदर एक अलग ही ऊर्जा का अनुभव कर पा रहा हूँ। Thanks X Power Gold।",
      imageUrl: img4,
    },
  ];

  return (
    <div className="testimonial-container grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-box flex items-center gap-4 p-4 border rounded-lg shadow-lg"
        >
          <img
            src={testimonial.imageUrl}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-700">{testimonial.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTestimonial;
