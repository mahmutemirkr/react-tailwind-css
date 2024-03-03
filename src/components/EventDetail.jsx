import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EventDetail = () => {

  const event = {
    id: 1,
    title: 'Etkinlik Detayı',
    description: 'Bu bir örnek etkinliktir.',
    location: 'Ankara, Türkiye', 
    date: '2024-03-10',
    startTime: '14:00',
    endTime: '16:00',
    
  };


  const { id } = useParams();

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6352252.721146542!2d29.84514769338753!3d38.9768396205632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1str!2str!4v1709489638291!5m2!1str!2str`;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">{event.title}</h1>
        <div className="bg-white shadow-md rounded-md p-6">
          <p className="text-lg font-semibold mb-4">{event.description}</p>
          <p className="text-sm text-gray-600 mb-2">
            Tarih: {event.date}, Saat: {event.startTime} - {event.endTime}
          </p>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            Konum: {event.location}
          </p>
          <div className="mt-4 h-80">
            {/* Google Maps */}
            <iframe
              title="event-location-map"
              width="100%"
              height="100%"
              src={mapUrl}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
