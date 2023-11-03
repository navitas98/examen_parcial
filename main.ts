import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";



import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { Request, Response } from "npm:express@4.18.2";

import deleteMonumento from "./resolvers/deleteMonumento.ts";
import nuevo_monumento from "./resolvers/addMonumento.ts";
import get_monumentos from "./resolvers/getMolumentos.ts";
const env = await load();
//const MONGO_URL = env.MONGO_URL;
/*if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}*/
await mongoose.connect("mongodb+srv://javier:javier@nebrija.awzbgfs.mongodb.net/?retryWrites=true&w=majority");
const app = express();
app.use(express.json());
app
  .get("/", (req:Request, res:Response) => {
    res.send("conectado");
  })
  .get("/api/monumentos",get_monumentos)
  .post("/api/monumentos",nuevo_monumento)
  .delete("/api/monumentos/:id", deleteMonumento)
  //.put("/api/tierramedia/personajes/:id",updatePersonaje)
 

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
