import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleado',
  templateUrl: './count-empleado.component.html',
  styleUrls: ['./count-empleado.component.css']
})
export class CountEmpleadoComponent implements OnInit {

  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() radioBtnChange = new EventEmitter<string>();

  radioButtonSelected: string ;
  constructor() {
    this.radioButtonSelected ='Todos'
    this.todos =0;
    this.masculino =0;
    this.femenino =0;
   }

  ngOnInit(): void {
    console.log(this.todos);
  }

  radioChange():void {
    this.radioBtnChange.emit(this.radioButtonSelected);
  }

}
