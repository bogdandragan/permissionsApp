import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionDetailsComponent } from './permission-details/permission-details.component';
import { PermissionsService} from "./permissions.service";
import { HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { UsersService} from "./users.service";
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PermissionListComponent,
    PermissionDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [PermissionsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
