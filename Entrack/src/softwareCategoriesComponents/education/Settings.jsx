const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="bg-white rounded-2xl shadow p-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">
          Education System Settings
        </h2>

        <div className="space-y-4">
          
          <div>
            <label className="block text-gray-600 mb-1">
              Academic Year
            </label>
            <input
              type="text"
              value="2026"
              className="w-full border rounded-xl p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">
              Grading System
            </label>
            <select className="w-full border rounded-xl p-2">
              <option>GPA (4.0)</option>
              <option>Percentage</option>
            </select>
          </div>

          <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-xl">
            Save Settings
          </button>

        </div>
      </div>

    </div>
  );
};

export default Settings;
