
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'validform';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = new FormGroup(
        {
          firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
          // firstName: ['', [Validators.required, Validators.minLength(3)]],
          lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
          email: new FormControl('',[Validators.required, Validators.email]),
          password: new FormControl('',[Validators.required, Validators.minLength(6)])
        },

      );
  }

  // this method for access to form fields
  // //this method returns the form details
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert("Fill valid details");
      
      return;
    }
    if(this.registerForm.valid){
      confirm("Do you want to register !");
      // this.onReset();
      this.registerForm.reset();
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

