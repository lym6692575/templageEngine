import Scanner from './Scanner.js'
import nestTokens from './nestTokens.js'

/* 
将模板字符串变为数组
*/
export default function parseTemplateToTokens(templateStr) {
  let tokens = []
  // 实例化扫描器
  let scanner = new Scanner(templateStr)
  let words
  while (!scanner.eos()) {
    // 收集'{{'之前的出现的文字
    words = scanner.scanUtil('{{')
    // 将words push进tokens数组中
    tokens.push(['text', words])
    // 过'{{'
    scanner.scan('{{')
    // 收集开始标记出现之前的文字
    words = scanner.scanUtil('}}')
    if (words != '') {
      // 判断首字符
      if (words[0] == '#') {
        tokens.push(['#', words.substring(1)])
      } else if (words[0] == '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['text', words])
      }
    }
    scanner.scan('}}')
  }

  return nestTokens(tokens)
}
