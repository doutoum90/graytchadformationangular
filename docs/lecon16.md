# Leçon 16 Angular

## Les modals (popin) de bootstrap

[Installation de ng-bootstrap](https://www.w3schools.com/bootstrap/bootstrap_modal.asp)

``` console
npm install --save @ng-bootstrap/ng-bootstrap
ng add @angular/localize
```

dans le module

``` typescript
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

...
imports:[NgbModule]
...
```

dans le composant

``` typescript
constructor(private modalService:  NgbModal)  {}

 ouvrir(content)  {
	  this.modalService.open(content,  {ariaLabelledBy:  'modal-basic-title'}).result.then((result)  =>  {
	  // fermeture de la fenetre modal avec le retour result
  },  (reason)  =>  {
	// fermeture anormale avec la valeur reason
  });

  }

  private getDismissReason(reason: any):  string  {
	  if  (reason ===  ModalDismissReasons.ESC)  {
		  return  'cause echappe';
		}  else  if  (reason ===  ModalDismissReasons.BACKDROP_CLICK)  {
			 return  'click sur backdrop';
	  }  else  {
		  return `autre reason: ${reason}` ;
	  }
  }
```

le html 

``` html
<ng-template #mymodal let-modal>
    <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Une fenetre Modal</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">×</span>
        </button>
    </div>
    <div class="modal-body">
        Contenu
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Ok</button>
    </div>
</ng-template>
```
