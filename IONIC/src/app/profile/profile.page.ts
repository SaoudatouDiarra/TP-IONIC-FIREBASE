import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 nom: string;
 prenom: string;
 email: string;
 method: any;
  connected: boolean;
  constructor(private auth: AngularFireAuth) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    this.auth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
        this.email = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
   }

  ngOnInit() {
  }

}
