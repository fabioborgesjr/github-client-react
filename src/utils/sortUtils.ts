import { Repository } from "@/types/Repository";

export const sortByStars = (repos: Repository[]) =>
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
