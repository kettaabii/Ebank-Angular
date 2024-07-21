import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authReq = req;
  let token =null;
  
  
  if (token!=null) {
    const token = localStorage.getItem('auth-token');
   authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
  }
  
  return next(authReq);
};