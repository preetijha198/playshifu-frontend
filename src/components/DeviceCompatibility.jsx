import React from "react";

const DeviceCompatibility = () => {
  return (
    <div className="bg-purple-700 text-white rounded-xl p-4 mt-4 w-full">
      <h3 className="text-lg font-bold text-center mb-4">Device Compatibility</h3>
      <div className="grid md:grid-cols-3 gap-4 text-black">
        <div className="bg-white p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-2">Android</h4>
          <ul className="text-sm list-disc list-inside">
            <li>RAM 3GB+ (except Samsung)</li>
            <li>Samsung RAM 2GB+</li>
            <li>No A9+, screen ≤ 11"</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-2">iOS</h4>
          <ul className="text-sm list-disc list-inside">
            <li>iPhone 6S+</li>
            <li>iPad mini 4+</li>
            <li>iPad Air 2+</li>
            <li>iPad 5th gen+</li>
            <li>iPad Pro 11"</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h4 className="text-md font-semibold mb-2">Amazon Fire</h4>
          <ul className="text-sm list-disc list-inside">
            <li>Fire 7 (2022)</li>
            <li>Fire 8 (2020/2022)</li>
            <li>Fire 8 Plus (2020/2022)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeviceCompatibility;
