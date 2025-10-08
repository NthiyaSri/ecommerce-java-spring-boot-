import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  
  // Login form data
  loginData = {
    email: '',
    password: ''
  };
  
  // Sign up form data
  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  };

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    // Clear forms when switching
    this.loginData = { email: '', password: '' };
    this.signupData = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phone: '' };
  }

  onLogin() {
    console.log('Login attempt:', this.loginData);
    // Implement login logic here
    alert('Login functionality - Connect to your authentication service');
  }

  onSignup() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', this.signupData);
    // Implement signup logic here
    alert('Sign up functionality - Connect to your authentication service');
  }

  onSocialLogin(provider: string) {
    console.log(`${provider} login attempt`);
    alert(`${provider} login - Implement OAuth integration`);
  }
}