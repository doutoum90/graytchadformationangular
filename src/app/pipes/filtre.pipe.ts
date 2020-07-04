import { Pipe, PipeTransform } from '@angular/core';
import { Etudiant } from '../comps/lalekou/lalekou.component';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: Array<Etudiant>, ...args: any[]): Array<Etudiant> {
    return value.filter(etudiant => etudiant.nom.includes(args[0]));
  }

}
