// api.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

// Function to handle GET requests
export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to handle POST requests
export const postData = async (endpoint: string, body: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, body);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
