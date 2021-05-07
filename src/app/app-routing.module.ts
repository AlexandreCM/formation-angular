import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './shared/home.component';
import {AdminComponent} from './shared/admin.component';
import {ContactComponent} from './shared/contact.component';
import {ErrorComponent} from './shared/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
