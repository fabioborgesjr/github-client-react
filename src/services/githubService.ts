import {
  fetchUserDetails,
  fetchUserRepos,
  fetchRepoDetails,
} from "../api/github";

export const getUserDetails = async (username: string) => {
  const { data } = await fetchUserDetails(username);
  return data;
};

export const getUserRepos = async (username: string) => {
  const { data } = await fetchUserRepos(username);
  return data;
};

export const getRepoDetails = async (fullName: string) => {
  const { data } = await fetchRepoDetails(fullName);
  return data;
};
