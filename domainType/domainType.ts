function domainType(domains) {
  const map = {
    com: 'commmercial',
    org: 'organization',
    net: 'network',
    info: 'information'
  };
  const result = [];
  domains.forEach(domain => {
    const top = domain.slice(domain.lastIndexOf('.') + 1);
    result.push(map[top]);
  });
  return result;
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);
