import React from 'react';

const CreateEvent = () => {
  return (

<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-4">
      <header className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Etkinlik Oluştur</h2>
      </header>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">

          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 text-sm font-medium mb-2">Başlık</label>
            <input type="text" id="title" name="title" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600 text-sm font-medium mb-2">Açıklama</label>
            <textarea id="description" name="description" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-600 text-sm font-medium mb-2">Tarih</label>
            <input type="date" id="date" name="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-600 text-sm font-medium mb-2">Yer</label>
            <input type="text" id="location" name="location" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
            <div>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                Etkinlik Oluştur
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default CreateEvent;
