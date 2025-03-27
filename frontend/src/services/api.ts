import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL
});

// Function to send a trip planning request
export const planTrip = async (formData: any) => {
  try {
    // Convert startDate and endDate to YYYY-MM-DD format
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

    // Calculate date range in days
    const start = new Date(formData.startDate).getTime();
    const end = new Date(formData.endDate).getTime();
    const dateRange = Math.floor((end - start) / (1000 * 60 * 60 * 24))+1; // Convert milliseconds to days

    const response = await api.post('/plan-trip', {
      destination: formData.destination,
      startDate: formatDate(formData.startDate), 
      endDate: formatDate(formData.endDate), 
      dateRange: dateRange,
      budget: formData.budget,
      travelerType: formData.travelerType,
    });
    
    return response.data;
    
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      throw new Error(error.response?.data?.error || 'Failed to generate a trip');
    }
    console.error(error);
    throw error;
  }
};
