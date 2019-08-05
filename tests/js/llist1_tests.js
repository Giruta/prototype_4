describe('Tests for double Llist1', () => {

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
                const linklist1 = new Llist1();
                linklist1.init(array);

                const actual = linklist1.getSize();

                assert.deepEqual(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });

    describe('init', () => {

        const testData = [
            {args: null, expected: null},
            {args: undefined, expected: null},
            {args: [], expected: null},
            {args: [999], expected: [999]},
            {args: [1, 3], expected: [1, 3]},
            {args: [1, null, '5', -7, 'test'], expected: [1, null, '5', -7, 'test']}
        ];

        const makeTest = (data) => {
            const {args, expected} = data;

            it(`should return 'Result = ${expected}', when initial 'Arguments = ${args}'`, () => {
                const linklist1 = new Llist();
                linklist1.init(args);

                let actual = linklist1.toArray();

                assert.equal(actual, expected);
            });
        };

        testData.forEach(data => makeTest(data));
    });
})