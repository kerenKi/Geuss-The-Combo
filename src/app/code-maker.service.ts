import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeMakerService {
  randomNumber(){
    return Math.floor(Math.random() * 6)
  }
  generateCode(){
    const colors: string[] = ['red','yellow','green','blue','orange','purple'] 
    const winningCode = [colors[this.randomNumber()],colors[this.randomNumber()],colors[this.randomNumber()],colors[this.randomNumber()]] 
    return winningCode
  }
}
