"use strict";
class Boy {
    constructor(name) {
        this.name = name;
    }
}
class Bad extends Boy {
    incult() {
        console.log('incult');
    }
}
class Good extends Boy {
    advice() {
        console.log('advice');
    }
}
const good = new Good('Jon');
const bad = new Bad('Oko');
function guys(user) {
    if (user instanceof Good) {
        user.advice();
    }
}
//# sourceMappingURL=hw5.js.map