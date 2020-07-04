# Leçon 7 Angular

## Le binding bidirectionnel

``` html
<input [(ngModel)]="motCle">
```

``` typescript
@Component({
	selector:  'gray-lalekou',
	templateUrl:  './lalekou.component.html',
	styleUrls: ['./lalekou.component.scss']
})
export class LalekouComponent implements OnInit {
	motCle = 'ISSA';
}
```
