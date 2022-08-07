import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  finonexForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.finonexForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      fullname: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+][0-9]{3}s((d+))-d{3}-d{2}-d{2}'),
        ],
      ],
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.finonexForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.finonexForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.finonexForm.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.finonexForm.reset();
  }
  submitForm(e: any) {
    //console.log(this.emailInput.nativeElement);
  }
}
