import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

  @Output() loginFormSubmitted = new EventEmitter<LoginForm>();
  @Input() register = false;
  @Input() serverError: string;
  @Input() loading = false;

  loginForm: FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: [Validators.required]})
    });
    if (this.register) { this.loginForm.get('password').setValidators([Validators.required, this.strongPasswordValidator]); }
  }

  strongPasswordValidator(formControl: FormControl): {strong: true} | null {
    const hasNumber = /\d/.test(formControl.value);
    const hasUpper = /[A-Z]/.test(formControl.value);
    const hasLower = /[a-z]/.test(formControl.value);
    const valid = hasNumber && hasUpper && hasLower && formControl.value.length > 8;
    if (!valid) { return { strong: true }; }
    return null;
  }

  get form(): LoginForm {
    return this.loginForm.value;
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.form);
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginFormSubmitted.emit(this.form);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loading) {
      this.loginForm.disable();
    } else if (this.loginForm) {
      this.loginForm.enable();
    }
  }
}
