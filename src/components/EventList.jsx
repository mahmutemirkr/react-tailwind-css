import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventsList = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([
    { date: '2024-03-03', title: 'Etkinlik 1' },
    { date: '2024-03-10', title: 'Etkinlik 2' },
    // Diğer etkinlikler buraya eklenebilir
  ]);

  const renderEvents = () => {
    const filteredEvents = events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === selectedDate.toDateString();
    });

    return filteredEvents.map((event, index) => (
      <div key={index} className="p-2 bg-indigo-200 rounded-md my-1">
        <p className="text-sm">{event.title}</p>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Takvim</h2>
        <div className="flex justify-center items-center mb-4">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day, index) => (
            <div key={index} className="p-2 border border-gray-300">
              {day}
            </div>
          ))}
          {[...Array(31)].map((_, index) => (
            <div key={index} className="p-2 border border-gray-300">
              {index + 1}
              {events.some(event => {
                const eventDate = new Date(event.date);
                return eventDate.getDate() === index + 1;
              }) && <div className="mt-1">{renderEvents()}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
