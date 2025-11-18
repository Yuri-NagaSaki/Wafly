/**
 * 站点配置文件
 * 所有自定义内容都在这里配置
 */

export interface SiteConfig {
  // 站点基础信息
  title: string;
  description: string;
  contactEmail: string;
  adminContact: string;

  // 图片资源
  images: {
    background1: string;
    background2: string;
  };

  // 错误页面配置
  errorPages: {
    [key: string]: ErrorPageConfig;
  };
}

export interface ErrorPageConfig {
  title: string;
  heading: string;
  subHeading: string;
  description: string;
  showContactInfo?: boolean;
}

// 站点配置
export const siteConfig: SiteConfig = {
  title: 'Cloudflare 安全防护',
  description: '本站正在使用安全服务来保护自己免受在线攻击',
  contactEmail: 'support@bytecook.io',
  adminContact: '请自行联系网站管理员',

  images: {
    background1: '/1.webp',
    background2: '/2.webp',
  },

  errorPages: {
    'waf-block': {
      title: '访问已被拦截',
      heading: '很抱歉，您的访问已被拦截',
      subHeading: '本站正在使用安全服务来保护自己免受在线攻击',
      description: '您执行的操作触发了安全防御机制，因此被阻止访问，请您稍后再试。有多种动作可能触发此拦截，包括提交某个单词或短语、SQL命令或格式错误的数据。',
      showContactInfo: true,
    },
    'ip-block': {
      title: '访问已被拦截',
      heading: '很抱歉，您的访问已被拦截',
      subHeading: '本站正在使用安全服务来保护自己免受在线攻击',
      description: '您的IP地址被禁止访问本站',
      showContactInfo: true,
    },
    'under-attack': {
      title: '安全检查中...',
      heading: '安全检查中...',
      subHeading: '正在进行自动安全检查，预计将会在5秒后重定向至您请求的页面。',
      description: '::IM_UNDER_ATTACK_BOX::',
      showContactInfo: true,
    },
    'captcha': {
      title: '验证您的身份',
      heading: '请完成验证',
      subHeading: '本站正在使用安全服务来保护自己免受在线攻击',
      description: '请完成下方的验证以继续访问',
      showContactInfo: true,
    },
    '100x': {
      title: '客户端错误',
      heading: '请求错误',
      subHeading: '您的请求无法完成',
      description: '请检查您的请求并重试',
      showContactInfo: false,
    },
    '5xx': {
      title: '服务器错误',
      heading: '服务暂时不可用',
      subHeading: '服务器遇到了一个错误',
      description: '我们正在努力修复问题，请稍后再试',
      showContactInfo: true,
    },
  },
};

export default siteConfig;
