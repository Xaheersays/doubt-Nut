function extractImageSources(rawText) {
  var pattern = /<img\s+src="data:image\/[^;]+;base64,([^"]+)"\s*>/g;
  var matches = rawText.match(pattern);
  var imageSources = [];
  if (matches) {
      matches.forEach(function(match) {
          var base64Data = match.split('base64,')[1];
          imageSources.push(atob(base64Data));
      });
  }
  return imageSources;
}


export const processText = (rawText)=>{
  const images = extractImageSources(rawText)
  var cleanedText = rawText.replace(/<img[^>]+>/g, '');
  return {images,cleanedText}
}


