#!/usr/bin/env node

/**
 * 🎪 EmojiLogger Test Playground
 * Complete demonstration of all characters and features
 */

import { emojiLogger } from './utils/EmojiLogger.js';

console.log('🎪✨ Welcome to the EmojiLogger Playground! ✨🎪\n');
console.log('Preparing to demonstrate all characters and features...\n');

// Small delay function for dramatic effect
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runFullDemo() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎭 CHARACTER DEMONSTRATION - FULL EXPERIENCE');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // === PART 1: Little Devil Princess ===
  console.log('👑💜 === LITTLE DEVIL PRINCESS DEMONSTRATION === 💜👑\n');
  
  emojiLogger.setCharacter('princess');
  await delay(500);
  
  emojiLogger.info('Welcome to my royal domain, darling~');
  await delay(800);
  
  emojiLogger.success('Princess magic is working perfectly!');
  await delay(800);
  
  emojiLogger.warn('Be careful with my delicate systems~');
  await delay(800);
  
  // Princess timing demonstration
  console.log('\n👑 Princess Speed Test:');
  emojiLogger.startTimer('Princess Magic Spell');
  await delay(150); // Swift Princess level
  emojiLogger.endTimer('Princess Magic Spell');
  
  await delay(800);
  emojiLogger.showAsciiArt('crown');
  await delay(1000);
  
  emojiLogger.debug('Examining magical data with princess curiosity', {
    magic_level: 'Universe Class',
    sparkles: 'Maximum',
    elegance: 'Infinite'
  });
  
  await delay(1000);
  console.log('\n');

  // === PART 2: Hakata Ramen Master ===
  console.log('🍜💪 === HAKATA RAMEN MASTER DEMONSTRATION === 💪🍜\n');
  
  emojiLogger.setCharacter('hakata');
  await delay(500);
  
  emojiLogger.info('博多っ子が来たばい〜！山笠があるけん、博多たい！');
  await delay(800);
  
  emojiLogger.success('ラーメンが完成したばい！一蘭レベルの出来栄えやん！');
  await delay(800);
  
  // Hakata ramen timing system demonstration
  console.log('\n🍜 博多ラーメン茹で加減システム Test:');
  
  // Test different speed levels
  const speeds = [
    { name: 'Lightning Speed (粉落とし)', delay: 50 },
    { name: 'Harigane Level (ハリガネ)', delay: 300 },
    { name: 'Barikata Level (バリカタ)', delay: 800 },
    { name: 'Normal Speed (普通)', delay: 2500 }
  ];
  
  for (const speed of speeds) {
    emojiLogger.startTimer(speed.name);
    await delay(speed.delay);
    emojiLogger.endTimer(speed.name);
    await delay(1000);
  }
  
  emojiLogger.showAsciiArt('yamakasa');
  await delay(1000);
  
  emojiLogger.debug('博多っ子の分析結果ばい〜', {
    ramen_quality: 'バリカタ',
    yamakasa_spirit: '100%',
    oishoi_level: 'Maximum'
  });
  
  // Demonstrate kaedama (replacement) system
  emojiLogger.kaedama(1);
  await delay(500);
  emojiLogger.soupFinish(95);
  
  await delay(1000);
  console.log('\n');

  // === PART 3: British Sarcasm Master ===
  console.log('☂️🫖 === BRITISH SARCASM MASTER DEMONSTRATION === 🫖☂️\n');
  
  emojiLogger.setCharacter('british');
  await delay(500);
  
  emojiLogger.info('Ah, British sophistication has arrived... how perfectly predictable');
  await delay(800);
  
  emojiLogger.success('Well well well... something actually worked for once!');
  await delay(800);
  
  emojiLogger.warn('I do hope you\'re paying attention to this... obvious warning');
  await delay(800);
  
  // British timing system demonstration
  console.log('\n☂️ British Punctuality Test:');
  
  const britishSpeeds = [
    { name: 'Suspiciously Swift Task', delay: 75 },
    { name: 'Properly British Task', delay: 700 },
    { name: 'Bureaucratic Procedure', delay: 4000 }
  ];
  
  for (const speed of britishSpeeds) {
    emojiLogger.startTimer(speed.name);
    await delay(speed.delay);
    emojiLogger.endTimer(speed.name);
    await delay(1200);
  }
  
  emojiLogger.showAsciiArt('teapot');
  await delay(1000);
  
  // Demonstrate the legendary British error message
  console.log('\n💀 British Error Experience (Long Rant System):');
  emojiLogger.error('Something has gone terribly wrong');
  await delay(2000);
  
  emojiLogger.debug('Examining failure with British precision', {
    disappointment_level: 'Maximum',
    sarcasm: 'Industrial strength',
    tea_required: 'Immediately'
  });
  
  await delay(1000);
  console.log('\n');

  // === PART 4: Character Switching Demo ===
  console.log('🔄✨ === CHARACTER SWITCHING DEMONSTRATION === ✨🔄\n');
  
  const switchDemo = [
    { char: 'princess', message: 'Princess mode activated!' },
    { char: 'hakata', message: '博多モードに変更したばい〜' },
    { char: 'british', message: 'British sophistication... how delightful' },
    { char: 'princess', message: 'Back to royal elegance~' }
  ];
  
  for (const demo of switchDemo) {
    emojiLogger.setCharacter(demo.char);
    await delay(500);
    emojiLogger.info(demo.message);
    await delay(1000);
  }
  
  console.log('\n');

  // === PART 5: Chain Method Demo ===
  console.log('🔗💫 === CHAIN METHOD DEMONSTRATION === 💫🔗\n');
  
  console.log('Demonstrating method chaining across all characters:\n');
  
  emojiLogger
    .setCharacter('princess')
    .info('Starting with princess elegance~')
    .startTimer('Chain Demo')
    .setCharacter('hakata')
    .info('博多弁に切り替えたばい！')
    .setCharacter('british')
    .warn('Oh brilliant... another demonstration')
    .endTimer('Chain Demo')
    .setCharacter('princess')
    .success('Chain demonstration complete!');
  
  await delay(2000);
  console.log('\n');

  // === PART 6: ASCII Art Gallery ===
  console.log('🎨✨ === ASCII ART GALLERY === ✨🎨\n');
  
  const artDemo = [
    { char: 'princess', art: 'castle', name: 'Princess Castle' },
    { char: 'hakata', art: 'hakata_spirit', name: 'Hakata Spirit' },
    { char: 'british', art: 'parliament', name: 'British Parliament' }
  ];
  
  for (const art of artDemo) {
    console.log(`${art.name}:`);
    emojiLogger.setCharacter(art.char).showAsciiArt(art.art);
    await delay(1500);
    console.log('');
  }

  // === FINAL MESSAGE ===
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🎊✨ EMOJILOGGER DEMONSTRATION COMPLETE! ✨🎊');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  
  emojiLogger.setCharacter('princess');
  emojiLogger.success('Demo completed with royal approval!');
  
  await delay(500);
  emojiLogger.setCharacter('hakata');
  emojiLogger.success('デモが完了したばい〜！やったー！');
  
  await delay(500);
  emojiLogger.setCharacter('british');
  emojiLogger.success('Well... that was surprisingly... adequate');
  
  console.log('\n💜 Thank you for trying EmojiLogger! 💜');
  console.log('Remember: This is for FUN only - never use in production! 😈✨\n');
  
  console.log('Available commands:');
  console.log('- emojiLogger.setCharacter("princess") - 小悪魔お嬢様');
  console.log('- emojiLogger.setCharacter("hakata") - 博多弁マスター');
  console.log('- emojiLogger.setCharacter("british") - British Sarcasm');
  console.log('- emojiLogger.demo() - Run character demo');
  console.log('- emojiLogger.showAsciiArt("artName") - Show specific art\n');
}

// Simple test mode for quick verification
function runQuickTest() {
  console.log('🚀 Quick Test Mode:\n');
  
  emojiLogger.setCharacter('princess')
    .info('Princess test message')
    .setCharacter('hakata')
    .info('博多テストメッセージばい')
    .setCharacter('british')
    .info('British test message... how thrilling')
    .setCharacter('princess')
    .success('All characters working perfectly!');
  
  console.log('\n✅ Quick test complete!\n');
  console.log('Run "npm test" or "node test-emojilogger.js" for full demo');
  console.log('Run "node test-emojilogger.js quick" for this quick test\n');
}

// Check command line arguments
const args = process.argv.slice(2);

if (args.includes('quick') || args.includes('--quick') || args.includes('-q')) {
  runQuickTest();
} else {
  runFullDemo().catch(console.error);
}