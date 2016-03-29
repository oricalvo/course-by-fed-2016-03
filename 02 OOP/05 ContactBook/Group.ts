/// <reference path="BookItem.ts" />

class Group extends BookItem {
    private items: BookItem[];

    constructor(private name: string) {
        super();

        this.items = [];
    }

    addItem(item: BookItem) {
        this.items.push(item);

        item.onAdded(this);
    }

    dump() {
        console.log(this.name);

        this.items.forEach(item => {
            item.dump();
        });
    }
}
