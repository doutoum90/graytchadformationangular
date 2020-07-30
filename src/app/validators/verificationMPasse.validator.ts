import { ValidatorFn, FormGroup } from '@angular/forms';

export function verification(): ValidatorFn {
    return (formulaire: FormGroup): { [key: string]: boolean } | null => {
        const champConfirmMotPasse = formulaire.get('passwordConfirm');
        const champMotPasse = formulaire.get('password');
        if (champConfirmMotPasse.value !== champMotPasse?.value)
            return { validationmdp: true };
        return null;
    }
}