import { expect } from 'chai'
import 'mocha'
import { SinglyLinkedList } from '../../src/lists/SinglyLinkedList'
describe("SinglyLinkedList", () => {
    describe("#Add()", () => {
        it("should append data to the list", () => {
            const list = new SinglyLinkedList()
            list.Add(1)
            list.Add(2)
            list.Add(3)
            const values = list.Values()
            expect(values).to.deep.equal([1, 2, 3])
        })
    })
    describe("#Prepend()", () => {
        it("should prepend data to the list", () => {
            const list = new SinglyLinkedList()
            list.Prepend(1)
            list.Prepend(2)
            list.Prepend(3)
            const values = list.Values()
            expect(values).to.deep.equal([3, 2, 1])
        })
    })
    describe("#Get()", () => {
        it("should return element at index", () => {
            const list = new SinglyLinkedList()
            list.Add(1)
            list.Add(2)
            list.Add(3)
            const val1 = list.Get(0);
            expect(val1).to.deep.equal(1)
            const val2 = list.Get(1);
            expect(val2).to.deep.equal(2)
            const val3 = list.Get(2);
            expect(val3).to.deep.equal(3)
            const val4 = list.Get(1000);
            expect(val4).to.deep.equal(null)
        })
    })
    describe("#Remove()", () => {
        it("should remove element at index", () => {
            const list = new SinglyLinkedList()
            list.Add(1)
            list.Add(2)
            list.Add(3)
            list.Remove(0)
            let values = list.Values()
            expect(values).to.deep.equal([2, 3])
            list.Remove(100000)
            values = list.Values()
            expect(values).to.deep.equal([2, 3])
            list.Remove(1)
            values = list.Values()
            expect(values).to.deep.equal([2])
        })
    })
    describe("#Contains()", () => {
        it("should tell if an element is in the list", () => {
            const list = new SinglyLinkedList()
            list.Add(1)
            list.Add(2)
            list.Add(99999)
            const val1 = list.Contains(99999)
            expect(val1).to.deep.equal(true)
            const val2 = list.Contains(-1000)
            expect(val2).to.deep.equal(false)
        })
    })
    describe("#Empty()", () => {
        it("should tell if list is empty", () => {
            const list = new SinglyLinkedList()
            const val1 = list.Empty()
            expect(val1).to.deep.equal(true)
            list.Add(1)
            list.Add(2)
            list.Add(99999)
            const val2 = list.Empty()
            expect(val2).to.deep.equal(false)
        })
    })
    describe("#Size()", () => {
        it("should return size of the list", () => {
            const list = new SinglyLinkedList()
            const val1 = list.Size()
            expect(val1).to.deep.equal(0)
            list.Add(1)
            const val2 = list.Size()
            expect(val2).to.deep.equal(1)
            list.Prepend(2)
            const val3 = list.Size()
            expect(val3).to.deep.equal(2)
            list.Remove(0)
            const val4 = list.Size()
            expect(val4).to.deep.equal(1)
            list.Insert(2, 999)
            const val5 = list.Size()
            expect(val5).to.deep.equal(1)
            list.Insert(1, 999)
            const val6 = list.Size()
            expect(val6).to.deep.equal(2)
        })
    })
    describe("#Values()", () => {
        it("should return data in the list", () => {
            const list = new SinglyLinkedList()
            list.Add(1)
            list.Add(2)
            list.Add(3)
            let values = list.Values()
            expect(values).to.deep.equal([1, 2, 3])
            list.Remove(0)
            values = list.Values()
            expect(values).to.deep.equal([2, 3])
        })
    })
    describe("#Clear()", () => {
        it("should clear all the data in the list", () => {
            const list = new SinglyLinkedList()
            list.Add(1)
            list.Add(2)
            list.Add(3)
            let size = list.Size()
            expect(size).to.deep.equal(3)
            list.Clear()
            size = list.Size()
            expect(size).to.deep.equal(0)
        })
    })
})