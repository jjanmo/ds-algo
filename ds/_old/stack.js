/*
    top : 가장 마지막에 쌓인 자료의 위치
    size : 스택의 크기
    push(item) : 해당 자료는 스택의 top에 삽입
    pop() : 해당 재료를 스택의 top에서 제거
    peek() : 스택의 가장 위에 있는 항목을 반환
    isEmpty() : 스택이 비어있는지의 여부를 boolean 값으로 반환
    search(target) : 스택에 타겟이 존재하면 해당 인덱스를 반환하고 없으면 -1을 반환
    toArray() : 현재 스택의 정보를 출력
*/

(function () {
    function Stack(max = 10) {
        this.top = null;
        this.size = 0;
        this.max = max; //max size of stack
        this.storage = [];
    }

    /**
     * @param {*} item
     */
    Stack.prototype.push = function (item) {
        if (this.top < this.max - 1) {
            this.storage.push(item);
            this.top = this.size;
            this.size++;
        } else console.log('✅ Stack Overflow');
    };

    Stack.prototype.pop = function () {
        if (this.isEmpty()) console.log('❎ Stack Underflow');
        else {
            this.storage.pop();
            this.size--;
            this.top = this.size - 1;
        }
    };

    /**
     * @returns {*}
     */
    Stack.prototype.peek = function () {
        if (this.isEmpty()) return null;
        else {
            return this.storage[this.top];
        }
    };

    /**
     * @returns {boolean}
     */
    Stack.prototype.isEmpty = function () {
        return this.storage.length === 0 ? true : false;
    };

    /**
     * @param {*} target
     * @returns {number}
     */
    Stack.prototype.search = function (target) {
        return this.storage.indexOf(target);
    };

    /**
     * @returns {[]}
     */
    Stack.prototype.toArray = function () {
        return this.storage;
    };

    const stack = new Stack(5);
    stack.push(10);
    stack.push(20);
    console.log(stack.peek());
    stack.push(30);
    console.log(stack.toArray());
    console.log(stack.isEmpty());
    stack.push(40);
    stack.push(50);
    stack.push(60);
    console.log(stack.toArray());
    console.log(stack.peek());
    stack.pop();
    stack.pop();
    stack.pop();
    console.log(stack.toArray());
    console.log(stack.peek());
    stack.pop();
    stack.pop();
    stack.pop();
    console.log(stack.isEmpty());
    console.log(stack.search(10));
})();
