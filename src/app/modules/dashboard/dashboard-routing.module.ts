import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/index',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'index',
        component: IndexComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/dashboard/index',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
