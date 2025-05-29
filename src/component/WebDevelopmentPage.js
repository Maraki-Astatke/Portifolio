import React, { useState } from 'react';

function CertificatesPage() {
  const certificates = [
    { image: 'image/webdesign/online.png', link: 'https://online-market-tawny.vercel.app/' },
    { image: 'image/webdesign/jewlery.png', link: 'https://online-market-yr64.vercel.app/' },
    { image: 'image/webdesign/flower.png', link: 'https://flower-plum-mu.vercel.app/' },
    { image: 'image/webdesign/e-com.png', link: 'https://commerce-lemon-phi-25.vercel.app/' },
    { image: 'image/webdesign/fun.png', link: 'https://funmemo.vercel.app/' },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleMoreClick = () => {
    setShowMore(true);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-teal-500 font-bold text-center mb-8">
        WEB <span className='text-white'>Design</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.slice(0, 3).map((cert, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => handleCertificateClick(cert)} 
              className="w-full"
            >
              <img 
                src={cert.image} 
                className="w-full h-auto object-cover" 
                style={{ cursor: 'pointer' }} 
              />
            </a>
          </div>
        ))}
        
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-8">
          {certificates.slice(3).map((cert, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => handleCertificateClick(cert)} 
                className="w-full"
              >
                <img 
                  src={cert.image} 
                  className="w-full h-auto object-cover" 
                  style={{ cursor: 'pointer' }} 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {!showMore ? (
        <button 
          className="mt-7 bg-teal-500 text-white font-bold py-2 px-14 rounded hover:bg-teal-600 transition duration-300"
          onClick={handleMoreClick}
        >
          More
        </button>
      ) : (
        <p className="mt-7 text-center text-lg text-teal-500">This all are my old works but I have more to show. Contact for more ☺️!! </p>
      )}
    </section>
  );
}

export default CertificatesPage;