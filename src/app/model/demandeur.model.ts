import { demande } from "./demande.model"

export interface demandeur
{
   id:number
   nom:string
   prenom:string
   cin:string
   tel:string
   mail:string
   demande:demande
}