import React from "react";

const DevInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-12">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Development Team
        </h1>
        <p className="text-gray-600 text-lg">
          Meet the minds behind Entrack
        </p>
      </div>

      {/* Developer Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Developer Card */}
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-4">
            NR
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Noman Rahim
          </h2>
          <p className="text-gray-500 mb-2">Frontend Developer</p>
          <p className="text-gray-600 text-sm mb-4">
            Responsible for designing and developing the user interface,
            dashboards, and overall user experience of Entrack.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full">React</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Tailwind</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">UI/UX</span>
          </div>
        </div>

        {/* Role Card */}
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
            BE
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Backend Developer
          </h2>
          <p className="text-gray-500 mb-2">System & API Engineer</p>
          <p className="text-gray-600 text-sm mb-4">
            Handles server-side logic, authentication, database design, and
            secure API integrations for scalable system performance.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Node.js</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">MongoDB</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Security</span>
          </div>
        </div>

        {/* Concept & Research */}
        <div className="bg-white rounded-2xl shadow p-8 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
            RS
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Research & System Design
          </h2>
          <p className="text-gray-500 mb-2">Planning & Architecture</p>
          <p className="text-gray-600 text-sm mb-4">
            Focuses on system architecture, requirement analysis, security
            considerations, and future scalability of Entrack.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Architecture</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Security</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Research</span>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto text-center mt-14 text-gray-500 text-sm">
        Built with passion and precision for smart infrastructure solutions
      </div>

    </div>
  );
};

export default DevInfo;
