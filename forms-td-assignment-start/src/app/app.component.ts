import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent
{
	public subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
	public defaultSubscription = this.subscriptions[1];
	public dataUser: { email: string, subscription: string, password: string };

	public onSubmit(form: NgForm): void
	{
		this.dataUser = form.value;
		form.reset();
		form.form.patchValue({subscription: this.defaultSubscription});
	}
}
