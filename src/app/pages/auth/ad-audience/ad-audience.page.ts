import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-audience',
  templateUrl: './ad-audience.page.html',
  styleUrls: ['./ad-audience.page.scss'],
})
export class AdAudiencePage implements OnInit {

  audienceForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.audienceForm = this.formBuilder.group({
        country: ['', Validators.required]
    });
}

  onSubmit() {
      console.log(this.audienceForm.value);
      this.router.navigate(['/ad-preview']);
  }
}
