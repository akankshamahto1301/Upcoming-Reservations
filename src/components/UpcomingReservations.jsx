import React from 'react';
import { ReservationCard } from './ReservationCard';
import toast from 'react-hot-toast';

const reservationsData = [
  { 
    id: 1, 
    venueName: "The Grand Cafe", 
    imageUrl: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-08-15", 
    time: "19:00", 
    partySize: 2, 
    status: "Confirmed" 
  },
  { 
    id: 2, 
    venueName: "Ocean's Breeze", 
    imageUrl: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-08-22", 
    time: "20:30", 
    partySize: 4, 
    status: "Confirmed" 
  },
  { 
    id: 3, 
    venueName: "The Rooftop Grill", 
    imageUrl: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "2024-09-01", 
    time: "18:00", 
    partySize: 5, 
    status: "Pending" 
  }
];

export const UpcomingReservations = () => {
  const handleCancelReservation = (id) => {
    toast.success(`Reservation ${id} cancelled`);
    console.log("Cancel reservation:", id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Upcoming Reservations
        </h1>
        
      </div>

      {reservationsData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No upcoming reservations found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reservationsData.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              onCancel={handleCancelReservation}
            />
          ))}
        </div>
      )}
    </div>
  );
};