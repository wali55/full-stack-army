// execution context
function A() {
    console.log('I am A');
}
function B() {
    A();
}
function C() {
    B();
    B();
}
function D() {
    C();
    A();
}

D();