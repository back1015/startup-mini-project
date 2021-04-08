import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IDService {
    private _counter = 0;

    getUniqueId() {
        this._counter += 1;
        return this._counter;
    }
}
