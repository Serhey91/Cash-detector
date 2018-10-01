import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {
    transform(items: any, stringFilter: string, field: string): any {
        if (items.length === 0 || !stringFilter) {
            return items;
        } else {
            return items.filter((itemElement) => {
                if (!isNaN(itemElement[field])) {
                    itemElement[field] += '';
                    }
                        return itemElement[field].toLowerCase().indexOf(stringFilter.toLowerCase()) !== -1;
                });
        }
    }
}