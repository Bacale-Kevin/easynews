import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-ad-signup',
  templateUrl: './ad-signup.page.html',
  styleUrls: ['./ad-signup.page.scss'],
})
export class AdSignupPage implements OnInit {

  adForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.adForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      countryCode: ['', Validators.required],
      status: ['', Validators.required],
      activity: ['', Validators.required],
      nbEmploye: ['', Validators.required]
    });
}

onSubmit() {
    console.log(this.adForm.value);
    this.router.navigate(['/ad-post']);
}
}
