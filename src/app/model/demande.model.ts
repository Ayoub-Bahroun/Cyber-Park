import { demandeur } from "./demandeur.model"

export interface demande{
   id:number
   nomEntreprise:string
   ideeProjet:string
   mailEntreprise:string
   service:string
   demandeur:demandeur
}