import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserDTO} from '../dto/user-dto';
import {UserService} from '../service/user-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-userotp',
  templateUrl: './userotp.component.html',
  styleUrls: ['./userotp.component.css']
})
export class UserotpComponent implements OnInit {

  // tslint:disable-next-line: new-parens
  user: UserDTO = new UserDTO;
  mails: string;
  gnNum : number;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  formOTP = new FormGroup({
    mail: new FormControl(),
    otpnumber: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
    this.mails = this.route.snapshot.params.mail;
  }

  updateUser(): void {
    this.user.gnNumber = this.formOTP.get('otpnumber').value;
    console.log(this.gnNum);
    this.userService.updateOTP(this.user.gnNumber)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new UserDTO();
    // this.gotoList();
  }

}
