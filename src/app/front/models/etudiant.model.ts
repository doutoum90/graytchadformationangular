import { Identite } from './identite.model';
export interface Etudiant {
    id?: number;
    nom: String;
    prenom?: Identite;
    age: number;
    dateNaissance: Date;
    fraisSubsistance: number;
    note: number;
}