# Leçon 42 Angular

## [API nestjs avec une base de données mongodb](https://github.com/nestjs/ng-universal)

### [documentation officielle](https://docs.nestjs.com/cli/overview)

Installation du cli

``` console
npm i -g @nestjs/cli

```

### setup projet

``` console
nest new nom-projet && nom-projet #creation projet
nest generate mo etudiants #generation module
nest generate co etudiants #generation controller
nest generate s etudiants #generation service
npm i -S @nestjs/mongoose mongoose # installation des api pour mongdb
```

### Le module parent

``` typescript
import { Module } from  '@nestjs/common';
import { AppController } from  './app.controller';
import { AppService } from  './app.service';
import { EtudiantsModule } from  './etudiants/etudiants.module';
import { MongooseModule } from  '@nestjs/mongoose';

@Module({
	imports: [
		EtudiantsModule,
		MongooseModule.forRoot('mongodb+srv://admin:graytchad@cluster0.vszkf.mongodb.net/etudiants?retryWrites=true&w=majority')
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
```

### model

``` typescript
import * as mongoose from  'mongoose';
export const etudiantSchema = new mongoose.Schema({
	nom: { type:  String, required:  true },
	prenom1:  String,
	prenom2:  String,
	age:  Number,
	dateNaissance:  Date,
	fraisSubsistance:  Number,
	note:  Number
});

export interface Etudiant {
	nom: String;
	prenom1: String;
	prenom2: String;
	age: number;
	dateNaissance: Date;
	fraisSubsistance: number;
	note: number;
}

export  interface  EtudiantModel  extends  Etudiant, mongoose.Document { }
```

### module

``` typescript
import { Module } from  '@nestjs/common';
import { EtudiantsController } from  './etudiants.controller';
import { EtudiantsService } from  './etudiants.service';
import { MongooseModule } from  '@nestjs/mongoose';
import { etudiantSchema } from  './etudiant.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name:  'etudiants', schema:  etudiantSchema }
		])
	],
	controllers: [EtudiantsController],
	providers: [EtudiantsService]
})
export  class  EtudiantsModule { }
```

### controller

``` typescript
import { Controller, Get, Param, Post, Body, Put, Delete } from  '@nestjs/common';
import { EtudiantsService } from  './etudiants.service';
@Controller('etudiants')

export class EtudiantsController {
	constructor(private readonly etudiantService: EtudiantsService) { }

	@Get()
	getEtudiants() {
		return this.etudiantService.getEtudiants();
	}

	@Get(':id')
	getOneEtudiants(@Param('id') id) {
		return  this.etudiantService.getOneEtudiants(id);
	}

	@Post()
	createEtudiant(@Body() etudiant) {
		return  this.etudiantService.createEtudiant(etudiant);
	}

	@Put(':id')
	async mettreAjourEtudiant(@Param('id') id, @Body() etudiant) {
		return  this.etudiantService.mettreAjourEtudiant(id, etudiant);
	}

	@Delete(':id')
	supprimerEtudiant(@Param('id') id: string) {
		return this.etudiantService.supprimerEtudiant(id);
	}
}
```

### Service

``` typescript
import { Injectable } from  '@nestjs/common';
import { EtudiantModel } from  './etudiant.model';
import { Model } from  'mongoose';
import { InjectModel } from  '@nestjs/mongoose';
  
@Injectable()
export class EtudiantsService {

	constructor(@InjectModel('etudiants') private  readonly  etudiantModel: Model<EtudiantModel>) { }

	async getEtudiants() {
		const  etudiants = await  this.etudiantModel.find().exec();
		return  etudiants;
	}

	getOneEtudiants(id) {
		// return  this.etudiantModel.findById(id);
		return  this.etudiantModel.findOne({ _id:  id })
	}

	async createEtudiant(etudiant) {
		const etudiantModel = new  this.etudiantModel({
			nom:  etudiant.nom,
			prenom1:  etudiant.prenom1,
			prenom2:  etudiant.prenom2,
			age:  etudiant.age,
			dateNaissance:  etudiant.dateNaissance,
			fraisSubsistance:  etudiant.fraisSubsistance,
			note:  etudiant.note,
		});
		const etudiantCree = await  etudiantModel.save();
		return etudiantCree;
	}

	async mettreAjourEtudiant(id, etudiant) {
		const etudiantmodifie = await  this.etudiantModel.findByIdAndUpdate(id, etudiant);
		return  etudiantmodifie;

	}

	supprimerEtudiant(id) {
		return  this.etudiantModel.delete(id)
	}
}
```

### demarrage

``` console
npm run start:dev
```
