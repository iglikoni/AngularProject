import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  @HostBinding('style.backgroundColor') background!: string;
  @HostBinding('style.color') color!:string;
  ngOnInit(): void {
    //  this.renderer.setStyle(this.elRef.nativeElement,'background-color','orange')
  }
  
  @HostListener('mouseenter') onMouseEnter(event:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','orange')
    this.background='red'
    this.color='white';
  }
  @HostListener('mouseleave') onMouseleave(event:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','')
    this.background=''
    this.color='blue'
  }

}
