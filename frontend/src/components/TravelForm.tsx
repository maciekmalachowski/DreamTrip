import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon, UsersIcon, MapPinIcon, DollarSignIcon, PlaneTakeoffIcon } from 'lucide-react';

interface TravelFormProps {
  formData: {
    startDate: Date | null;
    endDate: Date | null;
    destination: string;
    travelerType: string;
    budget: number;
  };
  onChange: (updatedData: Partial<TravelFormProps["formData"]>) => void;
  onSubmit: () => void;
}

export const TravelForm: React.FC<TravelFormProps> = ({ formData, onChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-10 transform transition-all duration-300 hover:shadow-xl border border-green-900/10">
      <h3 className="text-2xl font-bold mb-6 text-green-900">
        Plan Your Dream Trip
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2 text-green-700" />
                Start Date
              </div>
            </label>
            <DatePicker selected={formData.startDate} onChange={date => onChange({
            startDate: date
          })} className="w-full p-3 border border-green-200 rounded-md focus:ring-green-500 focus:border-green-500" minDate={new Date()} dateFormat="dd/MM/yyyy" />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2 text-green-700" />
                End Date
              </div>
            </label>
            <DatePicker selected={formData.endDate} onChange={date => onChange({
            endDate: date
          })} className="w-full p-3 border border-green-200 rounded-md focus:ring-green-500 focus:border-green-500" minDate={formData.startDate || new Date()} dateFormat="dd/MM/yyyy" />
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-green-700" />
                Destination
              </div>
            </label>
            <input type="text" value={formData.destination} onChange={e => onChange({
            destination: e.target.value
          })} placeholder="Amazon, Costa Rica, Bali..." className="w-full p-3 border border-green-200 rounded-md focus:ring-green-500 focus:border-green-500" required />
          </div>

          {/* Traveler Type */}
          <div>
            <label className="block text-sm font-medium text-green-800 mb-1">
              <div className="flex items-center">
                <UsersIcon className="h-4 w-4 mr-2 text-green-700" />
                Traveler Type
              </div>
            </label>
            <select value={formData.travelerType} onChange={e => onChange({
            travelerType: e.target.value
          })} className="w-full p-3 border border-green-200 rounded-md focus:ring-green-500 focus:border-green-500">
              <option value="Solo">Solo Explorer</option>
              <option value="Couple">Adventure Couple</option>
              <option value="Family">Family Expedition</option>
              <option value="Friends">Group Trek</option>
            </select>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-green-800 mb-1">
            <div className="flex items-center">
              <DollarSignIcon className="h-4 w-4 mr-2 text-green-700" />
              Adventure Budget Per Person (${formData.budget})
            </div>
          </label>
          <input type="range" min="100" max="5000" step="100" value={formData.budget} onChange={e => onChange({
          budget: parseInt(e.target.value)
        })} className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between text-xs text-green-700 mt-1">
            <span>$100</span>
            <span>$5,000</span>
          </div>
        </div>
        {/* Submit Button */}
        <button type="submit" className="w-full bg-gradient-to-r from-green-800 to-amber-700 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
          <PlaneTakeoffIcon className="h-5 w-5 mr-2" />
          Create My Itinerary
        </button>
      </form>
    </div>;
};