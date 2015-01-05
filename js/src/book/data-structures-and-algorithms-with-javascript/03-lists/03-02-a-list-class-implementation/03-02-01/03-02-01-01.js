/*
 * Lists
 *     A List Class Implementation
 */

console.log("\n-------------------------------------------------- 01");
(function() {
  function List() {
    /* 元素个数 */
    this.listSize = 0;
    /* 当前位置 */
    this.pos = 0;
    /* 存放元素的数组 */
    this.dataStore = [];
    /** 清空元素 */
    this.clear = function() {};
    /** 查找某个元素所在的位置 */
    this.find = function() {};
    /** 返回 list 的字符串形式 */
    this.toString = function() {};
    /** 插入元素 */
    this.insert = function() {};
    /** 往最后面添加元素 */
    this.append = function() {};
    /** 移除元素 */
    this.remove = function() {};
    /** 将当前位置移动到第一个元素 */
    this.front = function() {};
    /** 将当前位置移动到最后一个元素 */
    this.end = function() {};
    /** 将当前位置往前移动一位 */
    this.prev = function() {};
    /** 将当前位置往后移动一位 */
    this.next = function() {};
    /** 返回元素个数 */
    this.length = function() {};
    /** 返回当前位置 */
    this.currPos = function() {};
    /** 将当前位置移动到指定的位置 */
    this.moveTo = function() {};
    /** 返回当前位置的元素 */
    this.getElement = function() {};
    /** 检查是否包含某个元素 */
    this.contains = function() {};
  }
})();
