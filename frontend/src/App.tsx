import React, { useState } from 'react';
import { Header } from './components/Header';
import { TravelForm } from './components/TravelForm';
import { ItineraryResults } from './components/ItineraryResults';
import { LoadingIndicator } from './components/LoadingIndicator';

export function App() {
  const [formData, setFormData] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    destination: '',
    travelerType: 'Solo',
    budget: 1000
  });
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const handleFormChange = newData => {
    setFormData({
      ...formData,
      ...newData
    });
  };
  const generatePlan = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const days = [];
      const dayCount = Math.floor((formData.endDate - formData.startDate) / (1000 * 60 * 60 * 24)) + 1;
      for (let i = 0; i < dayCount; i++) {
        const date = new Date(formData.startDate);
        date.setDate(date.getDate() + i);
        days.push({
          day: i + 1,
          date: date,
          activities: [{
            time: '09:00 AM',
            description: 'Breakfast at local café',
            cost: 15
          }, {
            time: '10:30 AM',
            description: 'Visit to historical landmark',
            cost: 25
          }, {
            time: '01:00 PM',
            description: 'Lunch at popular restaurant',
            cost: 30
          }, {
            time: '03:00 PM',
            description: 'Outdoor adventure activity',
            cost: 45
          }, {
            time: '07:00 PM',
            description: 'Dinner with local cuisine',
            cost: 40
          }],
          totalCost: 155
        });
      }
      setItinerary({
        destination: formData.destination,
        travelerType: formData.travelerType,
        budget: formData.budget,
        days: days,
        totalCost: 155 * days.length
      });
      setLoading(false);
    }, 2000);
  };
  return <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TravelForm formData={formData} onChange={handleFormChange} onSubmit={generatePlan} />
        {loading && <LoadingIndicator />}
        {!loading && itinerary && <ItineraryResults itinerary={itinerary} />}
      </main>
    </div>;
}