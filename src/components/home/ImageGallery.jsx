import React from 'react';

const ImageGallery = () => {
  // List of images with their URLs
  const images = [
    { src: 'https://via.placeholder.com/300', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 6' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 7' },
    { src: 'https://via.placeholder.com/300', alt: 'Image 8' },
  ];

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-48 transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
