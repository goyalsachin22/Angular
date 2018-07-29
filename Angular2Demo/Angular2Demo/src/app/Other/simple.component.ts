import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from "@angular/core"

@Component({
    selector: 'simple',
    template: `Your entered: {{simpleInput}}`
})

export
    class SimpleComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log("Current Value:" + current + " Prevous Value:" +previous);
        }
    }
    @Input() simpleInput: string;
}
