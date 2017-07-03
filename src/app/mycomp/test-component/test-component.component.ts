import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Test} from './test';

@Component({
  moduleId: module.id,
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  @ViewChild('test')
  form: NgForm;
  entity = new Test('89180420405',"qwe@gmail.com", new Date(),1, 1.2, 3, 4.5);

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.entity);
  }
  /***/
  buttonClick() {
    debugger;
    this.entity.dt = new Date();
  }

  /***/
  parseNumber(source: string): number{
    source = source.replace(",",".");
    let result = Number(source);
    if(isNaN(result)){
      result = null;
    }
    return result;
  }

  f(obj: any) {
    console.log(obj);
  }
  public mask1 = [/[8]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  //public mask2 = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";

  /***/
  fMask(rawValue): Array<any> {
    return [/[8]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  }
}
