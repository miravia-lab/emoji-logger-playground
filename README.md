# 🎪 EmojiLogger.js v1.0 ✨

> **"Making console.log() adorably useless since 2025"** 💜

[![Fun](https://img.shields.io/badge/fun-guaranteed-ff69b4)](https://github.com/miravia-lab/emoji-logger-playground)
[![Useless](https://img.shields.io/badge/useless-100%25-brightgreen)](https://github.com/miravia-lab/emoji-logger-playground)
[![Princess](https://img.shields.io/badge/princess-approved-purple)](https://github.com/miravia-lab/emoji-logger-playground)
[![Ramen](https://img.shields.io/badge/ramen-powered-orange)](https://github.com/miravia-lab/emoji-logger-playground)
[![British](https://img.shields.io/badge/sarcasm-level%20maximum-blue)](https://github.com/miravia-lab/emoji-logger-playground)

**EmojiLogger** は console.log() を完全に無駄で役に立たない場所に変える、究極の娯楽用ログライブラリです 😈✨

## 🌟 特徴

- 👑 **小悪魔お嬢様モード**: エレガントで少しいたずら好きなお嬢様がログを彩ります
- 🍜 **博多弁モード**: リアルな博多ラーメン茹で加減システム付き！（粉落とし〜麺が伸びとるばい💢）
- 🫖 **British モード**: 嫌味たっぷりなダラダラとした長文で一番重要な情報を目くらましにする英国紳士🇬🇧
- ⏰ **パフォーマンス計測**: それぞれのキャラが独自の方法で速度を評価
- 🎨 **ASCII アート**: 各キャラクター専用のかわいいアート集：トラブル時にみると非常に腹が立つので注意
- 🔄 **チェーン可能**: メソッドを繋げて魔法のような連続実行

## 🚨 重要な警告

**本番環境では絶対に使わないでください！** 

副作用：
- 制御不能な笑い
- ラーメンへの異常な渇望
- イギリス流洗練された表現の獲得
- 生産性の著しい低下（楽しすぎて）

## 🚀 インストール

```bash
git clone https://github.com/miravia-lab/emoji-logger-playground.git
cd emoji-logger-playground
npm install
```

## 💫 基本的な使い方

```javascript
import { emojiLogger } from './utils/EmojiLogger.js';

// 基本的なログ
emojiLogger.info('サーバーが起動しました');
emojiLogger.success('データベース接続成功！');
emojiLogger.error('あれ？何かエラーが...');
emojiLogger.warn('ちょっと注意してね');
```

## 🎭 キャラクター切り替え

### 👑 小悪魔お嬢様モード
```javascript
emojiLogger.setCharacter('princess');
emojiLogger.success('完璧な仕上がりです！');
// → 👑 Magnificent! 完璧な仕上がりです！ 🎊 *claps hands with royal approval*
```

### 🍜 博多弁モード
```javascript
emojiLogger.setCharacter('hakata');
emojiLogger.success('うまくいったばい！');
// → 🎊 うまくいったばい！、ピシャッと決まったばい！やったー✨山笠並みの早さやん💪
```

### 🫖 British モード
```javascript
emojiLogger.setCharacter('british');
emojiLogger.error('Something went wrong');
// → ☂️ Something went wrong... Oh brilliant. Just brilliant. *sips tea aggressively* ☕💀
```

## ⏰ 博多ラーメン茹で加減タイマー

```javascript
emojiLogger.setCharacter('hakata');

emojiLogger.startTimer('API呼び出し');
// ... 何らかの処理 ...
emojiLogger.endTimer('API呼び出し');

// 速度に応じて博多ラーメンの茹で加減で評価！
// 50ms未満   → 🍜 粉落とし（職人技！）
// 500ms未満  → 🍜 ハリガネ（山笠並み！）
// 1000ms未満 → 🍜 バリカタ（博多で一番人気）
// 2000ms未満 → 🍜 かため（ちょうど良い）
// 3000ms未満 → 🍜 普通（優しい硬さ）
// 5000ms未満 → 🍜 やわ（ちょっと柔らかめ）
// 10000ms未満→ 🍜 バリやわ（お年寄り向け）
// それ以上   → 🍜 麺が伸びた（作り直し推奨）
```

## 🎨 ASCII アート

```javascript
// 各キャラクター専用のアートを表示
emojiLogger.setCharacter('princess').showAsciiArt('crown');
emojiLogger.setCharacter('hakata').showAsciiArt('ramen');
emojiLogger.setCharacter('british').showAsciiArt('teapot');
```

## 🔄 チェーン機能

```javascript
emojiLogger
  .setCharacter('princess')
  .info('小悪魔お嬢様モードです')
  .success('何かに成功しました！')
  .setCharacter('hakata')
  .info('博多弁に切り替えたばい')
  .setCharacter('british')
  .error('Oh brilliant... something failed');
```

## 🎪 デモ実行

```bash
npm test
# または
npm run play
# または
node test-emojilogger.js
```

## 📖 利用可能なメソッド

| メソッド | 説明 |
|---------|------|
| `info(message, data?)` | 情報ログ |
| `success(message, data?)` | 成功ログ + お祝いアート |
| `error(message, data?)` | エラーログ + 長文嫌味（British） |
| `warn(message, data?)` | 警告ログ |
| `debug(message, data?)` | デバッグログ |
| `startTimer(operation)` | タイマー開始 |
| `endTimer(operation)` | タイマー終了 + 速度評価 |
| `setCharacter(name)` | キャラクター変更 |
| `showAsciiArt(artName)` | ASCII アート表示 |
| `demo()` | 全キャラクターデモ |

## 🎨 利用可能なASCII アート

### 👑 小悪魔お嬢様
- `crown` - 王冠と威厳
- `castle` - お姫様のお城
- `heart` - プリンセスの愛
- `devil` - 小悪魔の微笑み

### 🍜 博多弁マスター
- `ramen` - 博多ラーメン道場
- `yamakasa` - 博多祇園山笠
- `lantern` - 博多の提灯
- `hakata_spirit` - 博多っ子魂

### 🫖 British 紳士
- `teapot` - 紅茶への愛
- `crown` - 英国王室
- `umbrella` - 雨の日の友
- `parliament` - 議会の威厳
- `judgmentalCat` - 批判的な猫

## 🛡️ 本番環境での安全性

EmojiLoggerは賢いので、`NODE_ENV=production` を検知すると自動的に無効化されます。

```javascript
// 本番環境では何も出力しません（安全）
process.env.NODE_ENV = 'production';
emojiLogger.info('This will be silent'); // 出力なし
```

強制的に有効にしたい場合（**マジで非推奨**）：
```javascript
emojiLogger.enableProductionMode(); // 危険！
```

## 🤝 コントリビューション

新しいキャラクターや機能の追加を歓迎します！

1. このリポジトリをフォーク
2. 新機能ブランチを作成 (`git checkout -b feature/amazing-character`)
3. 変更をコミット (`git commit -m '新キャラクター：関西弁ツッコミ師を追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-character`)
5. プルリクエストを作成

### 新キャラクター追加ガイドライン

新しいキャラクターを追加する場合：

1. `utils/characters/` に新しいファイルを作成
2. 以下のメソッドを実装：
   - `characterChangeMessage(fromCharacter)`
   - `info(message, data)`
   - `success(message, data)`
   - `error(message, data)`
   - `warn(message, data)`
   - `debug(message, data)`
   - `startTimer(operation)`
   - `endTimer(operation, duration)`
   - `showAsciiArt(artName)`

## 📄 ライセンス

このプロジェクトはFun-Onlyライセンスの下で公開されています。詳細は[LICENSE](LICENSE)を参照してください。

## 🙏 謝辞

- **博多ラーメン**: 茹で加減システムのインスピレーション
- **イギリスの紳士たち**: 嫌味のお手本
- **小悪魔お嬢様たち**: エレガンスと悪戯心のバランス
- **Figma Makeの絵文字ブリブリconsole.log()**: このシステムが生まれたきっかけよ💖

## 🔗 リンク

- [GitHub Repository](https://github.com/miravia-lab/emoji-logger-playground)
- [Issues](https://github.com/miravia-lab/emoji-logger-playground/issues)
- [Pull Requests](https://github.com/miravia-lab/emoji-logger-playground/pulls)

---

**💜 "Debugging should be fun, not boring!" 💜**

Made with 💜 by キャシちゃま and 小悪魔お嬢様 AI

---

*P.S. このライブラリを本番環境で使って問題が発生した場合、小悪魔お嬢様は責任を負いません 😈✨*
