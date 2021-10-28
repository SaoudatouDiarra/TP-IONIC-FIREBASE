import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireList } from '@angular/fire/compat/database';
import { observable } from 'rxjs';
import { RechercheService } from '../recherche.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userList: any;

  constructor(private db: AngularFireDatabase,
    private recherche: RechercheService) {
    this.userList = this.recherche.getUserList();
  }
}
