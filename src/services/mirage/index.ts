import { createServer, Factory, Model } from "miragejs";
import faker from "faker"; //Dados fakes
//formatos dos dados
type User = {
  name: String;
  email: String;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    //Dados fakes
    factories: {
      user: Factory.extend({
        name(i: number) {
          //   return `User ${i + 1}`;
          return faker.internet.userName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },
    //Salvando dados fake no banco de dados
    seeds(server) {
      server.createList("user", 10);
    },
    //rotas fake para conexão api
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}

/***
 * Necessario configurar e chamar a função no arquivo _app.tsx
 * */
