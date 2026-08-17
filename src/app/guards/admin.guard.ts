import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const adminGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getCurrentUser().pipe(

    map(user => {

      if (user.role === 'Admin') {
        return true;
      }

      return router.createUrlTree(['/login']);
    }),

    catchError(() => {
      return of(router.createUrlTree(['/login']));
    })

  );
};