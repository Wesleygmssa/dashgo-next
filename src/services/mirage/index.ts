<<<<<<< HEAD
<<<<<<< HEAD
import { createServer, Factory, Model } from 'miragejs'
import faker from "faker";

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer(){
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },
        factories: {
            //Dados fake
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
        seeds(server){
            server.createList("user", 20);
        },
        routes(){
            this.namespace = 'api';
            this.timing = 750;

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}

//CRUD
=======
import { createServer, Factory, Model, Response } from "miragejs";
import faker from "faker"; //Dados fakes
//formatos dos dados
=======
import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";

import faker from "faker";

>>>>>>> featured-dev
type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
          // return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 2);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        /*
         Ex: page = 3, per_page = 15.
         pageStart = 30 ou 2*15 ou (Number(page) - 1) * Number(per_page);
         pageEnd = 45 ou 30+15 ou pageStart + Number(per_page);
         vai do registro 30 ao 45
        */

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
<<<<<<< HEAD

/***
 * Necessario configurar e chamar a fun????o no arquivo _app.tsx
 * */
>>>>>>> 76e275f674214e86fc602fa9fc810f580dc2e8a3
=======
>>>>>>> featured-dev
