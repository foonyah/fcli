"use strict";
/**
 * [fcli](intl) index.js
 * 辞書を export するためのモジュール
 */
const G_dics = new Map();
['ar', 'bg', 'bn', 'ca', 'cs', 'de', 'el', 'en', 'es', 'fa', 'fi', 'fr',
'hi', 'hr', 'hu', 'id', 'ig', 'it', 'ja', 'ko', 'lt', 'ml',
'nb', 'nl', 'pl', 'pt_br', 'pt', 'ro', 'ru', 'se', 'sk', 'sl',
'tr', 'uk', 'vi', 'zh_tw', 'zh'].forEach(lang=>{
  try { G_dics.set(lang, require(`./${lang}.json`)); } catch(e) { }
});
exports.default = class Intl {
  constructor(lang, locale) {
    this._dic = dics[ this.underscored(this.lang = lang) ];
    // TODO use pollyfill for Intl
    // (https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl)
    try {
      this.DateTimeFormat = new Intl.DateTimeFormat(locale);
    } catch(e) { }
    try {
      this.NumberFormat = new Intl.NumberFormat(locale);
    } catch(e) { }
  }
  get dics() {
    return G_dics; // for format-message translations
  }
  get dic() {
    return this._dic;
  }
  underscored(t = this.lang) {
    return t.replace(/-/, '_');
  }
  isLangRightToLeft(t = this.lang) {
    return t === "ar" || t === "fa";
  }
  formatMessage(id) {
    return this.dic[id];
  }
  datetimeFormat(date) {
    return this.DateTimeFormat ? this.DateTimeFormat.format(date): date.toLocaleString();
  }
  numberFormat(n) {
    return this.NumberFormat ? this.NumberFormat.format(n): n;
  }
}

