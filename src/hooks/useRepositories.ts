import { useState, useEffect } from "react";
import { Repository } from "../types/Repository";

export const useRepositories = (
  username?: string,
  ownerAndRepoPath?: string
) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserRepos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) throw new Error("Repositórios não encontrados");
        const data: Repository[] = await response.json();
        setRepositories(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (username) fetchUserRepos();
  }, [username]);

  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/repos/${ownerAndRepoPath}`
        );
        if (!response.ok) throw new Error("Repositório não encontrado");
        const data = await response.json();
        setRepositories([data]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (ownerAndRepoPath) fetchRepo();
  }, [ownerAndRepoPath]);

  return { repositories, loading, error };
};
