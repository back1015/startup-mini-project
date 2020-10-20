export class TodoItem {
    id: number;
    desc: string;
    done: boolean;

    constructor(
        id: number,
        desc: string,
        done: boolean = false,
    ) {
        this.id = id;
        this.desc = desc;
        this.done = done;
    }
}
