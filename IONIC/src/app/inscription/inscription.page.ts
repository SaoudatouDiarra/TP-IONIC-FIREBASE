import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  constructor(
    private afdm: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
  }
  public signUp(data: any): void {
    this.auth.createUserWithEmailAndPassword(
      data.value.mail, data.value.password
    ).then((result)=>{
      this.afdm.list('users/').push(data.value);
    });

  }
}
