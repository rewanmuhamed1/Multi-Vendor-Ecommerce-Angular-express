import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark , faBars , faLocationArrow } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chat-seller',
  imports: [ FontAwesomeModule , CommonModule ],
  templateUrl: './chat-seller.component.html',
  styleUrl: './chat-seller.component.css'
})
export class ChatSellerComponent {

 chatResponsive = false ;
 faXmark = faXmark; 
 faBars = faBars ;
 faLocationArrow = faLocationArrow;
 toggleChatResponsive(){
  this.chatResponsive = ! this.chatResponsive;
 }

}
