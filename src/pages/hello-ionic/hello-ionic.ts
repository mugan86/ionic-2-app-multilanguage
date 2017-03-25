import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from 'ng2-translate';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public helloWorldString: string = '';

	constructor(public navCtrl: NavController, public translate: TranslateService) {
		translate.setDefaultLang(localStorage.getItem('selectLanguage'));
		this.updateVariables();

		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			console.log('Our translations changed!');
			this.updateVariables();
		});
	}

  //Update select variable, in this case only HELLO_WORLD
	updateVariables () {
		this.translate.get('HELLO_WORLD').subscribe(
			value => {
				// value is our translated string
				this.helloWorldString = value;
			}
		);
	}

	changeLanguage (newLanguage: string) {
		this.translate.use(newLanguage).subscribe(ready => {
			//this.updateVariables();
      console.log("Select language is: " + newLanguage);
      localStorage.setItem('selectLanguage', newLanguage);
		});
	}
}
