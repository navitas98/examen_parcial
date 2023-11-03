import mongoose from "npm:mongoose@7.6.3";
import { Monumentos } from "../types.ts";

const Schema = mongoose.Schema;
const monumentosSchema = new Schema(
  {
    nombre: { type: String, required: true, unique:false },
    descripcion: { type: String, required: true, unique:false },
    codigo_postal: { type: Number, required: true, unique:false },
    ciudad:{type:String, requiered:true,unique:false},
    pais:{type:String,rquiered:true,unique:false},
    continente:{type:String,requiered:true,unique:false},
    hora_actual:{type:String,requiered:true,unique:false},
    condiciones_meteorologicas:{type:String,requiered:true,unique:false},
    codigoISO:{type:String,requiered:true,unique:false}
  },
  { timestamps: true }
);

export type MonumentosModelType = mongoose.Document & Omit<Monumentos, "id">;

export default mongoose.model<MonumentosModelType>("monumentos ", monumentosSchema);
