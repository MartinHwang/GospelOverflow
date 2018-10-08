// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app.routing.module';
import { MaterialDesignModule } from './modules/material-design.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LayoutModule } from './components/containers/layout/layout.module';
import { ChartjsModule } from './components/containers/charts/chartjs/chartjs.module';
import { TasksModule } from './components/containers/tasks/tasks.module';
import { NgxModule } from './components/containers/charts/ngx/ngx.module';
import { Ng2OdometerModule } from 'ng2-odometer';
import { DndModule } from 'ng2-dnd';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/containers/navbar/navbar.component';
import { DashboardComponent } from './components/containers/dashboard/dashboard.component';
import { DashcardComponent } from './components/containers/dashboard/dashcard/dashcard.component';
import { UserComponent } from './components/containers/lists/user/user.component';
import { MemberComponent } from './components/containers/lists/member/member.component';
import { UserProfileComponent } from './components/containers/lists/profiles/user-profile/user-profile.component';
import { MemberProfileComponent } from './components/containers/lists/profiles/member-profile/member-profile.component';
import { ReportsComponent } from './components/containers/tables/reports/reports.component';
import { ContactsComponent } from './components/containers/contacts/contacts.component';
import { UploadComponent } from './components/containers/upload/upload.component';
import { GalleryComponent } from './components/containers/medias/gallery/gallery.component';
import { DetailsComponent } from './components/containers/medias/gallery/details/details.component';
import { VideosComponent } from './components/containers/medias/videos/videos.component';
import { VdieoDetailComponent } from './components/containers/medias/videos/vdieo-detail/vdieo-detail.component';
import { VideoListComponent } from './components/containers/medias/videos/video-list/video-list.component';
import { EventComponent } from './components/containers/lists/event/event.component';
import { EventDatailComponent } from './components/containers/lists/event/event-datail/event-datail.component';
import { RsponsiveComponent } from './components/containers/tables/rsponsive/rsponsive.component';
import { FixedComponent } from './components/containers/tables/fixed/fixed.component';
import { ScrumComponent } from './components/containers/scrum/scrum.component';
import { TasksComponent } from './components/containers/tasks/tasks.component';
import { DialogMemberComponent } from './components/containers/lists/dialog-member/dialog-member.component';
import { PopupMemberComponent } from './components/containers/lists/dialog-member/popup-member/popup-member.component';
import { ListMemberComponent } from './components/containers/lists/dialog-member/list-member/list-member.component';
import { SafePipe } from './pipes/safe.pipe';

// Services
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { MemberService } from './services/member.service';
import { CommonService } from './services/common.service';
import { GalleryService } from './services/gallery.service';
import { ValidateService } from './services/validate.service';
import { GalleryFilterPipe } from './pipes/galleryPipe';
import { VideoService } from './services/video.service';
import { ListsService } from './services/lists.service';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDBa8TTo0xuERWLA3D32uKO_UnDkw7vqqg",
  authDomain: "hurpro-5dc45.firebaseapp.com",
  databaseURL: "https://hurpro-5dc45.firebaseio.com",
  projectId: "hurpro-5dc45",
  storageBucket: "hurpro-5dc45.appspot.com",
  messagingSenderId: "865950736402"
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    DashboardComponent,
    DashcardComponent,
    MemberComponent,
    UserComponent,
    UserProfileComponent,
    MemberProfileComponent,
    NavbarComponent,
    ReportsComponent,
    ContactsComponent,
    UploadComponent,
    GalleryComponent,
    DetailsComponent,
    VideosComponent,
    VdieoDetailComponent,
    VideoListComponent,
    EventComponent,
    EventDatailComponent,
    RsponsiveComponent,
    FixedComponent,
    ScrumComponent,
    TasksComponent,
    DialogMemberComponent,
    ListMemberComponent,
    PopupMemberComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    MaterialDesignModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatExpansionModule,
    MatDialogModule,
    ChartsModule,
    Ng2GoogleChartsModule,
    Ng2OdometerModule,
    FlexLayoutModule,
    ChartjsModule,
    TasksModule,
    NgxModule,
    PerfectScrollbarModule,
    DndModule.forRoot()
  ],  
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService,
    UserService,
    MemberService,
    CommonService,
    GalleryService,
    ValidateService,
    VideoService,
    ListsService,
    AuthGuard,
    GalleryFilterPipe,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MemberProfileComponent,
    PopupMemberComponent
  ]
})
export class AppModule { }
