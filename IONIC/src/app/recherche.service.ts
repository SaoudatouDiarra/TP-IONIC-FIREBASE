import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  public userList: any;
  search: any;

  constructor(private db: AngularFireDatabase) { }

  getUserList(){
    this.db.list('/users').valueChanges().subscribe(
      (result)=>{
        this.userList = result;
      }
    );
    return this.userList;
  }

}
