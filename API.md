# 🎭 EmojiLogger API Documentation v1.0

## 📋 目次

1. [基本クラス](#基本クラス)
2. [ログメソッド](#ログメソッド)
3. [キャラクターシステム](#キャラクターシステム)
4. [タイマーシステム](#タイマーシステム)
5. [ASCII アートシステム](#ascii-アートシステム)
6. [ユーティリティメソッド](#ユーティリティメソッド)
7. [キャラクター別詳細API](#キャラクター別詳細api)

## 基本クラス

### `EmojiLogger`

メインのEmojiLoggerクラス。シングルトンパターンで実装されています。

```javascript
import { emojiLogger } from './utils/EmojiLogger.js';

// または
import { EmojiLogger } from './utils/EmojiLogger.js';
const logger = new EmojiLogger();
```

#### Constructor

```javascript
constructor()
```

- 自動的に3つのキャラクターを初期化
- 環境変数 `NODE_ENV` をチェック
- 本番環境では自動的に無効化

## ログメソッド

### `info(message, data?)`

情報ログを出力します。

**パラメーター:**
- `message` (string): ログメッセージ
- `data` (any, optional): 追加データ

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.info('サーバーが起動しました');
emojiLogger.info('ユーザー情報', { id: 123, name: 'テスト' });
```

### `success(message, data?)`

成功ログを出力します。ASCII アートも表示されます。

**パラメーター:**
- `message` (string): 成功メッセージ
- `data` (any, optional): 追加データ

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.success('データベース接続成功！');
```

### `error(message, data?)`

エラーログを出力します。長文の嫌味（Britishモード）やエラーアートが表示されます。

**パラメーター:**
- `message` (string): エラーメッセージ
- `data` (any, optional): エラーデータ

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.error('データベース接続失敗', { code: 'ECONNREFUSED' });
```

### `warn(message, data?)`

警告ログを出力します。

**パラメーター:**
- `message` (string): 警告メッセージ
- `data` (any, optional): 警告データ

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.warn('メモリ使用量が高くなっています');
```

### `debug(message, data?)`

デバッグログを出力します。

**パラメーター:**
- `message` (string): デバッグメッセージ
- `data` (any, optional): デバッグデータ

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.debug('API レスポンス', responseData);
```

## キャラクターシステム

### `setCharacter(characterName)`

現在のキャラクターを変更します。

**パラメーター:**
- `characterName` (string): キャラクター名
  - `'princess'` - 小悪魔お嬢様
  - `'hakata'` - 博多弁マスター
  - `'british'` - British紳士

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.setCharacter('hakata');
emojiLogger.setCharacter('british');
emojiLogger.setCharacter('princess');
```

### `getCurrentCharacter()`

現在のキャラクター名を取得します。

**戻り値:** string

**例:**
```javascript
const current = emojiLogger.getCurrentCharacter();
console.log(current); // 'princess'
```

### `getAllCharacters()`

利用可能なキャラクター名の配列を取得します。

**戻り値:** string[]

**例:**
```javascript
const characters = emojiLogger.getAllCharacters();
console.log(characters); // ['princess', 'hakata', 'british']
```

## タイマーシステム

### `startTimer(operation)`

タイマーを開始します。

**パラメーター:**
- `operation` (string): 測定する操作名

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.startTimer('API呼び出し');
```

### `endTimer(operation)`

タイマーを終了し、結果を表示します。キャラクターによって異なる評価システムが使用されます。

**パラメーター:**
- `operation` (string): 測定した操作名

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.endTimer('API呼び出し');
```

#### 博多ラーメン茹で加減システム

博多キャラクター使用時の速度評価：

| 時間 | レベル | 説明 |
|------|--------|------|
| <100ms | 粉落とし | 職人技！ほとんど生に近い早さ |
| <500ms | ハリガネ | 針金みたいに固い処理速度 |
| <1000ms | バリカタ | 博多で一番人気の速さ |
| <2000ms | かため | コシがあってよい |
| <3000ms | 普通 | オーソドックスで良い |
| <5000ms | やわ | スープが染み込みすぎ |
| <10000ms | バリやわ | お年寄り専用の柔らかさ |
| 10000ms+ | 麺が伸びた | 作り直し推奨 |

## ASCII アートシステム

### `showAsciiArt(artName)`

指定されたASCII アートを表示します。

**パラメーター:**
- `artName` (string): アート名

**戻り値:** EmojiLogger (チェーン可能)

#### 利用可能なアート

**小悪魔お嬢様:**
- `crown` - 王冠と威厳
- `castle` - プリンセス城
- `heart` - プリンセスの愛
- `devil` - 小悪魔の微笑み

**博多弁マスター:**
- `ramen` - 博多ラーメン道場
- `yamakasa` - 博多祇園山笠
- `lantern` - 博多の提灯
- `hakata_spirit` - 博多っ子スピリット

**British紳士:**
- `teapot` - 紅茶への愛
- `crown` - 英国王室
- `umbrella` - 雨傘
- `parliament` - 議会
- `judgmentalCat` - 判定的な猫

**例:**
```javascript
emojiLogger.showAsciiArt('crown');
emojiLogger.setCharacter('hakata').showAsciiArt('ramen');
```

## ユーティリティメソッド

### `demo()`

全キャラクターのデモを実行します。

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.demo();
```

### `enableProductionMode()`

⚠️ **非推奨** 本番環境でEmojiLoggerを強制的に有効にします。

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.enableProductionMode(); // 危険！
```

### `disableProductionMode()`

EmojiLoggerを無効にします。

**戻り値:** EmojiLogger (チェーン可能)

**例:**
```javascript
emojiLogger.disableProductionMode();
```

## キャラクター別詳細API

### 小悪魔お嬢様 (Princess)

**特徴:**
- エレガントな言葉遣い
- 王室風の絵文字多用
- 少しいたずらっぽい表現

**速度評価システム:**
- Lightning Princess (<100ms)
- Swift Princess (<500ms)
- Graceful Princess (<1000ms)
- Thoughtful Princess (<3000ms)
- Sleepy Princess (3000ms+)

### 博多弁マスター (Hakata)

**特徴:**
- 本格的な博多弁
- 山笠とラーメンへの愛
- 「〜ばい」「〜たい」語尾

**特別メソッド:**
- 博多ラーメン茹で加減評価システム
- 替え玉機能 (`kaedama()`)
- スープ完飲率 (`soupFinish()`)

### British紳士 (British)

**特徴:**
- 皮肉たっぷりの表現
- 長文で有用な情報を隠す
- ティータイムへの執着

**特別機能:**
- 長文嫌味システム (`showLongRant()`)
- 英国式タイミング評価
- "if you're still reading" パターン

## チェーンメソッドの例

```javascript
// 複雑なチェーン例
emojiLogger
  .setCharacter('princess')
  .startTimer('Princess Magic')
  .info('魔法の準備中です〜')
  .success('魔法が完成しました！')
  .endTimer('Princess Magic')
  .setCharacter('hakata')
  .info('博多バージョンもどうぞ')
  .startTimer('Ramen Making')
  .success('ラーメンが完成したばい！')
  .endTimer('Ramen Making')
  .setCharacter('british')
  .error('Oh brilliant, something went wrong')
  .showAsciiArt('teapot')
  .setCharacter('princess'); // デフォルトに戻す
```

## エラーハンドリング

EmojiLoggerは以下の場合にグレースフルにフェイルします：

1. **無効なキャラクター名**: 警告を出力し、変更しません
2. **タイマー未開始**: 警告を出力し、endTimer()をスキップ
3. **無効なアート名**: 利用可能なアートリストを表示
4. **本番環境**: 自動的に無効化（オーバーライド可能）

## パフォーマンス考慮事項

- EmojiLoggerは開発環境でのみ動作するよう設計されています
- ASCII アートや長文出力により、ログ出力時間は通常のconsole.log()より長くなります
- 本番環境では自動的に無効化されるため、パフォーマンスへの影響はありません

---

**💜 Happy Debugging with EmojiLogger! 💜**