import React, { useState } from 'react';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [detail, setDetail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [document, setDocument] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-4">
      <header className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Etkinlik Oluştur</h2>
      </header>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-600 text-sm font-medium mb-2">Başlık</label>
              <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-600 text-sm font-medium mb-2">Açıklama</label>
              <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="detail" className="block text-gray-600 text-sm font-medium mb-2">Detay</label>
              <textarea id="detail" name="detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="startDate" className="block text-gray-600 text-sm font-medium mb-2">Başlangıç Zamanı</label>
                <input type="datetime-local" id="startDate" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="endDate" className="block text-gray-600 text-sm font-medium mb-2">Bitiş Zamanı</label>
                <input type="datetime-local" id="endDate" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-600 text-sm font-medium mb-2">Lokasyon</label>
              <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-600 text-sm font-medium mb-2">Etiketler</label>
              <input type="text" id="tags" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-600 text-sm font-medium mb-2">Görsel</label>
              <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} accept="image/*" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="video" className="block text-gray-600 text-sm font-medium mb-2">Video</label>
              <input type="file" id="video" name="video" onChange={(e) => setVideo(e.target.files[0])} accept="video/*" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="document" className="block text-gray-600 text-sm font-medium mb-2">Doküman</label>
              <input type="file" id="document" name="document" onChange={(e) => setDocument(e.target.files[0])} accept=".pdf,.doc,.docx" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
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
