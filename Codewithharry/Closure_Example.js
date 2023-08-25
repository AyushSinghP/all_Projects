const outer = (a) => {
    let b = 8;
    const inner = () => {
        let sum = a + b;
        console.log(`Sum of two number is ${sum}`);
    }
    return inner;
}
let inner1 = outer(5);
inner1();