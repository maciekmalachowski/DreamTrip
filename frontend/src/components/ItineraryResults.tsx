import React from 'react';
import { ItineraryCard } from './ItineraryCard';
import { MapPinIcon, UsersIcon, DollarSignIcon } from 'lucide-react';
export const ItineraryResults = ({
  itinerary
}) => {
  return <div className="mt-8 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6 border border-green-900/10">
        <h2 className="text-2xl font-bold mb-4 text-green-900">
          Your Personalized Itinerary for {itinerary.destination}
        </h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <MapPinIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">{itinerary.destination}</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <UsersIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">{itinerary.travelerType}</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <DollarSignIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">Budget: ${itinerary.budget}</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 border-t border-green-100">
          <span className="text-lg font-semibold text-green-800">
            Total Expedition Cost
          </span>
          <span className="text-xl font-bold text-amber-700">
            ${itinerary.totalCost}
          </span>
        </div>
      </div>
      <div className="space-y-6">
        {itinerary.days.map(day => <ItineraryCard key={day.day} day={day} />)}
      </div>
    </div>;
};