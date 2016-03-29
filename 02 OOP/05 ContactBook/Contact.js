/// <reference path="BookItem.ts" />
class Contact extends BookItem {
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
    }
    dump() {
        console.log(this.name + ", " + this.email);
    }
}
class PointService {
    getAll() {
        var p;
        p = { x: 5, y: 10, z: 20 };
        return [
            { x: 5, y: 10 },
            { x: 10, y: 20 },
        ];
    }
}
//# sourceMappingURL=Contact.js.map