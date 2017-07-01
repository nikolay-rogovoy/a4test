import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './mycomp/test-component/test-component.component';

export const MODULE_ROUTES: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: TestComponentComponent }
]

export const MODULE_COMPONENTS = [
  TestComponentComponent
]
