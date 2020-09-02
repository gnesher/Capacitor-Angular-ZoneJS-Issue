import { Component, NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public status = 'initial';

  constructor(zone: NgZone) {
    let handler = Network.addListener('networkStatusChange', (status) => {
      console.log('status changed', status)
      // this will show up on console, but won't change the ui
      this.status = status.connected ? 'Online' : 'Offline'

      // wrapping status within a zone will work
      // zone.runTask(() => {
      //   this.status = status.connected ? 'Online' : 'Offline'
      // })
      
      console.log(this.status);
    });
  }

}
