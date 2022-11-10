import { Component, inject, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  buttonName = "My button"
  inputName = "Lucas"
  textoBusca = ""
  i = 0
  constructor() { }
  spinnerMode: any = "determinate";
  btnEnable = true
  selectDisabled = false
  selectedOption = 1
  
  ngOnInit(): void {
  }

  popUp(){
    alert("Click!")
  }

  inc(){
    this.i++
    if(this.i==100){
      this.i = 0
    }
    this.buttonName = "Clicked " + this.i + " times"
  }

  disable(){
    
    this.btnEnable = false
    this.spinnerMode = "indeterminate"
    setTimeout(() => {
      this.btnEnable = true
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange(e : any)/*adicionando tipo any para n dar erro */{
    this.selectDisabled = e.checked
  }

  selectCg(e : any){
    console.log(e)
    this.selectedOption = e.value
  }

  inputEvent(e : any){
    console.log(e.target.value)
  }
}
