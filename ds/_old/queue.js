/*
front: 큐의 맨 앞(첫번째 위치)
back : 큐의 맨 뒤(마지막 위치)
size : 큐의 크기
add(item) : `enqueue` 라고 부른다. 큐의 마지막 위치에 자료를 추가한다.
remove() : `dequeue`라고 부른다. 큐의 첫번째 자료를 제거한다.(front위치에서 자료를 제거)
peek() :큐의 가장 위에 있는 자료를 반환한다.(front위치의 자료의 값을 반환()
isEmpty() : 큐가 비어있는지 여부를 확인한다.
display() : 현재 큐의 상태를 보여준다.
*/

(function () {
    function Queue(max = 5) {
        this.queue = [];
        this.max = max;
        this.size = 0;
        this.front = -1;
        this.back = -1;
    }

    /**
     *
     * @param {*} item
     */
    Queue.prototype.enqueue = function (item) {
        if (this.front === -1) this.front++;
        if (this.back < this.max - 1) {
            console.log('📌 enqueue');
            this.queue.push(item);
            this.size++;
            this.back++;
        } else {
            console.log('✅ Queue Overflow');
        }
    };

    Queue.prototype.dequeue = function () {
        if (this.front === -1) {
            console.log('✅ Queue Underflow');
        } else {
            console.log('📌 dequeue');
            this.queue.shift();
            this.queue.unshift(null);
            if (this.front === 0) this.front++;
            this.size--;
        }
    };

    Queue.prototype.peek = function () {
        if (!this.isEmpty()) console.log(`peek point is ${this.queue[this.front]}`);
    };

    Queue.prototype.isEmpty = function () {
        console.log(`isEmpty ? ${this.size === 0}`);
    };

    Queue.prototype.display = function () {
        this.queue.forEach((item, index) =>
            console.log(`DP : queue[${index}] ${item} / front ${this.front} : back ${this.back}`)
        );
    };

    const queue = new Queue();

    queue.dequeue();

    queue.enqueue(5);
    queue.display();

    queue.dequeue();
    queue.display();
    queue.dequeue();
    queue.display();

    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    queue.enqueue(25);
    queue.enqueue(30); //overflow
    queue.enqueue(35); //overflow
    queue.display(); //null 10 15 20 25
    queue.peek();
})();
