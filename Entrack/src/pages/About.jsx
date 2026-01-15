import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-12">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Entrack
        </h1>
        <p className="text-gray-600 text-lg">
          A Smart Entry & Resource Tracking Management System
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Project Overview */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Project Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Entrack is a centralized management system designed to monitor,
            control, and analyze entry records, visitor movement, and
            operational metrics across multiple sectors. The system provides
            real-time insights and administrative control for organizations
            such as hospitals, educational institutions, offices, factories,
            event halls, hotels, IT centers, government buildings, and fitness
            facilities.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Problem Statement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Traditional entry management systems rely heavily on manual logs,
            disconnected tools, and non-scalable software solutions. These
            approaches often result in data inconsistency, poor security,
            limited visibility, and inefficient operational management.
            Organizations require a unified, digital, and scalable platform to
            efficiently track entries, analyze trends, and improve safety and
            decision-making.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sector-specific dashboards (Hospital, Office, Education, etc.)</li>
            <li>Real-time visitor and entry tracking</li>
            <li>Centralized admin control panel</li>
            <li>Scalable and modular system architecture</li>
            <li>Data visualization and analytics readiness</li>
            <li>Secure and role-based access management</li>
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Technology Stack
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
            <li><strong>State Management:</strong> React Hooks</li>
            <li><strong>UI Design:</strong> Responsive & dashboard-based layouts</li>
            <li><strong>Future Scope:</strong> API integration, database support, real-time analytics</li>
          </ul>
        </div>

        {/* Objectives */}
        <div className="bg-white p-8 rounded-2xl shadow lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Project Objectives
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>To digitize and automate entry tracking processes</li>
            <li>To provide real-time operational insights through dashboards</li>
            <li>To improve security, transparency, and efficiency</li>
            <li>To build a scalable system applicable across multiple industries</li>
            <li>To serve as a foundation for future smart infrastructure solutions</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Entrack — Smart Management Simplified
      </div>

    </div>
  );
};

export default About;
