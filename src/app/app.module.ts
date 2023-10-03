import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { AuthComponent } from "./pages/auth/auth.component";
import { NavbarComponent } from "./components/features/navbar/navbar.component";
import { InputComponent } from './components/elements/input/input.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { ErrorMessageComponent } from "./components/elements/error-message/error-message.component";
import { AccountOverviewComponent } from './components/features/account-overview/account-overview.component';
import { AddAccountModalComponent } from './components/features/add-account-modal/add-account-modal.component';
import { SelectComponent } from './components/elements/select/select.component';
import { AccountHolderOverviewComponent } from './components/features/account-holder-overview/account-holder-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    HomeComponent,
    OverviewComponent,
    InputComponent,
    ButtonComponent,
    ErrorMessageComponent,
    AccountOverviewComponent,
    AddAccountModalComponent,
    SelectComponent,
    AccountHolderOverviewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
