import { Component, Prop,Host, h } from '@stencil/core';

@Component({
  tag: 'd09-service-status-component',
  styleUrl: 'd09-service-status-component.css',
  shadow: true,
})
export class D09ServiceStatusComponent {

  @Prop() apiToCheck!: string;
  @Prop( {reflect: true, mutable : true }) status: string;
  @Prop() statusText? = 'Status';
  @Prop() onlineText? = 'Online';
  @Prop() offlineText? = 'Offline';

  render() {      
    console.log('render')
    return (      
      <Host status>
        <div class='label'>{this.statusText}</div>        
      </Host>
    );
  }

  constructor() {
    this.getServiceStatus();    
  }

  getServiceStatus() {
    fetch(this.apiToCheck, 
      {
        headers: {
        'Accept': 'application/json',
        'apiKey':'',              
        }
      }
      )      
      .then(response =>{
        this.status =response.statusText;
        this.translateStatus();
      });
      
  }


  translateStatus() {
    if(this.status === 'OK') {
      this.statusText = this.onlineText;           
         
    }else{
      this.statusText = this.offlineText;
   
    }      
  }

}
