# Leçon 41 Angular

## [Backend avec nestjs](https://github.com/nestjs/ng-universal)

### [documentation officielle](https://docs.nestjs.com/cli/overview)

Installation du cli

``` console
npm i -g @nestjs/cli
```

``` console
ng add @nestjs/ng-universal
```

``` console
nest generate controller etudiants
```

``` typescript
import { Controller, Get } from  '@nestjs/common';
@Controller('etudiants')
export class EtudiantsController {
	etudiants = [];

	@Get()
	getEtudiants() {
		return this.etudiants;
	}
	
	@Get(':id')
	getOneEtudiants(@Param('id') id) {
		return  this.etudiants.find(etudiant  =>  etudiant.id === Number(id));
	}

	@Post()
	createEtudiant(@Body() etudiant) {
		this.etudiants.push(etudiant);
		return  etudiant;
	}
	
	@Put(':id')
	async  mettreAjourEtudiant(@Param('id') id, @Body() etudiant) {
		const  indexEtudiantTrouve = await  this.etudiants.findIndex(etudiant  =>  etudiant.id === id);
		if (indexEtudiantTrouve === -1)
			throw ('Etudiant Non trouvé');
		else
			this.etudiants[indexEtudiantTrouve] = etudiant;
		return  this.etudiants[indexEtudiantTrouve];
	}
}
```
