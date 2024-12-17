import { useState, useEffect } from "react";
import { User } from "../types/User";

export const useGithub = (username: string, delay: number = 500) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [debouncedUsername, setDebouncedUsername] = useState<string>(username);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedUsername(username);
    }, delay);

    return () => clearTimeout(handler);
  }, [username, delay]);

  useEffect(() => {
    const fetchUser = async () => {
      if (!debouncedUsername) {
        setUser(null);
        setLoading(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${debouncedUsername}`
        );
        if (!response.ok) throw new Error("Usuário não encontrado");
        const data: User = await response.json();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [debouncedUsername]);

  return { user, loading, error };
};
