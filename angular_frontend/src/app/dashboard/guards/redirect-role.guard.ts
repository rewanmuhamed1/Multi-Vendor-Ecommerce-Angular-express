import { CanMatchFn } from '@angular/router';

export const redirectRoleGuard: CanMatchFn = (route, segments) => {
  return true;
};
