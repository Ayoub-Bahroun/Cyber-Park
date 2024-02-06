import { demande } from "./demande.model"
import { entreprise } from "./entreprise.model"

export interface cv{
    id:any
    name:string
    type:string
    picbyte:string
    demande:demande
    entreprise:entreprise   
}