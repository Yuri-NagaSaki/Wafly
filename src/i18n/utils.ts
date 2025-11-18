/**
 * i18n 工具函数
 */
import { zh } from './zh';
import { en } from './en';

export const languages = {
  zh,
  en,
};

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'zh';

/**
 * 从 URL 获取语言代码
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLanguage;
}

/**
 * 获取翻译文本
 */
export function useTranslations(lang: Language = defaultLanguage) {
  return languages[lang] || languages[defaultLanguage];
}

/**
 * 检测浏览器语言（客户端）
 */
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;

  const browserLang = navigator.language || navigator.languages?.[0];

  if (browserLang) {
    // 提取主要语言代码 (zh-CN -> zh)
    const primaryLang = browserLang.split('-')[0].toLowerCase();

    if (primaryLang in languages) {
      return primaryLang as Language;
    }
  }

  return defaultLanguage;
}

/**
 * 获取本地化路径
 */
export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLanguage) {
    return path;
  }
  return `/${lang}${path}`;
}

export default useTranslations;
