class LLNode {
    data: any
    next: LLNode
    constructor(data: any) {
        this.data = data
        this.next = null
    }
}
export class SinglyLinkedList {
    private head: LLNode
    private tail: LLNode
    private size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    // Add appends a value to the end of the list
    Add(data: any): void {
        const newLLNode = new LLNode(data)
        if (this.size === 0) {
            this.head = newLLNode
            this.tail = newLLNode
        } else {
            this.tail.next = newLLNode
            this.tail = newLLNode
        }
        this.size++
    }

    // Append appends a value to the end of list same as add
    Append(data: any): void {
        this.Add(data)
    }

    // Prepends prepends a value
    Prepend(data: any): void {
        const newLLNode = new LLNode(data)
        newLLNode.next = this.head
        this.head = newLLNode
        if (this.size === 0) {
            this.tail = newLLNode
        }

        this.size++
    }
    // Get returns element at index
    Get(index: number): any {
        if (!this.withinRange(index)) {
            return null
        }
        if (index === 0) return this.head.data
        else if (index === this.size - 1) return this.tail.data
        let element = this.head
        for (let i = 0; i < index; i++) {
            element = element.next
        }
        return element.data
    }

    // Remove removes the element at a given index
    Remove(index: number): void {
        if (!this.withinRange(index)) return

        if (this.size === 1) {
            this.Clear()
            return
        }

        let prev: LLNode = null
        let element = this.head
        for (let i = 0; i < index; i++) {
            prev = element
            element = element.next
        }

        if (element === this.head) {
            this.head = element.next
        }
        if (element === this.tail) {
            this.tail = prev
        }
        if (prev !== null) {
            prev.next = element.next
        }
        element = null
        this.size--
    }

    // Contains returns true if data is found in the list else false
    Contains(data: any): boolean {
        if (data === null || data === undefined) return true
        if (this.size == 0) return false
        let element = this.head
        while (element !== null) {
            if (element.data === data) {
                return true
            }
            element = element.next
        }
        return false
    }

    // Empty return true if list is empty
    Empty(): boolean {
        return this.size === 0
    }

    // Size returns size of the list
    Size(): number {
        return this.size
    }

    // Insert inserts data at a specified index
    Insert(index: number, data: any): void {
        if (!this.withinRange(index)) {
            if (index === this.size) {
                this.Add(data)
            }
            return
        }

        let prev: LLNode = null
        let element = this.head
        for (let i = 0; i < index; i++) {
            prev = element
            element = element.next
        }

        if (element === this.head) {
            const newLLNode = new LLNode(data)
            newLLNode.next = this.head
            this.head = newLLNode
        } else {
            const temp = prev.next
            const newLLNode = new LLNode(data)
            prev.next = newLLNode
            newLLNode.next = temp
        }
        this.size++
    }

    // Values returns an array of all the elemnts in a list
    Values(): any[] {
        let values: any[] = []
        let element = this.head
        while (element != null) {
            values.push(element.data)
            element = element.next
        }
        return values
    }

    Clear(): void {
        this.size = 0;
        this.head = null
        this.tail = null
    }

    private withinRange(index: number): boolean {
        return index >= 0 && index < this.size
    }
}