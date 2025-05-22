
import React, { useState } from 'react';

function GraphicDesignPage() {
  const works = [
    {
      image: 'image/conference/summit.png',
    },
    {
      image: 'image/conference/au-summit.png',
    },
    {
      image: 'image/conference/event.png',
    },
  
    ];

    const works1 = [
      {
        image: 'image/feastival/fe.png',
      },
      {
        image: 'image/feastival/art.png',
      },
      {
        image: 'image/feastival/music.jpg',
      },
    
    ]
    const works2 = [
      {
        image: 'image/product/CAKE.png',
      },
      {
        image: 'image/product/car.png',
      },
      {
        image: 'image/product/bags.png',
      },
    
    ]
    const works3 = [
      {
        image: 'image/shop/cookie.png',
      },
      {
        image: 'image/shop/coffeee.png',
      },
     
      {
        image: 'image/shop/flowe.png',
      },
    
    ]
    const works4 = [
      {
        image: 'image/store/jew.png',
      },
      {
        image: 'image/store/to.png',
      },
      {
        image: 'image/store/ware.png',
      },
    
    ]
    const works5 = [
      {
        image: 'image/event/movie.png',
      },
      {
        image: 'image/event/arrt.png',
      },
      {
        image: 'image/event/event2.png',
      },
    
    
    
    ]
    const works6 = [
      { image: 'image/additional/mock.png', title: 'Mockups' },
      { image: 'image/additional/norebook.png', title: 'Book Cover' },
      { image: 'image/additional/logo.png', title: 'Logo' },
      { image: 'image/additional/brocher.png', title: 'Brochure' },
      { image: 'image/additional/banner.png', title: 'Banner' },
      { image: 'image/additional/bus.png', title: 'Business Card' },
    ];
  
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');
  
    const openModal = (image, title) => {
      setSelectedImage(image);
      setSelectedTitle(title);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      setSelectedImage('');
      setSelectedTitle('');
    };
  
    const handleBackgroundClick = (e) => {
      if (e.target.classList.contains('modal-background')) {
        closeModal();
      }
    };
  
    return (
      <section className="bg-[#121212] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left ml-3 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Conference And
              <span className="text-teal-500"> Summit</span>
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-[#1E1E1E] rounded-2xl p-6 border border-[#2C2C2C] hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={work.image}
                    alt=""
                    className="w-full rounded-md object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
        <div className="text-left mt-16 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Feastival
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works1.map((work, index) => (
            <div
              key={index}
              className="
                bg-[#1E1E1E] 
                rounded-2xl 
                p-6 
                mt-8
                border 
                border-[#2C2C2C] 
                hover:border-teal-500 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2
              "
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-md object-cover"
                />
              </div>

         
            
          
            </div>
          ))}
        </div>
          </h2>
        </div>
        </div>

        <div className="max-w-6xl mx-auto">
        <div className="text-left mt-16 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Services
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works2.map((work, index) => (
            <div
              key={index}
              className="
                bg-[#1E1E1E] 
                rounded-2xl 
                p-6 
                mt-8
                border 
                border-[#2C2C2C] 
                hover:border-teal-500 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2
              "
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-md object-cover"
                />
              </div>

         
            
          
            </div>
          ))}
        </div>
          </h2>
        </div>
        </div>


      <div className="max-w-6xl mx-auto">
        <div className="text-left mt-16 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Shop
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works3.map((work, index) => (
            <div
              key={index}
              className="
                bg-[#1E1E1E] 
                rounded-2xl 
                p-6 
                mt-8
                border 
                border-[#2C2C2C] 
                hover:border-teal-500 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2
              "
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-md object-cover"
                />
              </div>

         
            
          
            </div>
          ))}
        </div>
          </h2>
        </div>
        </div>

        <div className="max-w-6xl mx-auto">
        <div className="text-left mt-16 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Store
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works4.map((work, index) => (
            <div
              key={index}
              className="
                bg-[#1E1E1E] 
                rounded-2xl 
                p-6 
                mt-8
                border 
                border-[#2C2C2C] 
                hover:border-teal-500 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2
              "
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-md object-cover"
                />
              </div>

         
            
          
            </div>
          ))}
        </div>
          </h2>
        </div>
        </div>

        <div className="max-w-6xl mx-auto">
        <div className="text-left mt-16 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Events
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works5.map((work, index) => (
            <div
              key={index}
              className="
                bg-[#1E1E1E] 
                rounded-2xl 
                p-6 
                mt-8
                border 
                border-[#2C2C2C] 
                hover:border-teal-500 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2
              "
            >
              <div className="flex items-center justify-center mb-6">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full rounded-md object-cover"
                />
              </div>

         
            
          
            </div>
          ))}
        </div>
          </h2>
        </div>
        </div>
  
        <div className="max-w-6xl mx-auto">
          <div className="text-left mt-16 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additionally</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works6.map((work, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center mb-6">
                    <button
                      onClick={() => openModal(work.image, work.title)} 
                      className="w-full bg-teal-800 text-white rounded-md p-4 hover:bg-teal-700 transition duration-200"
                    >
                      {work.title} {}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 modal-background"
            onClick={handleBackgroundClick} 
          >
            <div className="relative p-4"> {}
              <button
                className="absolute top-0 right-0 p-2 text-white"
                onClick={closeModal}
              >
                &times; {/* Close button */}
              </button>
              <img
                src={selectedImage}
                alt={selectedTitle} 
                className="max-w-[90%] max-h-[90vh] object-contain" 
              />
              <h3 className="text-center text-white mt-2">{selectedTitle}</h3> {}
            </div>
          </div>
        )}
  
        <h2 className="text-2xl text-center ml-5 mt-5 text-white mb-4">
          You Can Contact For More! ☺️
        </h2>
      </section>
    );
  }
  
  export default GraphicDesignPage;