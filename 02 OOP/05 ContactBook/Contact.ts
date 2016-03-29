/// <reference path="BookItem.ts" />

class Contact extends BookItem {
    constructor(private name, private email) {
        super();
    }

    dump() {
        console.log(this.name + ", " + this.email);
    }
}

class PointService {
    getAll() : Point[] {
        var p: {x:number, y:number};

        p = <any>{x:5, y:10, z:20};

        return [
            {x:5, y:10},
            {x:10, y:20},
        ];
    }
}

interface Point {
    x: number;
    y: number;
}