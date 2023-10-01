import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH_PATH, OVERVIEW_PAGE, PAGE_PATH } from "./constants/page";
import { HomeComponent } from "./pages/home/home.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { AuthComponent } from "./pages/auth/auth.component";

const routes: Routes = [
    { path: PAGE_PATH, component: HomeComponent },
    { path: AUTH_PATH, component: AuthComponent },
    { path: OVERVIEW_PAGE, component: OverviewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
