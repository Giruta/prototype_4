describe('Tests for Llist', () => {

    describe('init', () => {

        const testData = [
            {args: null, expected: null},
            {args: undefined, expected: null},
            {args: [], expected: null},
            {args: [999], expected: {next: null, value: 999}},
            {args: [1, 3], expected: {next: {next: null, value: 3}, value: 1}},
            {args: [1, null, '5', -7, 'test'], expected: {next: {next: {next: {next: {next: null, value: 'test'}, value: -7}, value: '5'}, value: null}, value: 1}}
        ];

        const makeTest = (data) => {
            const {args, expected} = data;

            it(`should return 'Result = ${expected}', when initial 'Arguments = ${args}'`, () => {
                const linklist = new Llist();
                let actual = linklist.init(args);

                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe("push()" , () => {

        const testData = [
            {array: null, el: 10, expected: 1},
            {array: undefined, el: 10, expected: 1},
            {array: [], el: 0, expected: 1},
            {array: [1], el: -5, expected: 2},
            {array: [2, 3], el: -7, expected: 3},
            {array: [1, '', 0, 'test', 4, 5], el: 6, expected: 7},
            {array: [-1, 10, undefined, 4, null], el: 'test', expected: 6},
            {array: [-1, 'undefined', 4, null], el: null, expected: 5}
        ];

        const makeTest = (data) => {
            const {array, el, expected} = data;

            let linklist = new Llist();

            beforeEach(() => {
                linklist = new Llist();
            });

            it(`should return array length: ${expected} when array = "${array}" and push elem = ${el}`, () => {

                linklist.init(array);
                const actual = linklist.push(el);

                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('getSize', () => {
        const testData = [
            {array: null, expected: 0},
            {array: undefined, expected: 0},
            {array: [], expected: 0},
            {array: [0], expected: 1},
            {array: [1, null], expected: 2},
            {array: [1, 'test', 5, -7, undefined], expected: 5}
        ];

        const makeTest = (data) => {
            const {array, expected} = data;

            it(`should return length = ${expected} of the array = [${array}]`, () => {
                const linklist = new Llist();
                linklist.init(array);

                const actual = linklist.getSize();

                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('to String', () => {
        const testData = [
            {args: [], expected: undefined},
            {args: null, expected: undefined},
            {args: undefined, expected: undefined},
            {args: [0], expected: '"Node {value: 0, next: null}"'},
            {args: [1, 3], expected: '"Node {value: 1, next: {value: 3, next: null}}"'},
            {args: [1, -3, 5, -7, 9], expected: '"Node {value: 1, next: {value: -3, next: {value: 5, next: {value: -7, next: {value: 9, next: null}}}}}"'}
        ];

        const makeTest = (data) => {
            const {args, expected} = data;

            it(`should return "String = ${expected}", when array = [${args}]`, () => {
                const linklist = new Llist();
                linklist.init(args);
                const actual = linklist.toString();
                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

})