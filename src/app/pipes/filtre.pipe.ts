import { Pipe, PipeTransform } from '@angular/core';
import { Etudiant } from '../models/etudiant.model';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: Array<Etudiant>, ...args: any[]): Array<Etudiant> {
    return value.filter(etudiant => etudiant.nom.includes(args[0]));
  }

}
