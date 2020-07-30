import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'inverser'
})
export class InverserPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value.split(' ').reverse().join(' ');
    }
}

@Pipe({
    name: 'agefr'
})
export class AgeFrPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value + ' ans';
    }
}