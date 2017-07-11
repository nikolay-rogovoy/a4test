import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Test} from '../entity/test';
import {Test2} from '../entity/test2';

@Component({
  moduleId: module.id,
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  @ViewChild('test')
  form: NgForm;

  entity: Test = new Test('2qw', new Date());

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('TestComponentComponent');
    console.log(this.entity);
  }

  /***/
  buttonClick() {
    this.entity.dt = new Date();

    let t: Test[];
    t = [new Test2("qq", "ww", new Date())];
    //t = [new Test("qq", new Date())];

    let t2: Test2[] = t as Test2[];
    //t2 = [new Test("qq", new Date())];

    //alert(t[0].name);

    alert(t2[0].name2 + ' - ' + t2.length);

    t.push(new Test2("qq22", "ww22", new Date()));

    alert(t2[0].name2 + ' - ' + t2.length);

  }

  f(obj: any) {
    console.log(obj);
  }
}
