import { createServer, Factory, Model, Response } from "miragejs";
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
      server.createList("user", 200);
    },
    //rotas fake para conexão api
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        //logica de páginação

        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;
        //10 - 20
        //exemplo               3 - 1 = 2 * 10 = 20
        const pageStart = (Number(page) - 1) * Number(per_page);
        // 20 + 10
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });
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
