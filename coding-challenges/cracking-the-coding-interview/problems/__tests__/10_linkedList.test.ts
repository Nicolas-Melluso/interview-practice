import { LinkedList } from "../10_LinkedList";

describe('10 - LinkedList', () => {

    test('should correctly push and find elements in the list', () => {
        const list = new LinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);

        const foundNode = list.find(2);
        const notFoundNode = list.find(4);

        expect(foundNode?.value).toEqual(2);
        expect(notFoundNode).toBeUndefined();
    });

    test('should return the correct node by index', () => {
        const list = new LinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);

        const firstNode = list.get(0);
        const secondNode = list.get(1);
        const invalidNode = list.get(5);

        expect(firstNode?.value).toEqual(1);
        expect(secondNode?.value).toEqual(2);
        expect(invalidNode).toBeUndefined();
    });

    test('should correctly iterate over the list', () => {
        const list = new LinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);

        const iterator = list.iterator();
        const values = [];

        let result = iterator.next();
        while (!result.done) {
            values.push(result.value);
            result = iterator.next();
        }

        expect(values).toEqual([1, 2, 3]);
    });

    test('should correctly filter elements in the list', () => {
        const list = new LinkedList<number>();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);

        const filteredList = list.filter(value => value > 2);
        const filteredValues: any[] = [];

        filteredList.visit(value => filteredValues.push(value));

        expect(filteredValues).toEqual([3, 4]);
    });
});
