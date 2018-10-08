import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	Daniel;
  	

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}  	
    
  	constructor(
		private elementRef: ElementRef,
		private authService: AuthService
	) { }

  	ngOnInit() {
	}
	  
	logout(){
		this.authService.logout();
	}

}
