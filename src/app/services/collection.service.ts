import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private firestoreService: AngularFirestore) { }

  getItems(coleccion: string) {
      return this.firestoreService.collection(coleccion).snapshotChanges();
  }

  addItems(coleccion: string, data: any) {
    this.firestoreService.collection(coleccion).add(data)
      .then(docRef => {
        return docRef.id;
      })
      .catch( error => {
        return error;
      });
  }
}
