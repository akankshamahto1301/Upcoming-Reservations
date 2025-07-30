import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export const ReservationCard = ({ reservation, onCancel }) => {
  const { id, venueName, imageUrl, date, time, partySize, status } = reservation;

  // Format the date for better display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Format time for better display
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getStatusBadge = (status) => {
    const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium";
    
    switch (status.toLowerCase()) {
      case 'confirmed':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'pending':
        return `${baseClasses} bg-amber-100 text-amber-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Venue Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={venueName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={getStatusBadge(status)}>{status}</span>
        </div>
        <button
          onClick={() => onCancel(id)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500 hover:bg-white transition-all duration-200 p-2 rounded-full shadow-md"
          aria-label="Cancel reservation"
        >
          <span className="text-2xl font-bold">×</span>
        </button>
      </div>

      {/* Status Header */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {venueName}
        </h3>
      </div>

      {/* Reservation Details */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3 text-gray-600">
          <Calendar className="w-5 h-5 text-blue-500" />
          <span className="font-medium">{formatDate(date)}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-600">
          <Clock className="w-5 h-5 text-blue-500" />
          <span className="font-medium">{formatTime(time)}</span>
        </div>

        <div className="flex items-center space-x-3 text-gray-600">
          <Users className="w-5 h-5 text-blue-500" />
          <span className="font-medium">
            {partySize} {partySize === 1 ? "Guest" : "Guests"}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={() => onCancel(id)}
            className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Cancel Reservation
          </button>
        </div>
      </div>
    </div>
  );
};