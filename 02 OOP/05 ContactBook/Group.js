/// <reference path="BookItem.ts" />
class Group extends BookItem {
    constructor(name) {
        super();
        this.name = name;
        this.items = [];
    }
    addItem(item) {
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
//# sourceMappingURL=Group.js.map