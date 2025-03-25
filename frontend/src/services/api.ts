import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL
});

// Function to send a trip planning request
export const planTrip = async (formData: any) => {
  try {
    const response = await api.post('/plan-trip', {
      destination: formData.destination,
      startDate: formData.startDate, // Convert to YYYY-MM-DD
      endDate: formData.endDate, // Convert to YYYY-MM-DD
      dateRange: formData.endDate - formData.startDate,
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
