import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PainelComponent } from './components/home-page/painel/painel.component';
import { RodapeComponent } from './components/home-page/rodape/rodape.component';
import { TopoComponent } from './components/home-page/topo/topo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalDialogComponent } from './components/home-page/painel/modal-dialog/modal-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    TopoComponent,
    RodapeComponent,
    PainelComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
