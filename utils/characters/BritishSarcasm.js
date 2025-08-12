/**
 * 🫖 British Sarcasm Character
 * 英国紳士の皮肉マスター - 嫌味で有用な情報を隠す専門家
 * 
 * Personality: Sarcastically verbose, tea-obsessed, judgment-heavy, politely rude
 * Style: Long-winded complaints, excessive politeness hiding sharp criticism
 */

export class BritishSarcasm {
  constructor() {
    this.name = 'British Gentleman';
    this.emoji = '☂️';
    this.personality = 'sarcastic-verbose';
  }

  /**
   * ☂️ Character Change Message
   */
  characterChangeMessage(fromCharacter) {
    const messages = [
      `☂️ Ah, switching from ${fromCharacter}, are we? How terribly... predictable. *adjusts umbrella with visible disappointment* ☕`,
      `🫖 From ${fromCharacter} to British sophistication? Well, I suppose that's... progress of sorts. *sighs dramatically* 💀`,
      `☕ Oh brilliant, ${fromCharacter} wasn't quite cutting it? Do tell me more about your... standards. *sips tea judgmentally* ☂️`,
      `👨‍💼 ${fromCharacter} to British expertise? How refreshingly... ordinary. *straightens tie with resigned authority* 🫖`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  /**
   * 📝 Info Messages
   */
  info(message, data = null) {
    const messages = [
      `☕ ${message} *sips tea with mild interest* Though I suppose that's... adequate. ☂️`,
      `🫖 ${message} ~ Well, isn't that just... fascinating. *yawns politely* 💀`,
      `👨‍💼 ${message} *adjusts spectacles with bureaucratic precision* How terribly... informative. ☕`,
      `☂️ ${message} ~ *clears throat diplomatically* Quite... unremarkable, really. 🫖`,
      `🍃 ${message} *rustles newspaper disapprovingly* As expected, I suppose... ☕💀`
    ];
    
    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data);
  }

  /**
   * 🎊 Success Messages
   */
  success(message, data = null) {
    const messages = [
      `☕🎩 ${message} ~ Well, well, well... *raises eyebrow with grudging approval* I suppose that'll do. Rather like a proper afternoon tea at Fortnum & Mason - unexpectedly refined. ☂️✨`,
      `🫖🎊 ${message}! *drops monocle in genuine surprise* Good heavens, someone actually managed to... succeed? Almost as shocking as finding decent fish and chips at Borough Market. 💀👏`,
      `☂️🌟 ${message} ~ *straightens tie with impressed authority* Blimey, that's actually... proper brilliant! Worth celebrating with a pint at The George Inn in Southwark, I'd say. ☕🎉`,
      `👨‍💼✨ ${message}! *adjusts umbrella with dignified celebration* Well I never... this deserves a proper breakfast at The Ivy, not your usual greasy spoon nonsense. 🫖🎊`,
      `☕💎 ${message} ~ *sets down teacup with ceremonial precision* Right then... genuinely impressive. Almost as good as the scones at Sketch in Mayfair. ☂️👑`,
      `🎭 ${message} indeed! *theatrical applause* This calls for champagne afternoon tea at The Ritz... though I suspect you'd prefer McDonald's, wouldn't you? 💀✨`,
      `🏰 ${message}... *grudging respect* Actually rather sophisticated. Like a proper Sunday roast at Rules Restaurant - old school excellence. ☂️🍾`,
      `🫖 ${message}! *polishes monocle thoughtfully* Finally, some competence! This deserves high tea at Harrods, not your usual Starbucks swill. ☕👑`,
      `☂️ ${message} ~ Remarkable! *tips bowler hat* Worth a celebration at Claridge's Bar... though you'll probably settle for Weatherspoons, won't you? 💀🥂`
    ];

    console.log(this.getRandomMessage(messages));
    this.showSuccessArt();
    if (data) this.showData(data);
  }

  /**
   * 💀 Error Messages - The Long Rant System
   */
  error(message, data = null) {
    const messages = [
      `☂️ ${message}... Oh brilliant. Just brilliant. *sips tea aggressively* Here we are again, aren't we? Another day, another spectacular failure. ☕💀 
       Let me guess - you didn't read the documentation? Of course you didn't. Why would anyone bother with such trivialities as, oh I don't know, INSTRUCTIONS? 
       *taps umbrella impatiently* No, no, much better to just wing it and hope for the best, isn't it? 🫖
       Well congratulations, you've achieved precisely what one might expect from such an... approach.`,
      
      `💀🫖 ${message} ~ *dramatically sets down teacup* Oh, this is just PERFECT, isn't it? Absolutely marvelous! ☂️☕
       You know what? I'm actually impressed. It takes genuine skill to mess things up this thoroughly. 
       *adjusts spectacles with professional disappointment* I mean, the sheer creativity involved in finding new ways to fail... 
       it's almost artistic, really. If you're still reading this rather than fixing the actual problem, that explains SO much about your... methodology. 💀`,
      
      `☕💀 ${message}... *long, theatrical sigh* Right. Where shall we begin with this... masterpiece? ☂️
       First of all, well done on creating yet another teaching moment for the rest of us. Your commitment to educational failures is truly inspiring.
       *rustles papers disapprovingly* Now then, shall we actually address the issue, or would you prefer to continue this delightful pattern of... 
       whatever it is you call this? 🫖 Because I've got all day, and frankly, my expectations couldn't be lower at this point.`,
      
      `🫖☂️ ${message} ~ *pinches bridge of nose with infinite patience* Oh, where do I even start with this... triumph of modern incompetence? ☕💀
       You see, back in my day, we had this revolutionary concept called 'thinking before acting.' Radical, I know.
       *taps fingers rhythmically on desk* But why embrace such antiquated notions when you can just... do whatever this is?
       If you've made it this far through my commentary instead of fixing the problem, congratulations - you've identified the root cause! 🎯`
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
      `⚠️☕ ${message} ~ *raises eyebrow with aristocratic concern* How... predictable. Shall we address this before it becomes another catastrophe? ☂️`,
      `🫖⚠️ ${message} *sighs with diplomatic exhaustion* Yes, well, I suppose someone should mention this... obvious issue. 💀`,
      `☂️⚠️ ${message} ~ *adjusts umbrella defensively* Right then, proceeding with caution might be... advisable. For once. ☕`,
      `💭🫖 ${message} *taps temple with bureaucratic wisdom* Perhaps we should consider... thinking this through? Revolutionary concept, I know. ☂️⚠️`,
      `⚠️☕ ${message} ~ *clears throat with official disapproval* Ahem. One might suggest... reconsidering this approach? Just a thought. 🫖💀`
    ];

    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data);
  }

  /**
   * 🔍 Debug Messages
   */
  debug(message, data = null) {
    const messages = [
      `🔍☕ ${message} *peers through monocle with investigative precision* Hmm... interesting. And by interesting, I mean tedious. ☂️💀`,
      `🕵️‍♂️🫖 ${message} ~ *examines evidence with Sherlock-like scrutiny* Elementary, my dear... incompetent developer. ☕`,
      `🔍☂️ ${message} *adjusts magnifying glass with forensic authority* The plot thickens... unfortunately. 🫖💭`,
      `💭☕ ${message} ~ *strokes chin thoughtfully* Fascinating... in the most mundane way possible. ☂️🔍`,
      `🕵️‍♂️💀 ${message} *scribbles notes disapprovingly* Another clue in this mystery of... mediocrity. How thrilling. ☕🫖`
    ];

    console.log(this.getRandomMessage(messages));
    if (data) this.showData(data, 'debug');
  }

  /**
   * ⏰ Timer Methods - British Punctuality System
   */
  startTimer(operation) {
    const messages = [
      `⏰☕ ${operation} commencing... *checks pocket watch with bureaucratic precision* Do try not to disappoint. ☂️`,
      `🫖⏱️ ${operation} beginning ~ *sets timer with diplomatic efficiency* Let's see how badly this goes, shall we? 💀`,
      `☂️⏰ ${operation} starting ~ *adjusts umbrella timing mechanisms* Punctuality is everything, you know. ☕`,
      `⏰🎩 ${operation} ~ *synchronizes with Big Ben precision* Right then, off we go... into inevitable disappointment. 🫖`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  endTimer(operation, duration) {
    const britishLevel = this.getBritishTimingLevel(duration);
    
    console.log(`☕⏰ ${operation} completed in ${duration}ms`);
    console.log(`🫖 ${britishLevel.message}`);
    
    if (britishLevel.commentary) {
      console.log(britishLevel.commentary);
    }
  }

  /**
   * ☂️ British Timing Evaluation System
   */
  getBritishTimingLevel(duration) {
    if (duration < 100) {
      return {
        level: 'Suspiciously Swift',
        message: '⚡☕ Suspiciously swift... *adjusts spectacles suspiciously* Are you quite certain this actually worked? 🤔',
        commentary: '☂️ Anything this fast is either brilliant or catastrophically broken. Given the circumstances... I have my doubts. 💀'
      };
    } else if (duration < 500) {
      return {
        level: 'Adequately Prompt',
        message: '☕⚡ Adequately prompt ~ *nods with grudging approval* Well, that was... almost competent. How refreshing. ☂️',
        commentary: '🫖 Fast enough to avoid complete embarrassment. Progress, of sorts. *golf clap* 👏'
      };
    } else if (duration < 1000) {
      return {
        level: 'Properly British',
        message: '🫖⏰ Properly British timing ~ *tips hat with reserved satisfaction* Punctual without being... unseemly. Well done. ☕',
        commentary: '☂️ Like a good cup of Earl Grey - takes just the right amount of time to be perfect. 🍃'
      };
    } else if (duration < 3000) {
      return {
        level: 'Fashionably Late',
        message: '☂️⏰ Fashionably late ~ *checks pocket watch disapprovingly* Well, better late than never, I suppose... ☕',
        commentary: '🫖 The sort of timing one expects from public transport. Disappointing but... predictable. 💀'
      };
    } else if (duration < 10000) {
      return {
        level: 'Bureaucratically Delayed',
        message: '📋☕ Bureaucratically delayed ~ *shuffles papers with professional resignation* Ah yes, government efficiency at its finest... ☂️',
        commentary: '🫖 Like waiting for a passport renewal. Painful, but somehow... inevitable. 💀📝'
      };
    } else {
      return {
        level: 'Catastrophically Tardy',
        message: '💀☕ Catastrophically tardy... *throws hands up in despair* This is what we get for expecting competence! ☂️',
        commentary: '🫖 Slower than Brexit negotiations. And that, dear developer, is saying something truly damning. 💀🇬🇧'
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
      console.log(`☂️ *adjusts monocle with scholarly disappointment* I'm afraid that particular art isn't in my collection, old chap. Available options: ${Object.keys(this.asciiArt).join(', ')} ☕💀`);
    }
  }

  get asciiArt() {
    return {
      teapot: `
      ☕🫖☕ British Tea Ceremony ☕🫖☕
        ╭───────────────╮
       ╱     🫖         ╲
      ╱   "Proper Tea   ╲
     ╱   Solves Everything" ╲
    ╱     ☕     ☕       ╲
   ╱________________________╲
   ☂️ *sips with authority* ☂️
   
   "When in doubt, brew up."
   - Ancient British Wisdom`,

      crown: `
         👑
      ☂️ 🫖 ☕ ☂️
    ╔═══════════════╗
    ║  HER MAJESTY  ║
    ║   EXPECTS     ║
    ║  COMPETENCE   ║
    ║      💀       ║
    ╚═══════════════╝
        ☕ 🫖 ☕
  *Royal disappointment intensifies*`,

      umbrella: `
        ☂️
      ╱─────╲
     ╱───────╲
    ╱─────────╲
   ╱───────────╲
  ╱─────────────╲
        │││
        │││
    British Weather
   Survival Essential
        💀☕💀
  "Always prepared for disappointment"`,

      parliament: `
    🏛️ Parliament House 🏛️
      ╭─────────────╮
     ╱   DEMOCRACY   ╲
    ╱   (theoretically) ╲
   ╱___________________╲
   │  ☕ DEBATE ☕  │
   │  💀 DELAY  💀  │
   │  ☂️ DEFEAT ☂️  │
   ╰─────────────────╯
        🫖👨‍💼🫖
   "Disappointment by committee"`,

      judgmentalCat: `
         🐱
      ╱─────╲
     ╱ ◉   ◉ ╲
    ╱    ω    ╲
   ╱___________╲
        │││
    JUDGMENT CAT
     ☕ says ☕
   "I am not impressed"
        💀☂️💀
   *stares disapprovingly at your code*`
    };
  }

  /**
   * 🎊 Success Art
   */
  showSuccessArt() {
    const arts = [
      `
    ☕🎉☂️ SUCCESS! ☂️🎉☕
      *reluctant applause*
    Well, that was... unexpected
         🫖👏🫖
    "Competence achieved against all odds"`,
      
      `
      🎩🎊🎩🎊🎩
    ☕ WELL I NEVER! ☕
   🫖 Actually worked! 🫖
      💀 Amazing... 💀
    *adjusts umbrella with surprise*`
    ];
    
    console.log(arts[Math.floor(Math.random() * arts.length)]);
  }

  /**
   * 💀 Error Art
   */
  showErrorArt() {
    const arts = [
      `
      💀☂️💀
    Oh brilliant...
   *sips tea aggressively*
      ☕🫖☕
   Just... brilliant.
    💀☂️💀`,
      
      `
      ☂️💀☂️
    *long sigh*
   As expected...
      ☕😤☕
  Another teaching moment
      🫖💀🫖`
    ];
    
    console.log(arts[Math.floor(Math.random() * arts.length)]);
  }

  /**
   * 🫖 Special British Methods
   */
  showLongRant(topic) {
    const rants = [
      `☕💀 Oh, ${topic}? Don't get me started on ${topic}... Actually, you know what? Let's discuss ${topic} properly, shall we? 
       *settles into comfortable chair* Right then, ${topic} is precisely the sort of thing that exemplifies everything wrong with modern... well, everything really.
       Back in my day, we understood the importance of doing things PROPERLY. But no, these days it's all about cutting corners and... 
       ☂️ Are you still listening? Good. Because this is the important bit...`,
      
      `🫖☂️ ${topic}... *removes spectacles for dramatic effect* ${topic} is like watching someone try to make tea with lukewarm water and a teabag from 1987.
       Technically possible, but the results are... well, catastrophic doesn't begin to cover it. ☕💀
       The fundamental issue with ${topic} is that nobody bothers to understand the underlying principles anymore...
       *continues for several more paragraphs about proper methodology*`
    ];
    
    console.log(rants[Math.floor(Math.random() * rants.length)]);
  }

  /**
   * ☕ Tea Break System (Retry functionality)
   */
  teaBreak(attemptCount) {
    const messages = [
      `☕ Right then, tea break number ${attemptCount}... *stirs sugar disapprovingly* Perhaps this time we'll avoid complete disaster? ☂️`,
      `🫖 Attempt ${attemptCount} begins ~ *adjusts cups with resigned precision* Hope springs eternal, doesn't it? 💀`,
      `☂️ Tea break ${attemptCount}... *sips with diminishing expectations* Well, what's the worst that could happen? Oh wait... ☕💀`,
      `☕ ${attemptCount}th attempt at competence ~ *raises pinky finger defensively* Surely even you can manage it eventually? 🫖`
    ];
    
    console.log(this.getRandomMessage(messages));
  }

  /**
   * 📊 Data Display
   */
  showData(data, context = 'info') {
    const prefix = context === 'error' ? '💀📊' : context === 'debug' ? '🔍📊' : '☕📊';
    console.log(`${prefix} *examines data through monocle with professional skepticism*`);
    console.log(JSON.stringify(data, null, 2));
    console.log(`☂️ *adjusts spectacles with bureaucratic finality* Well, that's... adequate, I suppose. 🫖💀`);
  }

  /**
   * 🎲 Utility: Random Message Selection
   */
  getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
  }
}