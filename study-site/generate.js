const fs = require('fs');

const fs = require('fs');

// 四六级核心高频词库（你可以随时在引号里补充更多单词）
const vocabBank = [
  { word: 'abandon', meaning: 'v. 放弃，抛弃', difficulty: '四级' },
  { word: 'benefit', meaning: 'n. 利益 v. 有益于', difficulty: '四级' },
  { word: 'challenge', meaning: 'n. 挑战 v. 向...挑战', difficulty: '四级' },
  { word: 'emphasize', meaning: 'v. 强调，着重', difficulty: '六级' },
  { word: 'phenomenon', meaning: 'n. 现象', difficulty: '六级' },
  { word: 'perspective', meaning: 'n. 观点，视角', difficulty: '六级' },
  { word: 'accumulate', meaning: 'v. 积累，积聚', difficulty: '六级' },
  { word: 'hypothesis', meaning: 'n. 假设，假说', difficulty: '六级' },
  { word: 'incentive', meaning: 'n. 动机，刺激', difficulty: '六级' },
  { word: 'subsequent', meaning: 'adj. 随后的，后来的', difficulty: '六级' }
];

// 获取今天的日期
const today = new Date().toLocaleDateString('zh-CN');

// 随机抽取一个单词
const randomVocab = vocabBank[Math.floor(Math.random() * vocabBank.length)];

// 组合成新的数据
const data = {
  date: today,
  word: randomVocab.word,
  meaning: randomVocab.meaning,
  difficulty: randomVocab.difficulty
};

// 把数据写入 data.json 文件
fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
console.log('今日四六级单词已成功推送！');