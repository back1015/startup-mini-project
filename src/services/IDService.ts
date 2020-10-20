import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IDService {

    idx = 0;

    // TODO: Unique ID를 발급하는 메서드
    getUniqueId(): number {
        /**
         * 메서드가 호출될 때마다 고유한 ID를 발급할 수 있도록 한다
         * 임시로 0을 반환하도록 만듬
         */
        return this.idx++;
    }
}
