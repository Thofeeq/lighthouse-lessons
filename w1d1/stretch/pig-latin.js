input = process.argv.slice(2);

function translate(wordsToTranslate)
{
  translatedWord = "";
  for(i = 0; i < wordsToTranslate.length; i++)
  {
    for(j = 1; j < wordsToTranslate[i].length; j++)
    {
      translatedWord = translatedWord +  wordsToTranslate[i].charAt(j);
    }
    translatedWord = translatedWord + wordsToTranslate[i].charAt(0) + "ay" + " ";
  }
  return translatedWord;
}

console.log(translate(input));