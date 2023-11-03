import { Request, Response } from "npm:express@4.18.2";

import MonumentoModel from "../db/monumentos.ts"
const nuevo_monumento = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, codigo_postal, codigoIso } = req.body;
    if (!nombre || !descripcion|| !codigo_postal||!codigoIso ){
      res.status(500).send("Los campos nombre, descripcion y codigo postal, codigo ISo son campos requeridos");
      return;
    }

    const alreadyExists = await MonumentoModel.findOne({ nombre, codigo_postal }).exec();
    if (alreadyExists) {
      res.status(400).send("El monumento ya existe");
      return;
    }

    const newMonumento = new MonumentoModel({ nombre,descripcion, codigo_postal });
    await newMonumento.save();

    res.status(200).send({
      nombre: newMonumento.nombre,
      raza: newMonumento.descricpcion,
      codigo_postal: newMonumento.codigo_postal,
      
      id: newMonumento._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

export default nuevo_monumento;
