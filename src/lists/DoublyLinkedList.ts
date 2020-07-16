class LLNode<T> {
    data: T
    prev: LLNode<T>
    next: LLNode<T>
    constructor(data: T) {
        this.data = data
        this.next = null;
        this.prev = null
    }
}

export class DoublyLinkedList<T> {
    private head: LLNode<T>
    private tail: LLNode<T>
    private size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    // Add adds the data to the end of the list
    Add(data: T): void {
        const newLLNode = new LLNode(data)
        newLLNode.prev = this.tail
        if (this.size === 0) {
            this.head = newLLNode
            this.tail = newLLNode
        } else {
            this.tail.next = newLLNode
            this.tail = newLLNode
        }
        this.size++
    }
    // Append appends data to the list, same as add
    Append(data: T): void {
        this.Add(data)
    }
    // Prepend prepends data to the list
    Prepend(data: T): void {
        const newLLNode = new LLNode(data);
        newLLNode.next = this.head
        if (this.size === 0) {
            this.head = newLLNode
            this.tail = newLLNode
        } else {
            this.head.prev = newLLNode
            this.head = newLLNode
        }
        this.size++;
    }
    // Gets returns item at the index
    Get(index: number): T {
        if (!this.withinRange(index)) {
            return null
        }
        // check if it is faster to traverse from the end
        if ((this.size - index) < index) {
            let element = this.tail
            for (let i = this.size - 1; i !== index; i--) {
                element = element.prev
            }
            return element.data
        }
        let element = this.head
        for (let i = 0; i !== index; i++) {
            element = element.next
        }
        return element.data
    }
    // Remove removes item at index
    Remove(index: number): void {
        if (!this.withinRange(index)) {
            return
        }
        if (this.size == 1) {
            this.Clear()
            return
        }
        let element: LLNode<T> = null
        // check which traversal direction is fastest
        if ((this.size - index) < index) {
            element = this.tail
            for (let i = this.size - 1; i !== index; i--) {
                element = element.prev
            }
        } else {
            element = this.head
            for (let i = 0; i !== index; i++) {
                element = element.next
            }
        }

        if (element == this.head) {
            this.head = element.next
        }
        if (element == this.tail) {
            this.tail = element.prev
        }
        if (element.prev != null) {
            element.prev.next = element.next
        }
        if (element.next != null) {
            element.next.prev = element.prev
        }
        element = null
        this.size--
    }
    // Contains checks if an item is present in the list
    Contains(data: T): boolean {
        if (this.size === 0) return false
        let element = this.head
        while (element != null) {
            if (element.data === data) {
                return true
            }
            element = element.next
        }
        return false
    }
    // Values returns an array of values in the list
    Values(): T[] {
        let values: T[] = []
        let element = this.head
        while (element != null) {
            values.push(element.data)
            element = element.next
        }
        return values
    }
    // Empty return true if list is empty
    Empty(): boolean {
        return this.size === 0
    }
    // Size returns size of the list
    Size(): number {
        return this.size
    }
    // Insert inserts data at index
    Insert(index: number, data: T): void {
        if (!this.withinRange(index)) {
            if (index === this.size) {
                this.Add(data)
            }
            return
        }
        let prev: LLNode<T> = null
        let element: LLNode<T> = null
        // check which tarversal direction is faster
        if ((this.size - index) < index) {
            element = this.tail
            for (let i = this.size - 1; i !== index; i--) {
                prev = element
                element = element.prev
            }
        } else {
            element = this.head
            for (let i = 0; i !== index; i++) {
                prev = element
                element = element.next
            }
        }
        if (element == this.head) {
            let newLLNode = new LLNode(data)
            newLLNode.next = this.head
            this.head.prev = newLLNode
            this.head = newLLNode
        } else {
            let temp = prev.next
            let newLLNode = new LLNode(data)
            newLLNode.prev = prev
            prev.next = newLLNode
            newLLNode.next = temp
        }
        this.size++
    }
    // clear removes all data from the list
    Clear(): void {
        this.head = null
        this.tail = null
        this.size = 0
    }

    private withinRange(index: number) {
        return index >= 0 && index < this.size
    }
}