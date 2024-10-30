// LocationMap.tsx
import React from 'react';

interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocationMapProps {
  location: Location;
}

export const LocationMap: React.FC<LocationMapProps> = ({ location }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          {/* Map placeholder - replace with actual map implementation */}
          <div className="flex items-center justify-center">
            <p className="text-gray-500">Map Loading...</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
          <p className="text-gray-600">{location.address}</p>
        </div>
      </div>
    </div>
  );
};
