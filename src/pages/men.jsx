import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/imp1.jpg'
import img9 from '../assets/img9 (2).jpg'
import img10 from '../assets/img11.jpg'
import img112 from '../assets/img3.jpg'


const Men = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: img1, alt: 'Placeholder Image 1' },
    { src: img9, alt: 'Placeholder Image 1' },
    { src: img112, alt: 'Placeholder Image 1' },
    { src: img10, alt: 'Placeholder Image 1' },
    { src: img1, alt: 'Placeholder Image 1' },
    { src: img10, alt: 'Placeholder Image 1' },
    { src: img1, alt: 'Placeholder Image 1' },
    { src: img112, alt: 'Placeholder Image 1' },
    { src: img10, alt: 'Placeholder Image 1' },
    { src: img1, alt: 'Placeholder Image 1' },
    { src: img1, alt: 'Placeholder Image 1' },
    { src: img112, alt: 'Placeholder Image 1' },
    { src: img10, alt: 'Placeholder Image 1' },
    { src: img1, alt: 'Placeholder Image 1' },
    { src: img112, alt: 'Placeholder Image 1' },
    { src: img10, alt: 'Placeholder Image 1' },
    { src: img1, alt: 'Placeholder Image 1' },

  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl pb-10 mx-auto mb-10 mt-40 "   data-aos="fade-up">
    {images.map((image, index) => (
      <div key={index} className="flex-shrink-0 " style={{ position: 'relative' }}>
        <img   src={image.src} alt={image.alt} className="rounded-lg shadow-lg object-cover w-full h-auto transition-transform duration-600 transform hover:scale-105 " />
        <p  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px', zIndex: 1 }}>{image.alt}</p>
      </div>
    ))}
  </div>
  );
};

export default Men;



// import React, { useState, useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import axios from 'axios';

// const Men = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/images');
//         setImages(response.data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl pb-10 mx-auto mb-10 mt-40">
//       {images.map((item, index) => (
//         <div key={index} className="flex-shrink-0" style={{ position: 'relative' }} data-aos="fade-up">
//           <img data-aos="fade-up" data-aos-delay="900"  src={item.images[0].url} alt={item.name} className="rounded-lg shadow-lg object-cover w-full h-auto" />
//           <p data-aos="fade-up" data-aos-delay="1500" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px', zIndex: 1 }}>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Men;

