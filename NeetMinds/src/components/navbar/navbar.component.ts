import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  title = 'Neet Minds';
  showLogoutButton = false;
  showExamButtons = false;
  ShowExamLink=false;
  constructor(private router: Router, private auth: Auth) {}
  
  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      if (currentUrl === '/exam') {
        this.showLogoutButton = false;
        this.showExamButtons = true;
        this.ShowExamLink=false
      } else if(currentUrl === '/home') {
        this.showLogoutButton = true;
        this.showExamButtons = false;
        this.ShowExamLink=true
      }
      else if(currentUrl === '') {
        this.showLogoutButton = false;
        this.showExamButtons = false;
        this.ShowExamLink=false
      }
    });
      
}
logout() {
  signOut(this.auth)
  .then(() => {
    this.router.navigate(['/']);
    console.log('User signed out');
  })
  .catch((error) => {
    console.error('Error during sign-out:', error);
  });
}

startExam() {
  console.log('Exam started');
}

endExam() {
  console.log('Exam ended');
}
}

