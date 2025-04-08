export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(value: T, priority: number): void {
    const newNode: Node<T> = { data: value, priority };

    // Find the index of the first node with lower priority
    const index = this.nodes.findIndex((node) => node.priority < priority);

    // Inserting elements using JavaScript Array splice() method、
    // arrayName.splice(position, 0 ,new_element_1,new_element_2,...);
    // Shift elements to make space and insert the new node
    // splice() method changes the original array.
    //  splice() method does not remove any elements, it returns empty array.
    if (index === -1) {
      // All existing nodes have equal or higher priority, so push to the end
      this.nodes.push(newNode);
    } else {
      this.nodes.splice(index, 0, newNode);
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    const node = this.nodes.shift();
    return node?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return this.nodes[0]?.data;
  }
}
