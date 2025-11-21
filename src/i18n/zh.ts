/**
 * 中文语言包
 */
export const zh = {
  site: {
    title: 'Cloudflare 安全防护',
    description: '本站正在使用安全服务来保护自己免受在线攻击',
    adminContact: '请自行联系网站管理员',
  },

  errorPages: {
    'waf-block': {
      title: 'WAF 防火墙拦截',
      heading: '网站应用防火墙已阻止您的请求',
      subHeading: '您的操作触发了安全规则',
      description: '您执行的操作触发了安全防御机制，因此被阻止访问，请您稍后再试<br><br>有多种动作可能触发此拦截，包括提交某个单词或短语、SQL命令或格式错误的数据',
    },
    'ip-block': {
      title: 'IP 地址被禁止',
      heading: '您的 IP 地址已被封禁',
      subHeading: '本站已限制您的IP地址访问',
      description: '您的IP地址被禁止访问本站',
    },
    'rate-limit': {
      title: '请求频率限制',
      heading: '请求过于频繁 - 429',
      subHeading: '您的请求速率超过了限制',
      description: '您在短时间内发送了太多请求，请稍后再试<br><br>如果您认为这是错误，请联系网站管理员',
    },
    'interactive-challenge': {
      title: '交互式验证',
      heading: '请完成人机验证',
      subHeading: '需要验证您是真实用户',
      description: '请完成下方的验证以继续访问',
    },
    'managed-challenge': {
      title: '高级安全验证',
      heading: '攻击防护模式已启用',
      subHeading: '网站正在遭受攻击，需要额外验证',
      description: '请完成下方的安全检查以继续访问',
    },
    'country-challenge': {
      title: '地区验证',
      heading: '地理位置验证',
      subHeading: '来自您所在地区的访问者需要完成额外验证',
      description: '请完成下方的验证以继续访问',
    },
    'javascript-challenge': {
      title: 'JavaScript 浏览器检查',
      heading: '正在验证您的浏览器...',
      subHeading: '自动安全检查进行中，请稍候',
      description: '请稍候，正在验证您的浏览器安全性...',
    },
    'under-attack': {
      title: '攻击防护模式',
      heading: '网站攻击防护已启用',
      subHeading: '正在进行自动安全检查，预计5秒后跳转',
      description: '::IM_UNDER_ATTACK_BOX::',
    },
    'captcha': {
      title: '验证码验证',
      heading: '请完成验证码',
      subHeading: '需要验证您不是机器人',
      description: '请完成下方的验证以继续访问',
    },
    '100x': {
      title: 'Cloudflare 连接错误',
      heading: '无法连接到源服务器',
      subHeading: 'Cloudflare 与网站服务器之间出现问题',
      description: '请检查您的请求并重试',
    },
    '5xx': {
      title: '服务器内部错误',
      heading: '网站服务器遇到错误',
      subHeading: '服务器暂时无法处理您的请求',
      description: '我们正在努力修复问题，请稍后再试',
    },
  },

  footer: {
    rayId: 'Cloudflare事件ID',
    yourIp: '你的IP',
    poweredBy: 'Performance & Security by Cloudflare',
    protectionBy: '由 Cloudflare 提供保护',
  },

  index: {
    title: 'CloudFlare WAF Pages',
    badge: '错误页面',
    poweredBy: '由 Astro 驱动',
  },
};

export default zh;
