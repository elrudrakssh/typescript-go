//// [tests/cases/conformance/expressions/nullishCoalescingOperator/nullishCoalescingOperatorInAsyncGenerator.ts] ////

//// [nullishCoalescingOperatorInAsyncGenerator.ts]
// https://github.com/microsoft/TypeScript/issues/37686
async function* f(a: { b?: number }) {
    let c = a.b ?? 10;
    while (c) {
        yield c--;
    }
}


//// [nullishCoalescingOperatorInAsyncGenerator.js]
// https://github.com/microsoft/TypeScript/issues/37686
async function* f(a) {
    var _a;
    let c = (_a = a.b) !== null && _a !== void 0 ? _a : 10;
    while (c) {
        yield c--;
    }
}
