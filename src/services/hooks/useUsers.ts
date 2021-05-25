import { StringifyOptions } from "node:querystring";
import { useQuery } from "react-query";
import { string } from "yup/lib/locale";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(page: number): Promise<User[]> {
  const { data } = await api.get("users",{
    params:{
      page,
    }
  }); // chamanda api

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

export function useUsers(page: number) {
  return useQuery("users", () => getUsers(page), {
    staleTime: 1000 * 5,
  });
}

/* Chamada ao bando de dados... retornando todos usuários */
