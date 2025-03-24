import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, CalendarIcon } from 'lucide-react';
export const ItineraryCard = ({
  day
}) => {
  const [expanded, setExpanded] = useState(false);
  const dateOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = day.date.toLocaleDateString('en-US', dateOptions);
  return <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-green-900/10
        ${expanded ? 'shadow-lg' : 'hover:shadow-lg'}`}>
      <div className="px-6 py-4 flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-green-800 to-amber-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
            {day.day}
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-900">Day {day.day}</h3>
            <div className="flex items-center text-sm text-green-700">
              <CalendarIcon className="h-3 w-3 mr-1" />
              {formattedDate}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-amber-700 mr-4">
            ${day.totalCost}
          </span>
          {expanded ? <ChevronUpIcon className="h-5 w-5 text-green-700" /> : <ChevronDownIcon className="h-5 w-5 text-green-700" />}
        </div>
      </div>
      {expanded && <div className="px-6 py-4 border-t border-green-100 animate-fade-in">
          <div className="space-y-4">
            {day.activities.map((activity, index) => <div key={index} className="flex">
                <div className="w-24 flex-shrink-0 text-sm font-medium text-green-700">
                  {activity.time}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-green-900">{activity.description}</p>
                    <span className="text-sm font-medium text-amber-700">
                      ${activity.cost}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>}
    </div>;
};