import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentAuxComponent } from './components/component-aux/component-aux.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    // this route for router outlet name = 'sidebar'
    path: 'component-aux',
    component: ComponentAuxComponent,
    outlet: 'sidebar'
  },
  {
    // this route for router outlet name = 'test'
    path: 'second-outlet-test',
    component: TestComponent,
    outlet: 'test'
  },
  {
    path: 'component-one',
    component: ComponentOneComponent
  },
  {
    path: 'component-two',
    component: ComponentTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
