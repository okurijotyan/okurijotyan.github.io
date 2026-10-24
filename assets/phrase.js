// 日本語を文節で折り返す（BudouX）。1〜2文字だけ次の行に落ちるのを防ぐ。
import { HTMLProcessingParser } from "./budoux/html_processor.js";
import { model } from "./budoux/data/models/ja.js";
const parser = new HTMLProcessingParser(model);
const apply = (el) => { if (el) { try { parser.applyToElement(el); } catch (e) {} } };
const q = window.__okuriPhraseQ || [];
window.okuriPhrase = apply;
apply(document.querySelector("main"));
q.forEach(apply);
