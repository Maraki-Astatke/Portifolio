import React, { useState } from 'react';

function CertificatesPage() {
  const certificates = [
    { image: 'image/webdesign/online.png', title: 'Certificate 1', link: 'https://online-market-tawny.vercel.app/' },
    { image: 'image/webdesign/jewlery.png', title: 'Certificate 2', link: 'https://online-market-yr64.vercel.app/' },
    { image: 'image/webdesign/flower.png', title: 'Certificate 3', link: 'https://flower-plum-mu.vercel.app/' },
    { image: 'image/webdesign/e-com.png', title: 'Certificate 4', link: 'https://commerce-lemon-phi-25.vercel.app/' },
    { image: 'image/webdesign/fun.png', title: 'Certificate 5', link: 'https://example.com/certificate5' },
    { image: 'image/webdesign/cafe.png', title: 'Certificate 6', link: 'https://example.com/certificate6' },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-teal-500 font-bold text-center mb-8">
        WEB <span className='text-white'>Design</span>
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

   
    </section>
  );
}

export default CertificatesPage;