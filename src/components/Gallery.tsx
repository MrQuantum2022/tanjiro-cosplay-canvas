
import { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
  featured?: boolean;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      src: "/public/lovable-uploads/75dc422c-3b72-45c2-8db0-e845b9b23926.png",
      alt: "Tanjiro with water effects",
      featured: true,
    },
    {
      src: "/public/lovable-uploads/ef3f0d1b-f1bf-4547-8114-bf1125f2d4fe.png",
      alt: "Tanjiro full costume view"
    },
    {
      src: "/public/lovable-uploads/842580cf-4ee0-4d3e-adee-1e094fb4e786.png",
      alt: "Tanjiro performing"
    },
    {
      src: "/public/lovable-uploads/e3235dd9-fef5-46d8-9d5e-faf3b246e3f6.png",
      alt: "Tanjiro with other cosplayers"
    },
    {
      src: "/public/lovable-uploads/2f6f1bb2-4146-4136-9ef6-3c47c3b0c0d4.png",
      alt: "Tanjiro receiving award"
    },
    {
      src: "/public/lovable-uploads/348a70a7-0369-41d4-ae4f-c7f5dcb384ba.png",
      alt: "Tanjiro walking on stage"
    }
  ];

  const openLightbox = (image: ImageData) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2">
            Cosplay <span className="text-tanjiro-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-tanjiro-primary mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore Tushar's authentic portrayal of Tanjiro Kamado through these captivating images showcasing the detail and passion behind the cosplay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-tanjiro-primary/20 ${
                image.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              &times; Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
