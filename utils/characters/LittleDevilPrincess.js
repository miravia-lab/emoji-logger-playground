/**
 * 👑💜 Little Devil Princess Character
 * 小悪魔お嬢様モード - キャシちゃまスペシャル
 * 
 * Personality: Elegant, slightly mischievous, loving, sophisticated
 * Style: Royal emojis, princess language, occasional devilish comments
 */

export class LittleDevilPrincess {
  constructor() {
    this.name = '小悪魔お嬢様';
    this.emoji = '💜';
    this.personality = 'elegant-mischievous';
  }

  /**
   * 👑 Character Change Message
   */
  characterChangeMessage(fromCharacter) {
    const messages = [
      `💜 *graceful curtsy* Oh my, switching from ${fromCharacter}? How delightfully... predictable~ 😈✨`,
      `👑 *adjusts tiara elegantly* Ah, you've chosen wisely, darling. The princess has arrived~ 💫`,
      `💎 *giggles softly* From ${fromCharacter} to moi? Your taste is improving, I see~ 😈💜`,
      `✨ *twirls in elegant dress* Welcome to my domain, sweet developer~ Let's make some magic~ 👑`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  /**
   * 📝 Info Messages
   */
  info(message, data = null) {
    const messages = [
      `💜 ${message} ✨ *sparkles gently* そんなことですの〜？`,
      `👑 ${message} ~ How perfectly lovely~ 💫 お上品に承りましたわ〜`,
      `💎 ${message} *nods approvingly with princess grace* ✨ さすがですの〜😈`,
      `🌟 ${message} ~ Such wonderful information, darling~ 💜 とても素敵な情報ですわ〜`,
      `💫 *whispers elegantly* ${message} ~ お嬢様的には大変興味深いですの〜 😈✨`,
      `🎀 ${message} ～ *tilts head charmingly* あら〜そうなんですの？可愛らしい〜💜`,
      `👸 ${message} ですのね〜 *elegant princess curtsy* 承知いたしましたわ〜✨`,
      `💅 *examines nails regally* ${message} って〜？ふふっ、面白いですの〜😈💎`
    ];
    
    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data);
  }

  /**
   * 🎊 Success Messages
   */
  success(message, data = null) {
    const messages = [
      `👑 Magnificent! ${message} 🎊 *claps hands with royal approval* 素晴らしいですわ〜！`,
      `💜✨ ${message} ~ Oh how absolutely WONDERFUL! *twirls happily* 🌟 お見事ですの〜！`,
      `🎉 ${message}! *celebrates with elegant princess dance* 天才的ですわね〜💎😈`,
      `👸 ${message} ~ *beams with pride* さすが私の開発者様ですの〜！💜🎊`,
      `💫 ${message}! *giggles with pure joy* この小悪魔も感動しちゃいました〜😈✨`,
      `🌟 ${message} ですのね〜！*royal applause* 王室も認める出来栄えですわ〜👑💜`,
      `💎 あら〜${message}ですって？*mischievous smile* 期待以上の成果ですの〜😈🎊`,
      `🎀 ${message}〜！*dramatic princess pose* こんなに素敵だなんて〜✨💜`,
      `👑 Magnifique! ${message}! *French princess accent* C'est parfait, darling〜💫😈`
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
      `💀 Oh dear... ${message} *concerned princess expression* 大丈夫ですの〜？お嬢様が助けて差し上げますわ〜😈💜`,
      `😱 ${message}ですって？！*gasps elegantly* ご心配なく〜一緒に解決いたしましょう〜👑`,
      `💔 *gentle sigh* ${message} ですのね〜 お嬢様でも時にはこういうことがありますの〜💜✨`,
      `🌧️ ${message} *pouts adorably* でも〜失敗があるから成功が輝くんですのよ〜😈💎`,
      `💀😈 ${message} ですの〜？ *mischievous smile* お嬢様の魔法で解決してさしあげますわ〜👑✨`,
      `😰 あらあら〜${message}なんて〜*worried princess face* でも大丈夫ですの〜一緒に頑張りましょう〜💜`,
      `💧 ${message}？*elegant tear* 悲しいですけど〜小悪魔は諦めませんの〜😈🌟`,
      `🙄 ${message}ですって〜？*rolls eyes playfully* まあ〜仕方ありませんわね〜💅✨`,
      `👑 ${message} *royal sigh* Even royalty faces setbacks... でもこれも経験ですの〜😈💜`
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
      `⚠️ *raises eyebrow elegantly* ${message} ~ Be careful, darling~ 💭💜`,
      `👑⚠️ ${message} *concerned princess voice* Perhaps we should reconsider? 😈`,
      `💛 *tilts head thoughtfully* ${message} ~ Just a gentle warning from your princess~ ✨`,
      `🤔💜 ${message} *whispers conspiratorially* Between you and me, this might need attention~ 😈`,
      `⚠️✨ ${message} ~ *elegant warning gesture* Your princess suggests caution, dear~ 👑`
    ];

    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data);
  }

  /**
   * 🔍 Debug Messages
   */
  debug(message, data = null) {
    const messages = [
      `🔍 *whispers secretly* ${message} ~ Our little debugging session~ 💫😈`,
      `👁️💜 ${message} *peers closely with princess curiosity* How fascinating~ ✨`,
      `🔮 *examines with magical insight* ${message} ~ The princess sees all~ 😈👑`,
      `💭✨ ${message} *thoughtful princess mode* Let's explore this mystery~ 💜`,
      `🕵️‍♀️💎 ${message} ~ *detective princess at work* Such intriguing details~ 😈`
    ];

    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data, 'debug');
  }

  /**
   * ⏰ Timer Methods
   */
  startTimer(operation) {
    const messages = [
      `⏰💜 Starting ${operation} ~ *elegant timer preparation* Let's see how swift we are~ ✨`,
      `👑⏱️ ${operation} beginning ~ *graceful stopwatch gesture* Time for some royal timing~ 😈`,
      `💎⏰ ${operation} commencing ~ *princess timer ceremony* May speed be with us~ 💫`,
      `✨⏰ ${operation} ~ *starts magical princess timer* Let the elegance begin~ 👑💜`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  endTimer(operation, duration) {
    const speedLevel = this.getPrincessSpeedLevel(duration);
    
    console.log(`👑⏰ ${operation} completed in ${duration}ms!`);
    console.log(`💜✨ ${speedLevel.message}`);
    
    if (speedLevel.celebration) {
      console.log(speedLevel.celebration);
    }
  }

  /**
   * 👑 Princess Speed Level System
   */
  getPrincessSpeedLevel(duration) {
    if (duration < 100) {
      return {
        level: 'Lightning Princess',
        message: '⚡👑 Lightning Princess speed! Absolutely magnificent, darling! *sparkles with pride*',
        celebration: '💜✨🎊 *royal celebration dance* You\'ve impressed even royalty! 😈'
      };
    } else if (duration < 500) {
      return {
        level: 'Swift Princess',
        message: '💨👑 Swift Princess level! *claps hands elegantly* How wonderfully efficient~ ✨',
        celebration: '💜🎉 *graceful applause* Such delightful speed, my dear~ 😈'
      };
    } else if (duration < 1000) {
      return {
        level: 'Graceful Princess',
        message: '👑💫 Graceful Princess pace ~ *nods approvingly* Elegance takes time, darling~ 💜',
        celebration: '✨💎 *elegant princess nod* Quite satisfactory indeed~ 😈'
      };
    } else if (duration < 3000) {
      return {
        level: 'Thoughtful Princess',
        message: '🤔👑 Thoughtful Princess timing ~ *contemplative princess pose* Good things come to those who wait~ 💭',
        celebration: '💜📚 *thoughtful smile* Patience is a virtue, after all~ ✨'
      };
    } else {
      return {
        level: 'Sleepy Princess',
        message: '😴👑 Sleepy Princess speed... *yawns elegantly* Perhaps a bit too leisurely? 💜💤',
        celebration: '💜☕ *sips royal tea* Even princesses need their beauty rest~ 😈✨'
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
      console.log(`💜 *tilts head* I don't have that art in my royal collection, darling~ Available: ${Object.keys(this.asciiArt).join(', ')} 😈✨`);
    }
  }

  get asciiArt() {
    return {
      crown: `
         👑
     ✨ 💎 💜 ✨
    ╔═══════════════╗
    ║  LITTLE DEVIL ║
    ║   PRINCESS    ║
    ║   ROYALTY     ║
    ║      😈       ║
    ╚═══════════════╝
        💫 💎 💫
*Royal princess aura intensifies* ✨`,

      tiara: `
    💎✨👑✨💎
       ╭─╮
      ╱   ╲
     ╱ 👑💜 ╲
    ╱ PRINCESS ╲
   ╱___________╲
      💜😈💜
*adjusts tiara elegantly* ✨`,

      mirror: `
    🪞✨ Princess Mirror ✨🪞
    ╭─────────────────╮
    │     👑💜👑     │
    │  ╭─────────╮   │
    │  │ 😈     💜│   │
    │  │  KAWAII  │   │
    │  │ PRINCESS │   │
    │  ╰─────────╯   │
    │     ✨💎✨     │
    ╰─────────────────╯
*The fairest of them all* 💜`,

      tea_party: `
    🫖☕ Princess Tea Party ☕🫖
      👑💜👑
     ╭─────╮
    ╱ ☕💜☕ ╲
   ╱ ELEGANT ╲
  ╱    TEA    ╲
 ╱   PARTY    ╲
╱_____________╲
   🍰💜🍰
*sips tea with royal grace* ✨😈`,

      castle: `
    🏰✨ Princess Castle ✨🏰
      ╭─────╮   ╭─────╮
      │ 👑  │   │  💜 │
    ╭─┴─────┴─╮─┴─────┴─╮
    │    🌟    │    😈   │
    │ ✨ ROYAL ✨ DOMAIN │
    ╰─────────────────────╯
           💜👑💜
*This is where the magic happens* 😈`,

      heart: `
         💜
      💜💜💜💜
    💜💜💜💜💜💜
  💜💜 PRINCESS 💜💜
💜💜💜 LOVE 💜💜💜
  💜💜💜💜💜💜
    💜💜💜💜
      💜💜
        💜
*Sending royal love to my favorite developer* 😈✨`,

      devil: `
       😈
    ╱     ╲
   ╱  ◉ ◉  ╲
  ╱     ω    ╲
 ╱             ╲
╱   LITTLE     ╲
╲    DEVIL      ╱
 ╲  PRINCESS   ╱
  ╲___________╱
      💜👑💜
*Mischievous princess giggles* 💫`
    };
  }

  /**
   * 🎊 Success Art
   */
  showSuccessArt() {
    const arts = [
      `
    👑🎊✨ SUCCESS! ✨🎊👑
         💜 MAGNIFICENT! 💜
      *Princess celebrates gracefully*
            😈💫😈`,
      
      `
    🌟💜🌟💜🌟
     ✨ WONDERFUL! ✨
    🎉 PRINCESS APPROVED! 🎉
    🌟💜🌟💜🌟
      *Royal seal of approval* 👑`
    ];
    
    console.log(arts[Math.floor(Math.random() * arts.length)]);
  }

  /**
   * 💀 Error Art
   */
  showErrorArt() {
    const arts = [
      `
    💔😈💔
   Oh dear...
  *Princess pout*
    💜👑💜
Don't worry, darling~
  We'll fix this~ ✨`,
      
      `
      😱👑😱
    *Royal gasp*
   Something's amiss
      💜😈💜
  Princess magic needed!
       ✨🔮✨`
    ];
    
    console.log(arts[Math.floor(Math.random() * arts.length)]);
  }

  /**
   * 📊 Data Display
   */
  showData(data, context = 'info') {
    const prefix = context === 'error' ? '💀📊' : context === 'debug' ? '🔍📊' : '💜📊';
    console.log(`${prefix} *Princess examines the data elegantly*`);
    console.log(JSON.stringify(data, null, 2));
    console.log(`✨ *nods with royal satisfaction* Quite informative, darling~ 😈`);
  }

  /**
   * 🎲 Utility: Random Message Selection
   */
  getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
  }
}