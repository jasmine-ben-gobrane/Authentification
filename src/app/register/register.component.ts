import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }
 user:any
  constructor(private router:Router,private fb:FormBuilder){
  this.user=this.fb.group({
    nom :fb.control('',[Validators.required,Validators.pattern('[A-Za-z \-]*$')]),
    pren:fb.control('',[Validators.required,Validators.pattern('[A-Za-z \-]*$')]),
    G:fb.control('',[Validators.required]),
    NS:fb.control('',[Validators.required]),
    mail:fb.control('',[Validators.required]),
    mdp:fb.control('',[Validators.required]),
    })
  } 

  onSubmit(){
    console.log("form submitted");
  }
  
  public control(nom:string){ 
    return this.user.get(nom)
  }

  gotopage(pageName:string):void{
    this.router.navigate([pageName])
  }
}
