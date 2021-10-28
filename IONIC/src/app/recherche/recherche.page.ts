import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/compat/database';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { RechercheService } from '../recherche.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  public userList: any;
  public search: any;
  constructor(private db: AngularFireDatabase,
    private recherche: RechercheService) {
    this.userList = this.recherche.getUserList();
   }

  ngOnInit() {
  }

}










