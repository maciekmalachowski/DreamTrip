import React from 'react';
import { CompassIcon } from 'lucide-react';
export const Header = () => {
  return <header className="bg-gradient-to-r from-green-900 via-green-800 to-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542332213-31f87348057f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <CompassIcon className="h-8 w-8 mr-2 text-amber-400" />
              <h1 className="text-3xl font-bold">DreamTrip</h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Your Perfect Trip Awaits
            </h2>
            <p className="text-xl md:text-2xl text-amber-100 max-w-lg">
              AI-powered travel planner that creates personalized itineraries
              and optimizes your trips effortlessly.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" alt="Travel planning" className="w-full h-auto rounded-lg shadow-lg transform -rotate-2 border-4 border-amber-400/20" />
          </div>
        </div>
      </div>
    </header>;
};