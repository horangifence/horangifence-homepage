import Parser from 'rss-parser';

export async function getBlogFeed() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://rss.blog.naver.com/hanbada100.xml');
  return feed.items.slice(0, 6).map(item => ({
    title: item.title,
    link: item.link,
    date: item.pubDate,
  }));
}