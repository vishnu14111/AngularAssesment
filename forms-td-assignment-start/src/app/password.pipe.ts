import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'password'
})
export class PasswordPipe implements PipeTransform
{
	public transform(value: string): any
	{
		return '*'.repeat(value.length);
	}
}
