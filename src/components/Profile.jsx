import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden flex">
          <img className="w-32 h-auto" src="src/assets/profil.png" alt="User Avatar" />
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Ad Soyad</h2>
            <p className="text-gray-600">Email</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="max-w-md">
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Genel Bilgiler</h2>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">Ad Soyad:</label>
                <p className="text-gray-800 text-sm">Test Test</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">Email:</label>
                <p className="text-gray-800 text-sm">test@test.com</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">Telefon:</label>
                <p className="text-gray-800 text-sm">05555555555</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-2">Doğum Tarihi:</label>
                <p className="text-gray-800 text-sm">01/01/20</p>
              </div>
              {/* Diğer genel bilgiler */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
