function htmlEndTagByStartTag(startTag) {
  const element = startTag.slice(1, startTag.indexOf(' '));
  return `</${element}>`;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));
