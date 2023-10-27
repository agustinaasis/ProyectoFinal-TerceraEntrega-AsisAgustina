import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from './pages/forms/forms.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { NumberListComponent } from './pages/number-list/number-list.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [ DashboardComponent, NumberListComponent, ToolbarComponent, SidebarComponent, ],
  imports: [ CommonModule,
            MatSidenavModule,
            MatButtonModule,
            MatIconModule,
            FormsModule,
            MatToolbarModule,
            UsersModule,
            SharedModule,
            HomeModule,
            RouterModule,
            MatListModule
            ],

  exports:[ DashboardComponent,],
})

export class DashboardModule { 
}
