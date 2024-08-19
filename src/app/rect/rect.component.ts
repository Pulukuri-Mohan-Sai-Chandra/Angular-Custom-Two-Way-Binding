import { Component, EventEmitter, Input, model, Output } from '@angular/core';


type Dimension = {
  width:string,
  height:string
}

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {

  size = model.required<Dimension>();

  onReset(){
    this.size.set({
      width:'200',
      height:'100'
    })
  }
}
