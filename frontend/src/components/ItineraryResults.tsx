import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MapPinIcon, UsersIcon, DollarSignIcon } from 'lucide-react';

export const ItineraryResults = ({ itinerary, destination, travelerType, budget }: { 
  itinerary: string;
  destination: string;
  travelerType: string;
  budget: number;
}) => {
  // Store fixed values when itinerary is received
  const [destinationConst, setDestinationConst] = useState(destination);
  const [travelerTypeConst, setTravelerTypeConst] = useState(travelerType);
  const [budgetConst, setBudgetConst] = useState(budget);

  useEffect(() => {
    // Update constants only when a new itinerary is received
    if (itinerary) {
      setDestinationConst(destination);
      setTravelerTypeConst(travelerType);
      setBudgetConst(budget);
    }
  }, [itinerary]); // Run only when itinerary changes
  
  const cleanMarkdown = itinerary.replace(/```(markdown|html)?/g, "").trim();
  return (
    <div className="mt-8 animate-fade-in">
      {/* Itinerary Header */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6 border border-green-900/10">
        <h2 className="text-2xl font-bold mb-4 text-green-900">
          Your Personalized Itinerary for {destinationConst}
        </h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <MapPinIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">{destinationConst}</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <UsersIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">{travelerTypeConst}</span>
          </div>
          <div className="flex items-center bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <DollarSignIcon className="h-4 w-4 text-green-700 mr-2" />
            <span className="text-green-800">Budget: ${budgetConst}</span>
          </div>
        </div>

        {/* Itinerary Content */}
        <div className="border-t border-green-100 pt-6">
          <div className="whitespace-pre-wrap text-md bg-green-50/50 p-6 rounded-lg overflow-auto max-h-[60vh] text-green-900">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-3 mb-1" {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-lg font-medium mt-2 mb-1" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside ml-4" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside ml-4" {...props} />,
              li: ({ node, ...props }) => <li className="" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
              em: ({ node, ...props }) => <em className="italic" {...props} />,
              p: ({ node, ...props }) => <p className="mb-2" {...props} />,
              a: ({ node, ...props }) => (
                <a className="text-blue-600 hover:underline" target="_blank" {...props} />
              ),
            }}
          >{cleanMarkdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};
