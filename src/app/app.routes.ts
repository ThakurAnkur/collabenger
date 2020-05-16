import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent} from './home/home.component'


//import { AlwaysAuthGuard } from "./routerGaurd";
// Route config let's you map routes to components
const routes: Routes = [
  // map '/signin/' to sign in page
  {
    path: 'signin',
    component: SignInComponent
  },
  
  // map '/signup/' to sign in page
  {
    path: 'signup',
    component: SignUpComponent
  },
  // map '/home/' to sign in page
  {
    path: 'home',
    component: HomeComponent
  },
  // map '/' to '/signin' as our default route
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
