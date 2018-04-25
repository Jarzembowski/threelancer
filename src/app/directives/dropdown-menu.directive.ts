import { Directive, HostListener, OnInit, ElementRef, ViewChild, AfterViewInit, HostBinding , Input } from '@angular/core';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {

  constructor(private el: ElementRef) {
  }

  @HostBinding('class.open') isOpenedClass = false;
  @Input() clickedOutside: any;

  @HostListener('click', ['$event'])
    clickEvent(event) {
       this.isOpenedClass = !this.isOpenedClass;
  }

  //Listens for every change other then click on the element, which means it should close the menu
  @HostListener('change') ngOnChanges() {
      this.isOpenedClass = false;
  }

}
