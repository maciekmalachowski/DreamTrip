import React from 'react';
import ReactMarkdown from 'react-markdown';
import { MapPinIcon, UsersIcon, DollarSignIcon } from 'lucide-react';

export const ItineraryResults = ({ itinerary, destination, travelerType, budget }: { 
  itinerary: string;
  destination: string;
  travelerType: string;
  budget: number;
}) => {
  return (
    <div className="mt-8 animate-fade-in">
      {/* Itinerary Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6 border border-green-900/10">
        <h2 className="text-2xl font-bold mb-4 text-green-900">
          Your Personalized Itinerary for {destination}
        </h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <MapPinIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">{destination}</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <UsersIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">{travelerType}</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <DollarSignIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">Budget: ${budget}</span>
          </div>
        </div>

        {/* Itinerary Content */}
        <div className="border-t border-green-100 pt-6">
          <div className="whitespace-pre-wrap font-mono text-md bg-green-50/50 p-6 rounded-lg overflow-auto max-h-[60vh] text-green-900">
            <ReactMarkdown>{itinerary}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
