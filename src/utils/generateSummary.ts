
export const generateSummary = (content: string): string => {
  const sentences = content.split('.').filter(s => s.trim().length > 0);
  const importantWords = ['technology', 'development', 'AI', 'modern', 'important', 'future', 'digital', 'business', 'companies', 'solutions'];

  const scoredSentences = sentences.map(sentence => {
    const words = sentence.toLowerCase().split(' ');
    const score = words.reduce((acc, word) => acc + (importantWords.includes(word) ? 1 : 0), 0);
    return { sentence: sentence.trim(), score };
  });

  const topSentences = scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.sentence);

  return topSentences.join('. ') + '.';
};
