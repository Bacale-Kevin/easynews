import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnUser } from '../../../models/an-user.model';
import { UserService } from '../../../services/user.service';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.page.html',
  styleUrls: ['./about-user.page.scss'],
})
export class AboutUserPage implements OnInit {

    // Valide le pays cliqué
    @Input() country: string='';
    anUserForm: FormGroup;

    countries$: Observable<string[]>;
    private searchTerms = new Subject<string>();


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.countries$ = this.searchTerms.pipe(
      // wait 300ms after each keystocke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),


      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchCountries(term)),
    );

    this.initForm();
  }

  selectCountry(countrySelect: string) {
    this.country = countrySelect;
    this.countries$ = null;
    console.log(this.country);
  }

  initForm() {
    this.anUserForm = this.formBuilder.group({
      country: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required]]
    });
  }

  onSubmitForm() {
    //const formValue = this.anUserForm.value;
    //formValue['country']
    const country = this.anUserForm.get('country').value;
    const gender = this.anUserForm.get('gender').value;
    const age = this.anUserForm.get('age').value;
    const createdAt = new Date();
    const newAnUser = new AnUser(country, gender, age, createdAt);
    this.userService.addAnUser(newAnUser);
    this.router.navigate(['/main-home']);
  }


}
