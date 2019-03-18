import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument, CollectionReference } from 'angularfire2/firestore';
import { Registro } from './model/registro';

@Injectable()
export class FirestoreDataService {

  registrocollection: AngularFirestoreCollection<Registro>;
  registrosDoc: AngularFirestoreDocument<Registro>;

  constructor(private firestore: AngularFirestore) {}

  public createRegistro(data: Registro, uid: string){
  	return  this.firestore.collection('registro').doc(uid).set(data);
  }

  public getRegistro(uid: string){
  	return this.registrocollection.doc(uid).ref.get();
  }

  public updateRegistro(uid: string, doc: Registro){
    return this.registrocollection.doc(uid).update(doc);
  }

  public deleteRegistro(uid: string){
    return this.registrocollection.doc(uid).delete();
  }

}
