import { Request, Response } from "npm:express@4.18.2";
import MolumnetoModel from "../db/monumentos.ts"
const get_monumentos = async (req: Request, res: Response) => {
  try {
    const monumentos = await MolumnetoModel.find().exec();

    if (!monumentos || monumentos.length === 0) {
      res.status(404).send("Monumnetos");
      return;
    }

    const personajesJSON = monumentos.map((m) => ({
      nombre: m.nombre,
      pais:m.codigoISO,
      id:m._id.toString()
    }));

    res.status(200).json(personajesJSON);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default get_monumentos;
