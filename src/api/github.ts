import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export const fetchUserDetails = (username: string) =>
  api.get(`/users/${username}`);

export const fetchUserRepos = (username: string) =>
  api.get(`/users/${username}/repos`);

export const fetchRepoDetails = (fullName: string) =>
  api.get(`/repos/${fullName}`);
