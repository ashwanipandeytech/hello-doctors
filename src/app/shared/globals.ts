import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';

@Injectable()
export class Globals {
	constructor( private location: Location) { }
	priviledgeState = JSON.parse(localStorage.getItem('assigned-privileges'));
	adminDateFormat = 'DD-MM-YYYY HH:mm';
	dropdownDateFormat = 'DD.MM.YYYY HH:mm';
    flatFormat:any= 'd.m.Y H:i';


    adminYearDateFormat = 'DD-MM-YYYY';
	adminDateFormatView = 'dd-MM-yyyy HH:mm';
	adminHourMinuteSecond = 'hh:mm:ss A';
	apiDateFormat = 'YYYY-MM-DD HH:mm';

	
	backClicked() {
		this.location.back();
	}

	modalConfig = {
		animated: true,
		keyboard: false,
		backdrop: true,
		ignoreBackdropClick: true
	};


	ImageThumb = {
		size1: '/thumb/25/',
		size2: '/thumb/50/',
		size3: '/thumb/100/',
		size4: '/thumb/150/',
		size5: '/thumb/200/',
		size6: '/thumb/250/'
	};
	availablePaymentsOptions = [{ id: 'Invoice', label: 'INVOICE' },
	// { id: 'Credit Card', label: this.translate.instant('CREDIT_CARD') },
	{ id: 'PayPal', label: 'PAYPAL' },
	{ id: 'Adyen', label: 'ADYEN' },
		// { id: 'Paydollar', label: this.translate.instant('PAYDOLLAR') },
		// { id: 'rbsWorldPay', label: this.translate.instant('RBSWORLDPAY') },
		// { id: 'AliPay', label: this.translate.instant('ALIPAY') },
		// { id: 'PayUnity', label: this.translate.instant('PAYUNITY') },
		// { id: 'TenPay', label: this.translate.instant('TENPAY') }

	];

}
