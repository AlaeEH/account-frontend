import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {
    @Input() options: string[] = []
    @Output() selectedOption: EventEmitter<string> = new EventEmitter<string>()

    selectOption(e: Event) {
        this.selectedOption.emit((e.target as HTMLInputElement).value)
    }
}
