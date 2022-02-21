/* 
  扫描器类
*/
export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr
    // 声明下标
    this.pos = 0
    // 声明尾巴，尾巴一开始是模板字符串原文
    this.tail = templateStr
  }

  // 功能弱，就是走过指定内容，没有返回值
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      // console.log('this is scan')
      // tag有多长，就让tab后移多少位
      this.pos += tag.length
      // 修改尾巴，让尾巴变成跳过tag
      this.tail = templateStr.substring(this.pos)
    }
  }

  // 让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
  scanUtil(stopTag) {
    const pos_backUp = this.pos
    // console.log('this is scanUtil')
    // console.log('this.pos', this.pos)
    // console.log('this.templateStr.length', this.templateStr.length)

    // 判断tail的头是不是stopTag && 指针的位置不能超过templateStr的长度以避免死循环
    while (!this.eos() && this.tail.indexOf(stopTag) != 0) {
      // 下标移动
      this.pos++
      // console.log('this.pos', this.pos)
      // 根据下标位置修改尾巴
      this.tail = templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backUp, this.pos)
  }

  // end of string
  // 判断指针是否到头
  eos() {
    return this.pos >= this.templateStr.length
  }
}
