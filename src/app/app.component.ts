import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSelected: string = 'advanced';


  onSubmit(formData: NgForm){
    console.log(formData.value);
    
    formData.reset();
    
  }
}
