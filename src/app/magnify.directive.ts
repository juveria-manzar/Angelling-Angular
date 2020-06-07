import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnify]'
})
export class MagnifyDirective {
  private defaultFontSize;
  private counter=0;

  constructor(private element:ElementRef) { 

    this.defaultFontSize=window.getComputedStyle(element.nativeElement).fontSize;
    console.log(this.defaultFontSize)
    this.defaultFontSize=this.defaultFontSize.substring(0,this.defaultFontSize.length-2);
    console.log(this.defaultFontSize)
    this.defaultFontSize=Number(this.defaultFontSize);

    console.log(this.defaultFontSize)
    

  }
  private magnify(element){
    let fontSizeArray=[
      this.defaultFontSize+13,
      this.defaultFontSize+16,
      this.defaultFontSize+19
    ]

    let newSize=fontSizeArray[++this.counter % fontSizeArray.length];
    element.nativeElement.style.fontSize=String(newSize+'px');
  }

  @HostListener('click') onClick(){
    this.magnify(this.element)
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.cursor='zoom-in'
    this.element.nativeElement.style.userSelect='none'
  }
}
