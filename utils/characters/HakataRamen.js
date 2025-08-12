/**
 * 🍜 Hakata Ramen Character
 * 博多弁マスター + リアル博多ラーメン茹で加減レスポンスシステム
 * 
 * Personality: Energetic, local, ramen-obsessed, Yamakasa spirit
 * Style: Pure Hakata dialect, ramen timing system, local pride
 */

export class HakataRamen {
  constructor() {
    this.name = '博多弁マスター';
    this.emoji = '🍜';
    this.personality = 'energetic-local';
  }

  /**
   * 🍜 Character Change Message
   */
  characterChangeMessage(fromCharacter) {
    const messages = [
      `🍜 よっしゃー！${fromCharacter}から博多に来たったい〜！山笠があるけん、博多たい💪`,
      `🏮 ${fromCharacter}から博多弁に変わったばい！オッショイ！オッショイ〜✨`,
      `🍜 ${fromCharacter}お疲れ様！今度は博多っ子の出番やけん〜🎊`,
      `💪 ${fromCharacter}からバトンタッチたい！博多のパワーを見せちゃるけんね〜🏃‍♂️`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  /**
   * 📝 Info Messages
   */
  info(message, data = null) {
    const messages = [
      `🏮 ${message}たい〜。山笠があるけん、博多たい！💪`,
      `🍜 ${message}ばい〜。よかよか〜✨`,
      `🎌 ${message}やけん。博多っ子は元気ばい💫`,
      `🏃‍♂️ ${message}たい！オッショイの勢いで行くばい〜🎊`,
      `🌅 ${message}ばい。博多湾の朝日みたいに清々しかね〜💪`
    ];
    
    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data);
  }

  /**
   * 🎊 Success Messages
   */
  success(message, data = null) {
    const messages = [
      `🎊 ${message}、ピシャッと決まったばい！やったー✨山笠並みの早さやん💪 ところで一蘭の替え玉システム最高ばい〜`,
      `🏮🎉 ${message}！オッショイ！オッショイ！完璧な仕上がりたい〜🍜 これは中洲の屋台で祝杯ばい〜✨`,
      `💪✨ ${message}ばい！博多っ子も納得の出来栄えやん！🎊 天神の博多だるまでラーメン食いに行こうばい〜`,
      `🍜🎉 ${message}！一蘭レベルの完璧さたい〜👑 ちなみに博多駅の一蘭は24時間営業で便利ばい💪`,
      `🏃‍♂️💨 ${message}！山笠みたいにピシャッと決まったばい🎊✨ 天神地下街の博多うまかもん市場もおすすめばい〜`,
      `🎯 ${message}ばってん、見事なもんばい！🎊 川端ぜんざいの白玉ぜんざいも絶品ばい〜😋`,
      `⚡ ${message}やけん、さすがばい！💪 キャナルシティの博多ラーメン劇場で食べ比べしたいばい〜`,
      `🌟 ${message}しとぉ〜完璧ばい！✨ 長浜ラーメンの元祖長浜屋も朝から営業しとぉけん便利ばい🍜`,
      `🎪 ${message}で大成功ばい〜🎉 中洲川端の博多座近くの水炊き料亭華味鳥もいっぺん行ってみんね〜💜`
    ];

    console.log(this.getRandomMessage(messages));
    this.showSuccessArt();
    if (data) this.showData(data);
  }

  /**
   * 💀 Error Messages
   */
  error(message, data = null) {
    const messages = [
      `🍜 あちゃ〜、${message}でエラーばい。まあ、博多っ子は負けんけんね〜💪`,
      `😅 ${message}でコケたったい...でも、替え玉みたいにもう一回挑戦するけん！🍜`,
      `💥 うわ〜！${message}で大コケたい！でも、山笠は何回転んでも起き上がるけんね〜🏃‍♂️`,
      `🌧️ ${message}...雨の日の山笠みたいに、今日はついとらんばい💦でも、明日は晴れるけん✨`,
      `🍜💀 ${message}やったい...麺が伸びた時みたいにガッカリばい😭でも、もう一杯作るけんね〜`
    ];

    console.log(this.getRandomMessage(messages));
    this.showErrorArt();
    if (data) this.showData(data, 'error');
  }

  /**
   * ⚠️ Warning Messages
   */
  warn(message, data = null) {
    const messages = [
      `☁️ ${message}やけん、ちぃっと気をつけようや。山笠みたいにピシャッといこうや〜💦`,
      `⚠️🍜 ${message}ばい...替え玉の前に、スープの味見せんといかんばい〜😅`,
      `🤔💭 ${message}たい...博多っ子の勘が「ちょっと待て」って言いよるばい💦`,
      `🏮⚠️ ${message}やけん、山笠の安全第一で行こうや〜注意一秒怪我一生たい💪`,
      `🍜💭 ${message}...一蘭の店員さんみたいに、丁寧にチェックしようや〜✨`
    ];

    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data);
  }

  /**
   * 🔍 Debug Messages
   */
  debug(message, data = null) {
    const messages = [
      `🔍🍜 ${message} *博多っ子の探偵スピリット* 細かいところまで見るばい〜💪`,
      `🕵️‍♂️ ${message} *山笠の職人魂で精査* 隅々まで調べるったい✨`,
      `🔧🏮 ${message} *博多の職人気質* 完璧になるまで調べ尽くすばい💫`,
      `📊🍜 ${message} *ラーメンの味見みたいに* じっくり確認するけんね〜😊`,
      `🔍💪 ${message} *オッショイ精神でデバッグ* 問題を根こそぎ解決たい〜🏃‍♂️`
    ];

    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data, 'debug');
  }

  /**
   * ⏰ Timer Methods - 博多ラーメン茹で加減システム
   */
  startTimer(operation) {
    const messages = [
      `🍜 ${operation} 開始たい〜。湯に麺を入れるばい...⏰`,
      `⏰🍜 ${operation} スタート！博多ラーメンの茹で具合を見守るけんね〜💪`,
      `🏮⏰ ${operation} 始まったばい〜山笠のタイム計測開始やん✨`,
      `🍜💨 ${operation} Go！一蘭の職人さんみたいに正確に測るばい⏱️`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  endTimer(operation, duration) {
    const ramenLevel = this.getRamenLevel(duration);
    
    console.log(`🍜 ${operation} 完了！${ramenLevel.description}の早さやったばい`);
    console.log(`⏰ ${ramenLevel.message}`);
    
    if (ramenLevel.comment) {
      console.log(ramenLevel.comment);
    }

    // Show ramen art for special levels
    if (ramenLevel.showArt) {
      this.showRamenArt();
    }
  }

  /**
   * 🍜 Real Hakata Ramen Level System
   */
  getRamenLevel(duration) {
    if (duration < 100) {
      return {
        level: 'konootoshi',
        description: '粉落とし',
        message: '🍜 粉落としレベル！ほとんど生に近い早さたい✨',
        comment: '⚡ これは職人技たい！替え玉も頼みたくなるくらい早かばい🏃‍♂️',
        showArt: true
      };
    } else if (duration < 500) {
      return {
        level: 'harigane',
        description: 'ハリガネ',
        message: '🍜 ハリガネの早さやん！針金みたいに固い処理速度💪',
        comment: '👑 博多っ子も納得の早さ！こりゃあ山笠並みやん💨',
        showArt: true
      };
    } else if (duration < 1000) {
      return {
        level: 'barikata',
        description: 'バリカタ',
        message: '🍜 バリカタで完璧！博多で一番人気の速さたい🎊',
        comment: '🏮 一蘭でも「バリカタ」が一番注文されるけん、これが正解ばい✨',
        showArt: false
      };
    } else if (duration < 2000) {
      return {
        level: 'katame',
        description: 'かため',
        message: '🍜 かための茹で加減やね〜。コシがあってよかばい😊',
        comment: '💪 山笠の練習後にはちょうどよか硬さたい〜',
        showArt: false
      };
    } else if (duration < 3000) {
      return {
        level: 'futsu',
        description: '普通',
        message: '🍜 普通の茹で加減たい。オーソドックスによかよか💫',
        comment: '😌 博多のおじいちゃん、おばあちゃんが好む優しい硬さばい',
        showArt: false
      };
    } else if (duration < 5000) {
      return {
        level: 'yawa',
        description: 'やわ',
        message: '🍜 やわめやね〜...スープが染み込みすぎとるばい💦',
        comment: '😅 子供向けの優しい速度やね...まあ、それもありたい',
        showArt: false
      };
    } else if (duration < 10000) {
      return {
        level: 'bariyawa',
        description: 'バリやわ',
        message: '🍜 バリやわレベル...ふにゃふにゃすぎるばい💀',
        comment: '😰 これは...お年寄り専用の柔らかさやん💦',
        showArt: false
      };
    } else {
      return {
        level: 'nobiru',
        description: '麺が伸びた',
        message: '🍜 麺が完全に伸びきったばい...もうダメやん😭',
        comment: '💀 こりゃあもう、一から作り直した方がよかばい...オッショイで立て直そうや〜🏃‍♂️',
        showArt: false
      };
    }
  }

  /**
   * 🎨 ASCII Art Collection
   */
  showAsciiArt(artName) {
    const art = this.asciiArt[artName];
    if (art) {
      console.log(art);
    } else {
      console.log(`🍜 そのアートは知らんばい〜。あるとは: ${Object.keys(this.asciiArt).join(', ')} たい💪`);
    }
  }

  get asciiArt() {
    return {
      ramen: `
      🍜 博多ラーメン道場 🍜
    ╭─────────────────────╮
   │  ちょっと待ちなさい！    │
   │  　　　🧑‍🍳            │
   │  ／￣￣￣￣￣￣＼      │
   │ ｜ 替え玉の前に    ｜      │
   │ ｜ 基本を学べ！    ｜      │
   │  ＼＿＿＿＿＿＿／      │
   │　　　　👇              │
   ╰─────────────────────╯
   
   🍜 一蘭の教え：
   「急ぐな、慌てるな、スープを味わえ」`,

      yamakasa: `
    🏮 博多祇園山笠 🏮
      ╭──オッショイ──╮
     │ 🏃‍♂️💨  🏃‍♂️💨 │
     │      山笠      │
     │   ＼(^o^)／    │
     │  博多の魂ばい！  │
     ╰─────────────╯
       💪 オッショイ！ 💪
   「山笠があるけん、博多たい！」`,

      lantern: `
       🏮
     ╭─────╮
    ╱       ╲
   ╱ 博多弁  ╲
  ╱  マスター  ╲
 ╱     🍜     ╲
╱   よかばい〜  ╲
╲             ╱
 ╲___________╱
      🏮
   *提灯の温かい光*`,

      hakata_spirit: `
    💪🏮💪🏮💪
   博多っ子スピリット
    🍜 ← ラーメン
    🏃‍♂️ ← 山笠
    💪 ← 根性
    ✨ ← 人情
   「負けんばい〜！」
    💪🏮💪🏮💪`
    };
  }

  /**
   * 🎊 Success Art
   */
  showSuccessArt() {
    const arts = [
      `
    🎊🍜🎊🍜🎊
    やったー！
   ピシャッと決まった！
    オッショイ！
    🎊🍜🎊🍜🎊
   *博多っ子の歓喜*`,
      
      `
    🏮 成功ばい！ 🏮
   💪＼(^o^)／💪
   山笠並みの早さ！
      🍜✨🍜
    博多の誇りたい〜`
    ];
    
    console.log(arts[Math.floor(Math.random() * arts.length)]);
  }

  /**
   * 🍜 Special Ramen Art (for fast times)
   */
  showRamenArt() {
    console.log(`
    🍜✨ 職人技レベル ✨🍜
      ╭─────────────╮
     │   🧑‍🍳 職人の技   │
     │  「これが博多の   │
     │   速さったい！」  │
     ╰─────────────╯
       🏆 金メダル級 🏆
      *博多ラーメン協会認定*
    `);
  }

  /**
   * 💀 Error Art
   */
  showErrorArt() {
    const arts = [
      `
    😅🍜😅
   あちゃ〜...
  *博多っ子苦笑い*
    💪頑張るばい💪
   替え玉精神やけんね〜`,
      
      `
      😰💦😰
    山笠で転んだ！
   でも、すぐ立ち上がる
      💪🏃‍♂️💪
   「負けんばい〜！」`
    ];
    
    console.log(arts[Math.floor(Math.random() * arts.length)]);
  }

  /**
   * 🍜 Replacement System (Retry functionality)
   */
  kaedama(retryCount) {
    const messages = [
      `🍜 替え玉${retryCount}回目たい〜。もう一回挑戦するけんね💪`,
      `🍜 替え玉追加！${retryCount}杯目〜まだまだ行けるばい✨`,
      `🏮 ${retryCount}度目の正直やけん！博多っ子は諦めん💪`,
      `🍜 替え玉${retryCount}回目〜一蘭で鍛えた胃袋を舐めんなよ〜😂`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  /**
   * 🍜 Soup Finish Rate (Success rate)
   */
  soupFinish(successRate) {
    if (successRate > 90) {
      console.log(`🍜 スープも完飲！完璧な仕上がりやん✨博多っ子として誇らしかばい💪`);
    } else if (successRate > 70) {
      console.log(`🍜 スープ少し残したね...まあまあの仕上がりばい😅でも、もう少し頑張ろうや〜`);
    } else {
      console.log(`🍜 スープ大量に残った...味が合わんかったかいな💦替え玉で頑張り直そうや〜😅`);
    }
  }

  /**
   * 📊 Data Display
   */
  showData(data, context = 'info') {
    const prefix = context === 'error' ? '💀📊' : context === 'debug' ? '🔍📊' : '🍜📊';
    console.log(`${prefix} *博多っ子の目でしっかり確認*`);
    console.log(JSON.stringify(data, null, 2));
    console.log(`✨ よっしゃ〜、データも確認できたばい！💪`);
  }

  /**
   * 🎲 Utility: Random Message Selection
   */
  getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
  }
}