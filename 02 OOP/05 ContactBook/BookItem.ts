abstract class BookItem {
    private id: number;
    private parent: any;
    private static nextId: number;

    constructor() {
        this.id = ++BookItem.nextId;
        this.parent = null;
    }

    onAdded(parent) {
        this.parent = parent;
    }

    abstract dump();
}
