import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template reference variable';
  GetData(item:any){
    console.warn(item);
  }
  data:number|string|boolean=20;
  get(){
   this.data="hii";
  }
  user={
    name:"archana",
    age:22,
  }
 
}
