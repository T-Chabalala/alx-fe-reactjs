import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = token
  ? { Authorization: `token ${token}` }
  : {};

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(
        
      `https://github.com/T-Chabalala/alx-fe-reactjs.git{username}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
      throw error;
    }
  };