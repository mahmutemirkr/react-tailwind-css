import React from 'react';

const EventsList = () => {
  return (

    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Etkinlikler</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover object-center" src="src/assets/img.png" alt="img" />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold text-gray-800">Title</h2>
              <p className="text-sm text-gray-600 mt-2">Tarih</p>
              <p className="text-sm text-gray-600 mt-2">Yer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
