import React from 'react';

function UIUXDesignPage() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">UI/UX Design Services</h1>
        <p className="text-gray-400 mb-8">
          We craft intuitive and engaging user interfaces that enhance user experience and drive business results.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>User Research and Analysis</li>
            <li>Information Architecture</li>
            <li>Wireframing and Prototyping</li>
            <li>Visual Design and Branding</li>
            <li>Usability Testing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Add some example projects here with images and descriptions */}
            <div className="bg-[#1E1E1E] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Project 1</h3>
              <p className="text-sm text-gray-400">Description of Project 1...</p>
            </div>
            <div className="bg-[#1E1E1E] rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Project 2</h3>
              <p className="text-sm text-gray-400">Description of Project 2...</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UIUXDesignPage;