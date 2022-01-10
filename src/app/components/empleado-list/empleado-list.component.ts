import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleado: Empleado[] = [
    {
      legajo: 1,
      nombre: 'Carlyle',
      apellido: 'Komalram',
      sexo: 'Masculino',
      salario: 545
    },
    {
      legajo: 2,
      nombre: 'Melanie',
      apellido: 'Komalram',
      sexo: 'Femenino',
      salario: 870
    },
    {
      legajo: 3,
      nombre: 'Yoainaris',
      apellido: 'Concepción',
      sexo: 'Femenino',
      salario: 971
    },
    {
      legajo: 4,
      nombre: 'Bhagwan',
      apellido: 'Komalram',
      sexo: 'Masculino',
      salario: 2100
    },
    {
      legajo: 5,
      nombre: 'Bella',
      apellido: 'Sofia',
      sexo: 'Femenino',
      salario: 6000000
    },


  ];
  radioButtonSelected: string ;
  constructor() {
    this.radioButtonSelected ='Todos'
   }

  ngOnInit(): void {
  }

  obtenerTotal():number{
    return this.listEmpleado.length;
  }

  obtenerFemenino():number{
    return this.listEmpleado.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerMasculino():number{
    return this.listEmpleado.filter(list => list.sexo === 'Masculino').length;
  }

  empleadoRadioBtnChange(event: string):void {
    this.radioButtonSelected = event;
  }

}
