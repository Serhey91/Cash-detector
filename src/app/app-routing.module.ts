import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'core', loadChildren: './core/core.module#CoreModule'},
    {path: 'error', component: NotFoundComponent},

];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

    // template for all errors in URL to redirect
constructor(private router: Router) {
this.router.errorHandler = (error: any) => {
    this.router.navigate(['/error']);
};
}
}