import React, { useState } from 'react';

function CertificatesPage() {
  const certificates = [
    { image: 'image/certifacte/dandii.jpg', title: 'Certificate 1' },
    { image: 'image/certifacte/data.png', title: 'Certificate 2' },
    { image: 'image/certifacte/exi.jpg', title: 'Certificate 3' },
    { image: 'image/certifacte/hack.jpg', title: 'Certificate 4' },
    { image: 'image/certifacte/kuraz.jpg', title: 'Certificate 5' },
    { image: 'image/certifacte/prog.png', title: 'Certificate 6' },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertificateClick = (cert) => {
    setSelectedCert(cert);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-teal-500 font-bold text-center mb-8">My <span className='text-white' >Certificates</span></h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <button 
              onClick={() => handleCertificateClick(cert)} 
              className="w-full p-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Show {cert.title}
            </button>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="mt-24 text-center">
          <h3 className="text-lg font-semibold">{selectedCert.title}</h3>
          <img 
            src={selectedCert.image} 
            alt={selectedCert.title} 
            className="w-full h-auto max-h-96 object-contain mt-4" 
          />
        </div>
      )}
    </section>
  );
}

export default CertificatesPage;