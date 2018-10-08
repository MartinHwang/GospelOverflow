import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/containers/dashboard/dashboard.component';
import { UserComponent } from './components/containers/lists/user/user.component';
import { MemberComponent } from './components/containers/lists/member/member.component';
import { UserProfileComponent } from './components/containers/lists/profiles/user-profile/user-profile.component';
import { MemberProfileComponent } from './components/containers/lists/profiles/member-profile/member-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { GalleryComponent } from './components/containers/medias/gallery/gallery.component';
import { VideosComponent } from './components/containers/medias/videos/videos.component';
import { EventComponent } from './components/containers/lists/event/event.component';
import { EventDatailComponent } from './components/containers/lists/event/event-datail/event-datail.component';
import { RsponsiveComponent } from './components/containers/tables/rsponsive/rsponsive.component';
import { FixedComponent } from './components/containers/tables/fixed/fixed.component';
import { TasksComponent } from './components/containers/tasks/tasks.component';
import { DialogMemberComponent } from './components/containers/lists/dialog-member/dialog-member.component';

const appRoutes : Routes = [
    //{ path:'' , redirectTo: 'home', pathMatch: 'full' },    
    { path:'main' , component: HomeComponent },
    { path:'login' , component: SigninComponent },
    { path:'register' , component: SignupComponent },
    { 
        path:'home', component: NavbarComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard]},
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
            { path: 'members', component: MemberComponent, canActivate: [AuthGuard] },
            { path: 'dialogMmembers', component: DialogMemberComponent, canActivate: [AuthGuard] },
            { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
            { path: 'userProfile', component: UserProfileComponent, canActivate: [AuthGuard] },
            { path: 'memberProfile', component: MemberProfileComponent, canActivate: [AuthGuard]},
            { path: 'events', component: EventComponent, canActivate: [AuthGuard] },
            { path: 'eventDetail', component: EventDatailComponent, canActivate: [AuthGuard] },
            { path: 'responsive', component: RsponsiveComponent, canActivate: [AuthGuard] },
            { path: 'fixed', component: FixedComponent, canActivate: [AuthGuard] },
            { path: 'pictures', component: GalleryComponent, canActivate: [AuthGuard] },
            { path: 'videos', component: VideosComponent, canActivate: [AuthGuard] },
            { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] }
        ] 
    },
    { path:'**' , redirectTo: 'main', pathMatch: 'full' }     
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}