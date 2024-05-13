import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponentComponent } from './no-page-found-component/no-page-found-component.component';

const routes: Routes = [
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },

    { path: '**', component: NoPageFoundComponentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
