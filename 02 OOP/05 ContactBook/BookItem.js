class BookItem {
    constructor() {
        this.id = ++BookItem.nextId;
        this.parent = null;
    }
    onAdded(parent) {
        this.parent = parent;
    }
}
//# sourceMappingURL=BookItem.js.map