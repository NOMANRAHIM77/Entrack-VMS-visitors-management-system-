import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-14">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Simple & Transparent Pricing
        </h1>
        <p className="text-gray-600 text-lg">
          Choose a plan that fits your organization’s scale and needs
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Basic Plan */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p className="text-gray-500 mb-6">
            Ideal for small offices & startups
          </p>

          <div className="text-4xl font-bold mb-6">
            Free
          </div>

          <ul className="text-gray-600 space-y-3 flex-1">
            <li>✔ Single sector dashboard</li>
            <li>✔ Visitor entry tracking</li>
            <li>✔ Daily activity overview</li>
            <li>✔ Basic analytics</li>
            <li>✖ Advanced security features</li>
          </ul>

          <button className="mt-8 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-slate-900 text-white rounded-2xl shadow p-8 flex flex-col scale-105">
          <h2 className="text-xl font-semibold mb-2">Professional</h2>
          <p className="text-slate-300 mb-6">
            Best for growing organizations
          </p>

          <div className="text-4xl font-bold mb-6">
            $29<span className="text-lg font-medium">/month</span>
          </div>

          <ul className="space-y-3 flex-1 text-slate-200">
            <li>✔ Multiple sector dashboards</li>
            <li>✔ Real-time tracking</li>
            <li>✔ Advanced analytics</li>
            <li>✔ Role-based access</li>
            <li>✔ Priority support</li>
          </ul>

          <button className="mt-8 bg-white text-slate-900 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-500 mb-6">
            Designed for large-scale operations
          </p>

          <div className="text-4xl font-bold mb-6">
            Custom
          </div>

          <ul className="text-gray-600 space-y-3 flex-1">
            <li>✔ Unlimited dashboards</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ On-prem / cloud deployment</li>
            <li>✔ Enhanced security & compliance</li>
          </ul>

          <button className="mt-8 border border-slate-900 text-slate-900 py-3 rounded-xl hover:bg-slate-900 hover:text-white transition">
            Contact Sales
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto text-center mt-14 text-gray-500 text-sm">
        All plans include basic security & system updates • No hidden charges
      </div>

    </div>
  );
};

export default Pricing;
