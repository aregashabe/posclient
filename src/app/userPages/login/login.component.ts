import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { AuthService, LoginResponse} from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
 onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = this.loginForm.value;

   this.authService.login(credentials).subscribe({
  next: (response: LoginResponse) => {
  console.log('Login successful');
  console.log('User:', response);

  if (response.userRole === 'Admin') {
    this.router.navigate(['/dashboard']);
  }
},

  error: (error: HttpErrorResponse) => {
    console.error('Login failed:', error);
  }
});
  }
}
