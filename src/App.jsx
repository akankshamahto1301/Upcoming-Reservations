import React from 'react';
import { UpcomingReservations } from './components/UpcomingReservations';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <UpcomingReservations />
      </div>
    </div>
  );
}

export default App;