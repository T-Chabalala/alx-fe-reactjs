import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = token
  ? { Authorization: `token ${token}` }
  : {};

export const searchGitHubUsers = async (username, location, minRepos) => {
  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10`;

  const response = await axios.get(url, { headers });
  return response.data;
};