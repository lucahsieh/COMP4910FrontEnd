import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-employee-reset-pw',
  templateUrl: './employee-reset-pw.component.html',
  styleUrls: ['./employee-reset-pw.component.css']
})
export class EmployeeResetPWComponent implements OnInit {

  changPwForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = null;

  currentUserId: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.changPwForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordNew: ['', Validators.required],
      passwordNewRe: ['', Validators.required],
    },
      { validator: passwordMatch }
    );
    this.currentUserId = this.authenticationService.currentUserValue.credentialId;
    this.f.username.setValue(this.currentUserId);
  }

  // convenience getter for easy access to form fields
  get f() { return this.changPwForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changPwForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
      .changePW(this.currentUserId, this.f.password.value, this.f.passwordNew.value)
      .subscribe(
        result => {
          if (result) {
            this.authenticationService.logout();
          }
          if (!result) {
            this.error = 'We cannot change your Password. Please Make sure your old password is correct.'
          }
        },
        error => {
          console.log(error);
          this.error = error.error;
          this.loading = false;
        }
      )
  }

}

// export function passwordMatch(newPw:string): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const result = (newPw===control.value);
//     return result ? {'passwordMatch': {value: control.value}} : null;
//   };
// }

export const passwordMatch: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pw = control.get('passwordNew');
  const pwRe = control.get('passwordNewRe');

  return pw && pwRe && pw.value === pwRe.value ? null : { 'passwordMatch': true };
};