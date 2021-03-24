import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    if(this.loginForm.valid){
      let user:Login = Object.assign({},this.loginForm.value)
      this.authService.login(user).subscribe(response=>{
        localStorage.setItem('token',response.data.token)
        this.toastrService.info(response.message)
      },errorResponse=>{
        this.toastrService.error(errorResponse.error.message)
      })
    }
  }
  
}
