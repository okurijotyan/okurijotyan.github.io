# 億り女ちゃん 診断・特典サイト

Threads のプロフリンクから入る、リストイン用のページ一式。GitHub Pages で公開する（無料）。

## ページ
| 何 | 置き場 | 公開URL |
|---|---|---|
| 引き寄せブロック4タイプ診断（入口） | `shindan/index.html` | https://okurijotyan.github.io/shindan/ |
| 特典①：引き寄せ体質になる行動チェックリスト（言葉・心・お金・暮らしの16項目） | `gift/checklist/index.html` | https://okurijotyan.github.io/gift/checklist/ |
| 特典②：誰でも現実がバグる引き寄せ基礎講座 | `gift/training/index.html` | https://okurijotyan.github.io/gift/training/ |

ナマケ隊長の「お金ブロック3タイプ診断」と同じ使い方（こちらは4タイプ）（診断は固定投稿・プロフリンクの入口。LINE登録の代わりにオプチャ参加で2大特典）。診断と特典は別々のページで、note への誘導は特典の最後だけ。流れ：診断 → 結果 → オプチャ「秘密の花園」のバナー → 参加 → オプチャのノートから特典2つ（それぞれ単体） → 特典の最後に感想のお願いと note『パーソナル引き寄せロードマップ』。
特典ページは検索に出ない設定（noindex）。URLを知っている人だけが開ける。

## 直し方
- **リンク（オプチャ・note）を変える**：`assets/common.js` の先頭の `OKURI` だけ直す。
- 診断の質問・結果の文：`shindan/index.html` の `Q`（質問）と `R`（結果）。
- チェックリストの項目：`gift/checklist/index.html` の `G`。基礎講座の中身：`gift/training/index.html` の `T`。
- 色・字の大きさ：`assets/style.css` の先頭（`:root`）。
- 画像：`img/`。元の大きい画像は `_src/codex/`（公開しない）。作り直しは `_src/codex/依頼_画像.md` を Codex に渡す。
- シェア用の画像（`img/ogp.jpg`）：`_src/ogp.html` を `node _src/tools/shot.mjs ogp <URL> <出力>` で撮る。
- 確認用のスマホ幅の写し：`node _src/tools/shot.mjs pages _src/shots <URL>...`（ローカルで `python -m http.server 8787` を立ててから）。

## 公開のしかた
変更をコミットして `git push` すると、1〜2分で公開URLに反映される。`_src/` は公開しない（`.gitignore`）。

## 文の折り返し
日本語を文節（意味のまとまり）で折り返すため、Google の BudouX（無料・Apache-2.0）を `assets/budoux/` に同梱し、`assets/phrase.js` で全ページに使っている。外部への通信はしない。
