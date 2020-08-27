# Leçon 46 Angular
## Firebase store

```console
npm  install -g firebase-tools
npm i firebase @angular/fire -S
```


```typescript
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const firebaseConfig = {...}
@NgModule({
	...
	imports: [
		AngularFireModule.initializeApp(config),
	    AngularFirestoreModule, // firestore
	    AngularFireAuthModule, // auth
	    AngularFireStorageModule // storage
	],
})
```
avec le fire
```typescript
import { AngularFirestore } from '@angular/fire/firestore';
@Component(...)
export class Component {

	 constructor(private db: AngularFirestore) {
	     const things = db.collection('things').valueChanges();
	     things.subscribe(console.log);
	 }
	getdata(){
		// this.firestore.collection("coffeeOrders").snapshotChanges();
		return this.db.collection('things').valueChanges();
	}
	delete(id){
		this.db
		  .collection("things")  
		  .doc(id)  
		  .delete();
	}
	update(id, data){
	  this.firestore  
	  .collection("things")  
	  .doc(id)  
	  .set(data);
	}
	create(data){
	  this.firestore  
	  .collection("things")  
	  .add(data)
	}
}
```

avec le db

```typescript
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component(...)
export class Component {
  datasRef: AngularFireList<any>;
  dataRef: AngularFireObject<any>;
  
constructor(private db: AngularFireDatabase) {}
  AddData(data) {
    this.datasRef.push({ ... });
  }

  GetBook(id: string) {
    this.dataRef = this.db.object('things/' + id);
    return this.dataRef;
  }  

  /* Get book list */
  GetBookList() {
    this.datasRef = this.db.list('things');
    return this.datasRef;
  }

  /* Update book */
  UpdateBook(id, data) {
	  this.dataRef = this.db.object('things/' + id);
    this.bookRef.update({ ... data});
  }

  /* Delete book */
  DeleteBook(id: string) {
    this.dataRef = this.db.object('things/' + id);
    this.dataRef.remove();
  }

}
```