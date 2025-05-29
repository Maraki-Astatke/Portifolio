import React, { useState } from 'react';

function CertificatesPage() {
  const certificates = [
    { image: 'image/ui/ux/web.png', title: 'Certificate 1', link: 'https://www.figma.com/design/dElQba3cJtFNfylNzf3J7X/Portifolio?node-id=0-1&t=B6Zj0VvZyYObW3DZ-0' },
    { image: 'image/webdesign/jewlery.png', title: 'Certificate 2', link: 'https://www.figma.com/design/MCK9lJsIGO4b9P8zkEOJ3f/Untitled?node-id=0-1&t=tWjFJSE1B2ayT5qc-1' },
    { image: 'image/webdesign/flower.png', title: 'Certificate 3', link: 'https://flower-plum-mu.vercel.app/' },
 
  ];

 const [showMore, setShowMore] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleMoreClick = () => {
    setShowMore(true);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-teal-500 font-bold text-center mb-8">
        UI/ <span className='text-white'>UX</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => handleCertificateClick(cert)} 
              className="w-full"
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-auto object-cover" 
                style={{ cursor: 'pointer' }} 
              />
         
            </a>
          </div>
        ))}
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