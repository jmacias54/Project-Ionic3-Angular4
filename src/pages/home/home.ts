import { Component } from '@angular/core';
import{PendientesServicesProvider }from '../../providers/pendientes-services/pendientes-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pendientesList = [];
  shownGroup = null;
  
  constructor(private PendientesServicesProvider:PendientesServicesProvider) {
    this.getPosts();
  }


  getPosts(){
    this.PendientesServicesProvider.getAllPendientes().subscribe(data => this.pendientesList = data);
  }


  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};
}
