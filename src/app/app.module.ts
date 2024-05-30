import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Ui
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopicListComponent } from './topics/topic-list/topic-list.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { MainComponent } from './main/main/main.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditNewsComponent } from './topics/edit/edit-news/edit-news.component';
import { WikipediaComponent } from './wikipedia/wikipedia/wikipedia.component';
import { PreviewComponent } from './preview/preview/preview.component';
import { LoginComponent } from './auth/login/login/login.component';
import { NewUserComponent } from './users/new/new-user/new-user.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SupabaseService } from './utils/http/supabase.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SchoolListComponent } from './schools/list/school-list.component';
import { NewSchoolComponent } from './schools/new/new-user/new-school.component';
import { ViewDetailsComponent } from './schools/view/view-details/view-details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopicListComponent,
    SidebarComponent,
    MainComponent,
    UsersListComponent,
    EditNewsComponent,
    WikipediaComponent,
    PreviewComponent,
    LoginComponent,
    NewUserComponent,
    DashboardComponent,
    SchoolListComponent,
    SchoolListComponent,
    NewSchoolComponent,
    ViewDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatOptionModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),


   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SupabaseService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
