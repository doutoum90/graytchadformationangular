import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'inverser'
})
export class InverserPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value ? value.split(' ').reverse().join(' ') : value;
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