import { Component, Prop,Host, h } from '@stencil/core';
import config from '../../../config.json';

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
  @Prop() onlineColor? = 'green';
  @Prop() offlineColor? = 'red';

  render() {      
    console.log('render')
    return (      
      <Host status>
        <div class='label'>
          <style> {           
             `.label{background-color: ${this.status === 'OK' ? this.onlineColor : this.offlineColor}};`            
            }
          </style>
          {this.status === 'OK' ? this.onlineText : this.offlineText}          
        </div>        
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
        'apiKey': config.API_KEY,              
        }
      }
      )      
      .then(response =>{
        this.status =response.statusText;       
      });
      
  }
}
