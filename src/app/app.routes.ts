import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './mycomp/test-component/test-component.component';
import { TestComponent2Component } from './mycomp/test-component2/test-component2.component';

export const MODULE_ROUTES: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: TestComponentComponent },
  { path: 'test2', component: TestComponent2Component }
]

export const MODULE_COMPONENTS = [
  TestComponentComponent,
  TestComponent2Component
]
