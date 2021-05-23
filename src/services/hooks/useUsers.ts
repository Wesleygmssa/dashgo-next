import { useQuery } from "react-query";
import { api } from "../api";

export async function getUsers() {
  const { data } = await api.get("users"); // chamanda api

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5,
  });
}

/* Chamada ao bando de dados... retornando todos usuários */
