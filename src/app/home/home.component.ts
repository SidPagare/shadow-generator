import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  opacity:any = 10;
  verticalLen:any = 21;
  horizontalLen:any=21;
  blur:any=57;
  //rgba:any='rgba(0,0,0,1)';
  r=0;
  g=0;
  b=0;
  spread:any=9;
  shadowColor:any='rgb(0,0,0)';
  //#3a7cbd
  backToDisplay:any='rgb(58,124,189)';
  backColor:any = 'rgb(58,124,189)';
  result:any='rgb(0,0,0)';
  ngOnInit() {
    
  }

  onBackColorChange(backColor,opacity){
    //console.log("shadow",backColor);
    let hex = backColor;
    hex = hex.replace('#','');
    this.r = parseInt(hex.substring(0,2), 16);
    this.g = parseInt(hex.substring(2,4), 16);
    this.b = parseInt(hex.substring(4,6), 16);
    this.backToDisplay = 'rgb('+this.r+','+this.g+','+this.b+')';
    return backColor;
  }

  onShadowColorChange(shadowColorr,opacity){
    //console.log("shadow",shadowColorr);
    let hex = shadowColorr;
    hex = hex.replace('#','');
    this.r = parseInt(hex.substring(0,2), 16);
    this.g = parseInt(hex.substring(2,4), 16);
    this.b = parseInt(hex.substring(4,6), 16);
    this.result = 'rgba('+this.r+','+this.g+','+this.b+','+opacity/100+')';
    return this.shadowColor;
  }
  getBackColor(){
    //console.log(this.result,"result");
    return this.result;
  }
  getShadow(){
    //console.log(this.horizontalLen+'px '+ this.verticalLen+'px '+this.blur+'px '+this.spread+'px '+this.result);
    return (this.horizontalLen+'px '+ this.verticalLen+'px '+this.blur+'px '+this.spread+'px '+this.result);
  }


}
