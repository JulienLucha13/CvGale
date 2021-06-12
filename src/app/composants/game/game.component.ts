import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  

  //les variables de classes
  public sens = "gauche ";
  public character = "character ";
  public arrowLeft="";
  public arrowRight="";
  public nuage1="nuage1";
  ////////////////////////////////
  public backgrounds = [];
  public imgPath = "";
  private extention=".png";
  private interval;
  private previousWindows=0;
  private monStop;
  private i=1; //compteur pour characterwalk


  constructor() {

   setTimeout(()=>this.nuage1="nuage1",1000);
   setTimeout(()=>this.nuage1="scrollNuage1",2000);
   setTimeout(()=>this.nuage1="scrollNuageFin",82000);

   setInterval(()=>
   {
   setTimeout(()=>this.nuage1="nuage1",1000);
   setTimeout(()=>this.nuage1="scrollNuage1",2000);
   setTimeout(()=>this.nuage1="scrollNuageFin",82000);
   }
   ,120000);
   



   
    this.imgPath="assets/perso5.png";

   
   this.backgrounds.push('desert');
   this.backgrounds.push('desert-sun');
   this.backgrounds.push('desert');
   
    
   }

  ngOnInit() {
  }

   getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  scrolling(event)
  {
    if(event.key=="ArrowLeft")
    {
      alert("lol");
      this.scrollingGauche();
    }
    if(event.keyCode=="ArrowRight")
    {
      this.scrollingDroite();
    }

  }

  scrollingDroite()
  {
    this.characterWalk();
    this.sens="droite";
  }

  scrollingGauche()
  {
    this.characterWalk();
    this.sens="gauche";
  }

  characterWalk()
  {
      if(this.i==1 ||this.i==5 ||this.i==9 ||this.i==13 ||this.i==17 ||this.i==20)
    {
    this.imgPath = "assets/perso"+this.i+this.extention;
    }
    this.i++;
    this.i==24?this.i=1:this.i;
  }



@HostListener("window:keydown", ["$event"])
onkeypress(event): void {


  if(event.key=="ArrowLeft")
    {
      this.scrollingGauche();
      this.arrowLeft="opaque";
    }
    if(event.key=="ArrowRight")
    {
      this.scrollingDroite();
      this.arrowRight="opaque";
    }
  
}

@HostListener("window:keyup.arrowleft", [])
onkeyupLeft(): void {

  this.arrowLeft="";
}

@HostListener("window:keyup.arrowRight", [])
onkeyupRight(): void {
  this.arrowRight="";

}

}
