import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { WelcomeService } from './welcome.service';
import { Softtekian } from './softtekian';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnChanges,OnDestroy{

  longText = "Hola, ni nombre es Felix Lopez Leobardo, mi IS es FLLE, tengo 25 años, vivo en Chilpancingo de los Bravo, mi estado es Guerrero";
  softtekians: Softtekian[] = [];   
  
  cabeceraTabla: string[] = ['nombre', 'edad', 'is', 'ciudad','estado'];

  constructor(private  welcomeService: WelcomeService){}
  ngOnDestroy(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
 
 
  ngOnInit(): void {
      this.welcomeService.getData().subscribe(data =>{
        if(data.my_data){
          this.softtekians = data.my_data as Softtekian[];       
        }
      });
  }

  


}
