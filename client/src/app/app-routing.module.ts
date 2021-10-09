import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './core/test/test.component';
import { HomeComponent } from './home/home.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: "Home"} },
  { path: 'test', component: TestComponent, data: { breadcrumb: "Test"} },
  { path: 'server-error', component: ServerErrorComponent, data: { breadcrumb: "Server-Error"} },
  { path: 'not-found', component: NotFoundComponent, data: { breadcrumb: "Not-Found"} },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule), data: { breadcrumb: "Shop"} },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
