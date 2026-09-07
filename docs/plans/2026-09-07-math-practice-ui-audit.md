# 実装計画: math-practice UI・学習導線監査対応 (2026-09-07)

## 目標

`math-practice` の既存学習契約を保ったまま、監査で確認したCSSの役割不一致を解消し、過去問演習の再開地点とミニ試験完了後の次行動を予測可能にする。既存の問題ID、進捗キー、クラウド保存形式、出典選択、採点・解説機能は維持する。

## 入力

- 対象リポジトリ: `C:\Users\shtom\dev\math-practice`
- 監査: chao（design-layout-audit）、hisui（ux-friction-audit）の最終報告
- 正本: `AGENTS.md`、`README.md`、`DESIGN.md`
- 実測Before: ローカル静的サーバーで `?exam=sougou` を表示し、1280px・375px・320pxを確認。1280pxは `document.clientWidth/scrollWidth=1265/1265`、375pxは `360/360`、320pxは `305/305` で横溢れなし。Afterの値は未実装のため未測定。
- 実行環境: `package.json` はなく、Nodeの既存チェッカーと静的サーバーを使う。

## 対象範囲 / 対象外

### 対象

- F-01: CTA専用色 `--signal` の非CTA流用
- F-02: `.context-label` の10pxとDESIGN.mdの11px契約の不一致
- F-03: `.utility-menu > summary` の最小高42pxと44px契約の不一致
- F-04: `.contextbar` の重複したwidth定義
- F-05: 過去問演習の再開が最初の未完了大問に固定され、最後の操作位置を保存しない問題
- F-06: 最終ミニ試験で `nextExam()` がない場合に主CTAが消える問題

### 対象外

- F-07（初回CTA）: `practice.js` の `renderContinuePanel()` と実ブラウザで「▶ 最初の問題へ進む」を確認したため `NOT_REPRODUCED`。コード変更しない。
- 問題文・解答・解説本文、出典、問題ID、採点アルゴリズム、進捗を全消去する移行、Supabaseのスキーマ変更、デザイン全体の再テーマ化、公開・commit・push・deploy。
- 利用者観察なしには決められない「最後の位置」と「最初の未完了位置」の長期的な優先順位。実装は安全な既定値を置き、観察は別タスクで記録する。

## 前提と未確認事項

- chaoのF-01〜F-04はコード根拠による `CODE_INFERRED`。実装後にcomputed style、主要画面、キーボード操作を再測定して受入判定する。
- hisuiのF-05/F-06もコード根拠による `CODE_INFERRED`。利用者の迷い・完了後の満足度は未確認であり、効果を数値で断定しない。
- 現在の作業ツリーには、計画と無関係な既存差分（`DESIGN.md`、`static/styles.css`、複数docsの削除、未追跡のAGENTS/CLAUDE/計画ファイル/tmp等）がある。これらを戻さず、実装の成果として数えない。
- `static/config.json` はローカルに存在しない場合があり、ローカルブラウザでは404になる。ゲスト表示・問題表示・採点・解説に影響しない既知の設定未生成状態として、クラウド同期の受入とは分離する。
- 旧データに再開位置がない場合は、既存の `firstUnfinishedGroupIndex()` にフォールバックする。

## 変更方針

1. `static/styles.css` の共有役割だけを直し、`DESIGN.md` に既に定義された色・文字・操作領域・幅レールを実装へ合わせる。
2. 再開位置は既存の進捗・解答下書きへ混ぜず、過去問のexamKeyと生徒名にスコープした任意の位置レコードとして保存する。旧localStorageにそのレコードがなければ従来挙動へ戻る。クラウドpayloadには任意フィールドとして追加し、旧payloadを読める形を維持する。ゲストは従来どおり永続保存しない。
3. 最終ミニ試験では既存の「別の演習を選ぶ」操作を再利用して主CTAへ格上げする。中間回では「次の回へ進む」を維持し、二重の主CTAを置かない。
4. アプリモジュールを変更した場合は、既存のキャッシュバージョン更新スクリプトで `index.html` と全importのversionを同期する。問題データや学習IDは変更しない。

## 変更ファイルマップ

| ファイル | 新規/変更 | 責務 |
|---|---|---|
| `static/styles.css` | 変更 | 色の役割、構造ラベル、summary操作領域、contextbar幅のCSS契約 |
| `static/app/state.js` | 変更 | セッション中の過去問再開位置を保持する状態 |
| `static/app/storage.js` | 変更 | 再開位置のlocalStorageキー、旧データのフォールバック、任意cloud payloadの読み書き |
| `static/app/main.js` | 変更 | 初回起動時に再開位置を読み込む |
| `static/app/shell.js` | 変更 | 出典切替時にexamKey単位の再開位置を読み込み、初期大問を決める |
| `static/app/practice.js` | 変更 | 大問/入力欄の最後の位置を保存し、続きからの復元と表示を行う |
| `static/app/exam.js` | 変更 | 中間回・最終回の結果画面で主CTAを切り替える |
| `scripts/check-ui-audit-contract.js` | 新規 | Node標準APIだけでCSS・保存契約・結果CTAの最低限の静的契約を検査する |
| `index.html` と `static/app/*.js` | 機械更新 | `scripts/bump-app-version.js` によるキャッシュversion同期。個別の処理変更はしない |

## 実行設計

- 実行方式: `SERIAL_ONLY`
- レーン数: 1
- `YUNA-A`: 全IMPLEMENTを依存順に実行する `SERIAL` 担当
- `YUNA-B`: なし。CSS、共有保存契約、`index.html`/module versionが重なるため安全な並列分割はできない。
- 共有状態: 現在の同一checkout、既存localStorage/cloud payload、`DESIGN.md`、既存の未コミット差分
- 競合条件: 開始時の既存差分以外の変更が検出された場合、上書きせず `PAUSED` として親へ返す。`write_set`外のファイル変更、旧保存データの破壊、module versionの一部不一致が出た場合も停止する。
- 統合担当: 親Agent
- 統合検証: T1〜T4完了後に、計画と全diffを照合し、Nodeチェッカー、主要モードのブラウザ操作、1280/375/320pxのDOM実測を行う。

## タスク

### T1: CSSの役割・寸法・共有幅レールを監査契約へ戻す

- 種別: `IMPLEMENT`
- 対応する指摘: F-01, F-02, F-03, F-04
- owner: `SERIAL`
- parallel_group: `なし`
- depends_on: `なし`
- write_set: `static/styles.css`
- read_set: `DESIGN.md`, `index.html`
- conflicts: 既存の未コミットCSS差分を消さない。問題文の状態表現やCTAの意味を変更しない。
- integration_owner: 親Agent
- 依存と未達時の扱い: CSSブロックの対象が現行コードと一致しない場合は推測で置換せず `NEEDS_CONTEXT`。Gate Bで狭幅の改行や操作領域が崩れた場合はT1内で局所修正し、次へ進まない。
- 対象ファイル: `static/styles.css`（`--signal`使用箇所、`.context-label`、`.utility-menu > summary`、`.contextbar`）
- 変更内容:
  1. `.cell.active` の選択枠と `.solution` の解説枠を、主CTA専用の `--signal` から `--ink`/`--line`系の非CTA役割へ移し、`--signal` の残存使用をCTA関連に限定する。選択状態は枠・背景・文字などの非色手がかりを維持する。
  2. `.context-label` を11px monoへ変更し、学校・進捗・方式/年度・試験回のラベルに同じ計算済み文字サイズを適用する。
  3. `.utility-menu > summary` の `min-height` を44pxにする。既存の `.studentManage summary` や他のsummaryの挙動は変えない。
  4. `.contextbar` の重複した `width: 100%` を削除し、共有レールの計算式を1つだけ残す。
- 検証（Gate A）: `rg -n --fixed-strings "var(--signal)" static/styles.css`、`node scripts/check-learning-catalog.js`。期待結果: signal使用箇所が主CTAと意図した役割だけ、カタログ契約OK。
- 検証（Gate B）: ローカル静的サーバーで過去問を開き、1280px・375px・320pxで `getBoundingClientRect()` と `getComputedStyle()` を取得する。`.context-label` は11px、`.utility-menu > summary` は高さ44px以上、`document.documentElement.scrollWidth === clientWidth`、`.shell`/`.contextbar`の左右レールが既存契約内であること。選択セル、解説枠、CTAの見た目を1回ずつ確認する。
- 受入基準: F-01〜F-04の各CSS差分が一意に確認でき、1280/375/320pxで横スクロールなし。主CTAのsignal、セル選択、解説枠、ラベル、summaryの操作可能性が役割別に維持される。
- コミット: `style(math-practice): align UI roles with design contract`

### T2: 過去問の最後の操作位置を保存し、続きから復元する

- 種別: `IMPLEMENT`
- 対応する指摘: F-05
- owner: `SERIAL`
- parallel_group: `なし`
- depends_on: `T1`
- write_set: `static/app/state.js`, `static/app/storage.js`, `static/app/main.js`, `static/app/shell.js`, `static/app/practice.js`, `scripts/check-ui-audit-contract.js`
- read_set: `static/app/catalog.js`, `static/app/dom.js`, `static/app/hooks.js`, `static/vendor/harness/cloud.js`, `README.md`
- conflicts: 既存のprogress/draftキー、問題ID、`cloudPayload().version`、旧payloadの意味を壊さない。`app.answerDrafts`へ予約キーを混ぜて既存の下書き集計を壊さない。`firstUnfinishedGroupIndex()`を旧データのfallbackとして残す。
- integration_owner: 親Agent
- 依存と未達時の扱い: 現行保存形式と異なるデータを検出したら読み取りを諦めて既存挙動へfallbackし、既存データを削除しない。クラウドpayloadが任意フィールドを受けないことが確認された場合は、ローカル保存を先に完了し、cloud位置同期は `WAITING_FOR_EVIDENCE` として独立記録する。
- 対象ファイル: 上記write_setの状態・保存・起動・演習導線
- 変更内容:
  1. examKey・正規化した生徒名にスコープする再開位置キーと、`load/save` helperを追加する。レコードは少なくとも `groupIndex` と、復元可能なら `fieldUid`/`cellIndex` を持つ。値がない・範囲外・形式不正なら無視する。
  2. 既存cloud payloadに任意の `position` フィールドを加え、旧payloadでは空値として扱う。ローカル生徒では既存キーへ保存し、ゲストでは保存しない。リセット時は位置もクリアする。
  3. 初回起動・`setCurrentExam()`・生徒切替で位置を読み込み、位置が有効ならその大問を初期表示する。
  4. 大問リスト、前後移動、セル選択などの最後の利用者位置を保存する。`continueStudying()` は保存位置を優先し、位置がない旧データでは従来の最初の未完了大問/空欄へfallbackする。
  5. start panelの補助文を、保存位置が有効な場合は「大問N・小問Mから再開」のように具体化する。初回の「▶ 最初の問題へ進む」は変更しない。全問完了時の見直し導線も壊さない。
  6. 「最後の位置」と「最初の未完了」のどちらを長期的な既定にするかは利用者観察で再評価できるよう、保存位置がない場合の既存fallbackを残す。
- 検証（Gate A）: `node --check static/app/main.js`、`node scripts/check-app-modules.js`、`node scripts/check-learning-catalog.js`、`node scripts/check-ui-audit-contract.js`。期待結果: 構文・module version・保存/表示契約が成功。
- 検証（Gate B）: 生徒データなしの初回でCTAが「▶ 最初の問題へ進む」のまま、1つの大問で入力後に別大問へ移動し、リロードまたは生徒再選択して「大問N・小問Mから再開」することを確認。旧データ（positionなし）は従来の最初の未完了へfallbackし、ゲスト表示は保存なしのまま。可能ならcloud payloadのposition有無を読み取り確認する。
- 受入基準: 新規位置レコードがexamKey・生徒単位で保存され、旧progress/draftだけでも起動でき、無効位置は安全にfallbackする。初回CTAの実装済み挙動を変えず、再開時に現在地が文言と画面の両方で一致する。
- コミット: `feat(math-practice): restore the last practice position`

### T3: 最終ミニ試験の完了画面に次行動の主CTAを残す

- 種別: `IMPLEMENT`
- 対応する指摘: F-06
- owner: `SERIAL`
- parallel_group: `なし`
- depends_on: `T2`
- write_set: `static/app/exam.js`
- read_set: `index.html`, `static/app/shell.js`, `static/app/hooks.js`, `static/app/datasets.js`
- conflicts: 新しい保存キーや試験結果形式を作らない。中間回の「第N回へ進む」と既存の再受験操作を維持し、主CTAを同時に2つ表示しない。
- integration_owner: 親Agent
- 依存と未達時の扱い: `nextExam()`の判定が現行データと異なる場合は中間回・最終回の実データを確認して停止。最終回で主CTAが2つになる場合はT3内でクラス切替を局所修正する。
- 対象ファイル: `static/app/exam.js`（`renderResult()`）
- 変更内容: `nextExam()`が存在する場合は現在の `nextExamBtn.cta` を表示し、`chooseExamBtn` は副操作として残す。存在しない最終回では `nextExamBtn` を隠し、既存の `chooseExamBtn` に `cta` を付けて「次の演習を選ぶ」など結果が分かる主操作文言へ切り替える。クリック先は既存の `hooks.openLearningPicker()` を再利用する。再受験ボタンは副操作のまま残す。
- 検証（Gate A）: `node --check static/app/exam.js`、`node scripts/check-exam.js`、`node scripts/check-learning-catalog.js`。期待結果:試験契約とカタログ契約が成功。
- 検証（Gate B）: 中間回の提出後は「第N回へ進む」が主CTA、最終回の提出後は「次の演習を選ぶ」が主CTAとして1つだけ表示され、クリックで出典/回カタログが開く。再受験と結果の解説は引き続き利用できる。
- 受入基準: `nextExam()`の有無にかかわらず、完了画面に次行動を表す表示中の主CTAが1つあり、既存の選択・再受験・結果確認を壊さない。
- コミット: `feat(math-practice): keep a next action on final exam results`

### T4: キャッシュ契約と統合検証を更新する

- 種別: `IMPLEMENT`
- 対応する指摘: F-01〜F-06の統合受入
- owner: `SERIAL`
- parallel_group: `なし`
- depends_on: `T3`
- write_set: `index.html`, `static/app/*.js`（`scripts/bump-app-version.js`の機械更新範囲）、`scripts/check-ui-audit-contract.js`
- read_set: `README.md`, `scripts/bump-app-version.js`, 全T1〜T3差分
- conflicts: 処理内容を追加変更しない。version文字列以外の既存module差分を戻さない。commit/push/deployは実行しない。
- integration_owner: 親Agent
- 依存と未達時の扱い: version不一致や既存チェッカー失敗が出た場合は公開を進めず、T1〜T3の原因へ戻る。既存差分と新規差分を分けられない場合は `PAUSED`。
- 対象ファイル: `scripts/check-ui-audit-contract.js`、`index.html`、`static/app/*.js`
- 変更内容: Node標準APIのみのfocused contract checkerを追加またはT2で作成したものを完成させ、CSS使用箇所、位置helper/任意payload、最終CTA切替の存在を検査する。`node scripts/bump-app-version.js 20260907-ui-audit` を実行し、indexと全module importのversionを同期する。
- 検証（Gate A）: `node scripts/check-ui-audit-contract.js`、`node scripts/check-app-modules.js`、`node --check static/app/main.js`。期待結果: 全て終了コード0。
- 検証（Gate B）: ローカル静的サーバーで過去問とミニ試験を代表操作し、console error、初回開始、再開、結果CTA、解説モーダル、カタログ選択を確認する。1280px・375px・320pxでscrollWidth/clientWidth、主要レール、44px操作領域を測定する。
- 受入基準: versionがindex/module間で一致し、focused checkerとREADME記載の既存checkerが通る。T1〜T3の受入条件が同時に満たされる。`static/config.json` 404は設定未生成として別記し、問題表示・採点・解説の失敗と混同しない。
- コミット: `test(math-practice): add UI audit contracts and sync module version`

### T5: 計画全体の最終照合（統合担当）

- 種別: `VERIFY_ONLY`
- 対応する指摘: F-01〜F-06
- owner: `SERIAL`
- parallel_group: `なし`
- depends_on: `T4`
- write_set: `なし`
- read_set: 計画書、`git diff`、`git status`、T1〜T4の対象ファイルと検証出力
- conflicts: 恒久ファイルを変更しない。commit/push/deployしない。
- integration_owner: 親Agent
- 依存と未達時の扱い: 失敗は `NOT_REPRODUCED` ではなく、再現条件・エラー・最初の未達タスクを記録する。ユーザー観察は `WAITING_FOR_EVIDENCE` として残し、T1〜T4の完了を取り消さない。
- 検証（Gate C）: `git diff --check`、`git status --short`、計画の全タスク/受入基準/対象外との照合、README記載の関連Node checker一式。実ブラウザで主要導線と3幅を再確認する。
- 受入基準: T1〜T4の全タスクにfreshな検証証拠があり、意図しないファイル・秘密情報・既存差分の巻き戻しがなく、未確認事項が明示されている。
- コミット: なし（検証のみ）

## トレーサビリティ

| 指摘ID | 重大度/確度 | 概要 | 対応タスク | 受入チェック |
|---|---|---|---|---|
| F-01 | P1 / CODE_INFERRED | CTA色の非CTA流用 | T1, T4 | signal使用箇所、セル/解説/CTAのcomputed style |
| F-02 | P2 / CODE_INFERRED | context-labelが10px | T1, T4 | 11px computed style、320/375の改行 |
| F-03 | P2 / CODE_INFERRED | utility summaryが42px | T1, T4 | DOM rect 44px以上、フォーカス |
| F-04 | P3 / CODE_INFERRED | contextbar width重複 | T1, T4 | 3幅のレール、scrollWidth/clientWidth |
| F-05 | 影響3/負荷2 / CODE_INFERRED | 再開位置が最初の未完了に固定 | T2, T4 | 位置保存/表示、旧データ・ゲストfallback |
| F-06 | 影響3/負荷1 / CODE_INFERRED | 最終ミニ試験の次行動が弱い | T3, T4 | 中間/最終回で主CTAが1つ |
| F-07 | NOT_REPRODUCED | 初回CTAが「つづきから」の疑い | 対応しない | 実ブラウザで「最初の問題へ進む」を確認済み |

## EXTERNAL_EVIDENCE / 利用者観察

- `EXTERNAL_EVIDENCE`: 大問を複数行き来する利用者が、最後の位置と最初の未完了位置のどちらを「続き」と期待するか。T2は最後の操作位置を保存し、位置がない旧データは従来fallbackにするため、観察がなくても安全に実装できる。
- `EXTERNAL_EVIDENCE`: 最終ミニ試験後に「次の演習を選ぶ」と「間違いを復習する」のどちらを主CTAにすべきか。T3では既存の選択導線を主CTAにする最小案を採用し、利用者観察で再評価する。

## リスクとロールバック

- 再開位置の保存が壊れると、位置だけがfallbackする設計にし、progress/draftを消去・上書きしない。不具合時は新しいpositionキー/任意payloadの読み込みを無効化し、既存の `firstUnfinishedGroupIndex()` へ戻せる。
- cloud payloadの任意フィールドを扱えない環境では、position同期だけを停止し、既存のprogress/drafts同期を維持する。旧payloadのversionを変更しない。
- CSS変更が狭幅の高さ・改行へ影響した場合は、F-01〜F-04の局所差分だけを戻し、既存のユーザー差分には触れない。
- T4のversion更新は機械的なキャッシュ同期に限定し、内容の変更はT1〜T3の差分だけにする。
- ロールバックは対象ファイルの新規差分を確認して親Agentが判断する。`git reset --hard`、`git clean`、既存差分の削除は行わない。

## 計画セルフレビュー

- [x] F-01〜F-07をトレーサビリティに記載した。
- [x] `IMPLEMENT` / `VERIFY_ONLY` を全タスクに付け、AfterをTARGETとして扱った。
- [x] 共有CSS・保存契約・cache versionのためSERIAL_ONLYとした。
- [x] 既存保存、安定ID、問題データ、クラウドの互換性を変更禁止として明記した。
- [x] Gate A/B/C、未達時、EXTERNAL_EVIDENCE、ロールバックを分離した。
