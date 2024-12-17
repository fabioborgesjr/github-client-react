import { User } from "./User";

export interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: User;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  open_issues_count: number;
  default_branch: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}
