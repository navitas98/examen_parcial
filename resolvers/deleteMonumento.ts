import { Request, Response } from "npm:express@4.18.2";
import MolumentoModel from "../db/monumentos.ts"
const deleteMonumento = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const monumento = await MolumentoModel.findOneAndDelete({ _id:id }).exec();
    if (!monumento) {
      res.status(404).send("Monumnnto no encontrado");
      return;
    }
    res.status(200).send("Monumento borrado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export default deleteMonumento;
