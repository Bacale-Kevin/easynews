import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.page.html',
  styleUrls: ['./partner-form.page.scss'],
})
export class PartnerFormPage implements OnInit {
  partnerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.partnerForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        entity: ['', Validators.required],
        description: ['', Validators.required]

    });
  }

  onSubmit() {
      console.log(this.partnerForm.value);
      this.router.navigate(['/partner-payment']);
  }

}
