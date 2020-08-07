import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gray-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gray Tchad Formation Angular Modifié';

  constructor(public readonly translate: TranslateService) {
    translate.addLangs(['ar',  'fr']);
		translate.setDefaultLang('ar');
    const browserLang = translate.getBrowserLang();
    // console.log(browserLang);
		translate.use(browserLang.match(/ar|fr/)  ? browserLang :  'ar');
		// translate.use( 'ar');
  }

}
