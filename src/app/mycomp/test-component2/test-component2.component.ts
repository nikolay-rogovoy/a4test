import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {TestComponentComponent} from '../test-component/test-component.component';
import {Test2} from '../entity/test2';

@Component({
  selector: 'app-test-component2',
  templateUrl: './test-component2.component.html',
  styleUrls: ['./test-component2.component.css']
})
export class TestComponent2Component extends TestComponentComponent implements OnInit {

  constructor() {
    super();
  }

  @ViewChild('test')
  form: NgForm;

  entity: Test2 = new Test2('2qw', 'ssss', new Date());

  ngOnInit() {
  }

}
