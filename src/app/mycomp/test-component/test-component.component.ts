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
  entity = new Test('2qw', new Date());

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

  f(obj: any) {
    console.log(obj);
  }
}
