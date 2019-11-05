import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ColectionService {

  constructor(private firestoreService: AngularFirestore) { }

  getItems(coleccion: string) {
      return this.firestoreService.collection(coleccion).snapshotChanges();
  }
}
