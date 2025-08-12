/**
 * 🎪 EmojiLog.js v1.0 - Pure Fun Logging Library
 * "Making console.log() adorably useless since 2025" 💜
 * 
 * ✨ Features:
 * - 小悪魔お嬢様モード（Little Devil Princess）
 * - 博多弁モード（Hakata Ramen Timer）
 * - British モード（Sarcastic Commentary）
 * - Character switching system
 * - Completely useless but adorable
 * 
 * 🚨 WARNING: Do NOT use in production! 
 * Side effects: Uncontrollable laughter, ramen cravings, British accent
 */

import { LittleDevilPrincess } from './characters/LittleDevilPrincess.js';
import { HakataRamen } from './characters/HakataRamen.js';
import { BritishSarcasm } from './characters/BritishSarcasm.js';

/**
 * 🎭 Main EmojiLogger Class
 * Pure entertainment logging system
 */
class EmojiLogger {
  constructor() {
    this.characters = {
      'princess': new LittleDevilPrincess(),
      'hakata': new HakataRamen(),
      'british': new BritishSarcasm()
    };
    
    // Default to 小悪魔お嬢様 (キャシちゃまの好み💜)
    this.currentCharacter = 'princess';
    this.startTime = null;
    
    // Development mode check
    this.isDevelopment = process.env.NODE_ENV !== 'production';
    
    if (!this.isDevelopment) {
      console.warn('🚨 EmojiLogger detected production environment! Switching to safe mode...');
      console.warn('💡 Use EmojiLogger.enableProductionMode() if you really want emojis in production');
      this.isEnabled = false;
    } else {
      this.isEnabled = true;
      this.welcomeMessage();
    }
  }

  /**
   * 💜 Welcome message (development only)
   */
  welcomeMessage() {
    console.log(`
╔════════════════════════════════════════════════════════════════════════════════╗
║                         💜 EmojiLog.js v1.0 Activated ✨                      ║
║                                                                                ║
║  Current Character: ${this.currentCharacter === 'princess' ? '小悪魔お嬢様 👑' : 
                        this.currentCharacter === 'hakata' ? '博多弁マスター 🍜' : 
                        'British Gentleman 🫖'}                                                    ║
║                                                                                ║
║  Available Commands:                                                           ║
║    emojiLogger.setCharacter('princess') - 小悪魔お嬢様モード 💜               ║
║    emojiLogger.setCharacter('hakata')   - 博多弁モード 🍜                     ║
║    emojiLogger.setCharacter('british')  - British モード 🫖                   ║
║                                                                                ║
║  💀 Remember: This is for development fun only! 😈                           ║
╚════════════════════════════════════════════════════════════════════════════════╝
    `);
  }

  /**
   * 🎭 Character Selection
   */
  setCharacter(characterName) {
    if (!this.isEnabled) return this;

    const validCharacters = Object.keys(this.characters);
    if (!validCharacters.includes(characterName)) {
      console.warn(`🚨 Invalid character: ${characterName}. Available: ${validCharacters.join(', ')}`);
      return this;
    }

    const oldCharacter = this.currentCharacter;
    this.currentCharacter = characterName;
    
    // Character change announcement
    this.characters[characterName].characterChangeMessage(oldCharacter);
    
    return this; // Chain-able
  }

  /**
   * 📝 Log Methods
   */
  info(message, data = null) {
    if (!this.isEnabled) return this;
    this.characters[this.currentCharacter].info(message, data);
    return this;
  }

  success(message, data = null) {
    if (!this.isEnabled) return this;
    this.characters[this.currentCharacter].success(message, data);
    return this;
  }

  error(message, data = null) {
    if (!this.isEnabled) return this;
    this.characters[this.currentCharacter].error(message, data);
    return this;
  }

  warn(message, data = null) {
    if (!this.isEnabled) return this;
    this.characters[this.currentCharacter].warn(message, data);
    return this;
  }

  debug(message, data = null) {
    if (!this.isEnabled) return this;
    this.characters[this.currentCharacter].debug(message, data);
    return this;
  }

  /**
   * ⏰ Timer Methods (特に博多ラーメン用)
   */
  startTimer(operation) {
    if (!this.isEnabled) return this;
    this.startTime = Date.now();
    this.characters[this.currentCharacter].startTimer(operation);
    return this;
  }

  endTimer(operation) {
    if (!this.isEnabled) return this;
    if (!this.startTime) {
      this.warn('Timer was not started! Call startTimer() first');
      return this;
    }
    
    const duration = Date.now() - this.startTime;
    this.characters[this.currentCharacter].endTimer(operation, duration);
    this.startTime = null;
    return this;
  }

  /**
   * 🎨 Special ASCII Art Methods
   */
  showAsciiArt(artName) {
    if (!this.isEnabled) return this;
    this.characters[this.currentCharacter].showAsciiArt(artName);
    return this;
  }

  /**
   * 💀 Production Safety
   */
  enableProductionMode() {
    console.warn('🚨 WARNING: Enabling EmojiLogger in production! Your logs will be... interesting 😈');
    this.isEnabled = true;
    return this;
  }

  disableProductionMode() {
    this.isEnabled = false;
    console.log('✅ EmojiLogger disabled. Back to boring logs...');
    return this;
  }

  /**
   * 🎪 Fun Utility Methods
   */
  getAllCharacters() {
    return Object.keys(this.characters);
  }

  getCurrentCharacter() {
    return this.currentCharacter;
  }

  // Chain-able method showcase
  demo() {
    if (!this.isEnabled) return this;
    
    console.log('\n🎪 EmojiLogger Demo Starting...\n');
    
    this.setCharacter('princess')
        .info('Hello from Princess!')
        .setCharacter('hakata')
        .info('Hello from Hakata!')
        .setCharacter('british')
        .info('Hello from Britain!')
        .setCharacter('princess'); // Back to default
    
    console.log('\n🎊 Demo complete!\n');
    return this;
  }
}

/**
 * 💜 Singleton Instance Export
 * Ready to use immediately!
 */
export const emojiLogger = new EmojiLogger();

/**
 * 🎭 Convenience Exports
 */
export { EmojiLogger };

/**
 * 📚 Usage Examples:
 * 
 * // Basic usage
 * emojiLogger.info('Server started');
 * emojiLogger.success('Database connected');
 * emojiLogger.error('Something went wrong');
 * 
 * // Character switching
 * emojiLogger.setCharacter('hakata').info('博多弁でログ出力');
 * emojiLogger.setCharacter('british').error('Terribly inconvenient');
 * 
 * // Timer usage (great for performance)
 * emojiLogger.startTimer('API Call');
 * // ... do API call ...
 * emojiLogger.endTimer('API Call');
 * 
 * // Chain-able methods
 * emojiLogger
 *   .setCharacter('princess')
 *   .info('Switching to princess mode')
 *   .success('Everything is wonderful!');
 * 
 * // ASCII Art
 * emojiLogger.showAsciiArt('crown');
 * 
 * // Demo all characters
 * emojiLogger.demo();
 */