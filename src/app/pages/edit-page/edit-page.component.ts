import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddAdditionalInfo } from '../../states/additional-info.state.actions';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  form: FormGroup;
  matcher = new MyErrorStateMatcher(); 

  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.fb.group({
      info: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit(): void {
    if (this.form.valid) {
      const info = this.form.get('info')!.value;
      this.store.dispatch(new AddAdditionalInfo(info));
      this.form.reset();
    }
  }
}
