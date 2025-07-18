//// [tests/cases/conformance/node/nodeModulesCJSEmit1.ts] ////

//// [1.cjs]
module.exports = {};

//// [2.cjs]
exports.foo = 0;

//// [3.cjs]
import "foo";
exports.foo = {};

//// [4.cjs]
;

//// [5.cjs]
import two from "./2.cjs";   // ok
import three from "./3.cjs"; // error
two.foo;
three.foo;


//// [1.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
export = {};
module.exports = {};
//// [2.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
export var foo = 0;
exports.foo = 0;
//// [3.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("foo");
export var foo = {};
exports.foo = {};
//// [4.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
//// [5.cjs]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_cjs_1 = require("./2.cjs"); // ok
const _3_cjs_1 = require("./3.cjs"); // error
_2_cjs_1.default.foo;
_3_cjs_1.default.foo;
