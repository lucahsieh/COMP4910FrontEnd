import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const dateRangeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const startDate = control.get('startDate');
    const endDate = control.get('endDate');
    console.log(startDate.value <= endDate.value);

    return startDate && endDate && startDate.value <= endDate.value ? null : { 'dateRangeValidator': true };
};