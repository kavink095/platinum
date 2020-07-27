import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDTO } from '../dto/user-dto';
import { UserService } from '../service/user-service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.css']
})
export class UserSignComponent implements OnInit {

  // tslint:disable-next-line: new-parens
  user: UserDTO = new UserDTO;
  urls = '/otp';

  pwd: string;
  repwd: string;
  chkPw: string;
  chkFlag = false;

  constructor(private userService: UserService, private router: Router) { }

  formSign = new FormGroup({
    mail: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    repeatpass: new FormControl('', Validators.required),
    check: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  checkPasswordTwoType() {
    this.pwd = this.formSign.get('pass').value;
    this.repwd = this.formSign.get('repeatpass').value;
    if (this.pwd === this.repwd) {
      // tslint:disable-next-line: no-unused-expression
      // this.formCreateAdmin.get('checklbl').setValue;
      this.chkFlag = true;
    } else {
      // tslint:disable-next-line: no-unused-expression
      // this.formCreateAdmin.get('checklbl').markAsUntouched;
      alert('password cannot match... please re type correctly..!');
    }
  }
  // tslint:disable-next-line: typedef
  // public gotoOTP(url, id) {
  //   this.router.navigate([url, id]).then((e) => { });
  // }

  saveUser(): void {
    this.user.userEmail = this.formSign.get('mail').value;
    this.user.userMobile = this.formSign.get('contact').value;
    this.user.userPassword = this.formSign.get('repeatpass').value;

    // this.admin.adName = this.formCreateAdmin.get('name').value;
    console.log(this.user);
    this.checkPasswordTwoType();
    if (this.chkFlag) {
      this.userService.saveUser(this.user).subscribe(

        (result) => {

          if (result || !Validators === null) {
            console.log(this.userService);
            alert('User has been saved successfully..');
            this.formSign.get('contact').setValue('');
            this.formSign.get('mail').setValue('');
            this.formSign.get('repeatpass').setValue('');
            this.formSign.get('pass').setValue('');
            this.formSign.get('check').setValue('');
            this.chkFlag = false;
            // tslint:disable-next-line: no-unused-expression
            this.router.navigateByUrl(this.urls);
          } else {
            alert('Failed to save the User..');
          }
        }
      );
    }

  }

}
