import React, { useState } from 'react';
import { Header } from './components/Header';
import { TravelForm } from './components/TravelForm';
import { ItineraryResults } from './components/ItineraryResults';
import { LoadingIndicator } from './components/LoadingIndicator';
import { planTrip } from './services/api';

export function App() {
  const [formData, setFormData] = useState({
    startDate: new Date() as Date | null,
    endDate: new Date(new Date().setDate(new Date().getDate() + 7)) as Date | null,
    destination: '',
    travelerType: 'Solo',
    budget: 1000
  });

  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormChange = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };  

  const generatePlan = async () => {
    setLoading(true);
    setError(null);
    try {
      const tripPlan = await planTrip(formData);
      setItinerary(tripPlan.response);
    } catch (err) {
      setError("Failed to generate trip plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50/30">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TravelForm formData={formData} onChange={handleFormChange} onSubmit={generatePlan} />
        {loading && <LoadingIndicator />}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && itinerary && <ItineraryResults itinerary={itinerary} destination={formData.destination} travelerType={formData.travelerType} budget={formData.budget}/>}
      </main>
    </div>
  );
}
