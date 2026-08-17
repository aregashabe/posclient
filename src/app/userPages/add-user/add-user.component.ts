import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {

    this.userForm = this.fb.group({
      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      mobile: ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      confirmPassword: ['', Validators.required],

      userRole: ['', Validators.required]

    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }

    return null;
  }
   onSubmit(): void {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    const user = this.userForm.value;
    this.userService.createUser(user).subscribe({
      next: (response) => {
        console.log('User created successfully', response);

        this.userForm.reset();
      },
      error: (error) => {
        console.error('Error creating user', error);
      }
    });
  }
}