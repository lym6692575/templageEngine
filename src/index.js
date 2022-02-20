import parseTemplateToTokens from './parseTemplateToTokens.js'

window.templageEngine = {
  // 渲染方法
  render(templateStr, data) {
    let tokens = parseTemplateToTokens(templateStr)
    console.log('tokens,', tokens)
  },
}
