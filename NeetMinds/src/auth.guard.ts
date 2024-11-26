import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  const user = auth.currentUser;
  if (user) {
    console.log('User is authenticated:', user.uid);
    return true;
  } else {
    console.log('User is not authenticated. Redirecting...');
    router.navigate(['/'], { queryParams: { redirectTo: state.url } }); // Save the target URL
    return false;
  }
};
