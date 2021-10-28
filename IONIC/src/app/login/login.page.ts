import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LOGINPage implements OnInit {

  constructor(private auth: AngularFireAuth,
    private route: Router) { }

  ngOnInit() {
  }
recupData(recup){
  this.auth.signInWithEmailAndPassword(
    recup.value.mail, recup.value.password
  ).then((result)=>{
    if (result){
      this.route.navigateByUrl('/home');
    }
  }
  );
}


}
