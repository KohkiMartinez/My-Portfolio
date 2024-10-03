const allNews = [
  {
    title: "GIZMODO",
    url: "https://www.gizmodo.jp/index.xml",
  },
  {
    title: "ITmedia",
    url: "https://rss.itmedia.co.jp/rss/2.0/itmedia_all.xml",
  },
  {
    title: "ライフハッカー",
    url: "https://www.lifehacker.jp/feed/index.xml",
  },
  {
    title: "ライブドアニュース (主要)",
    url: "https://news.livedoor.com/topics/rss/top.xml",
  },
  {
    title: "ライブドアニュース (国内)",
    url: "https://news.livedoor.com/topics/rss/dom.xml",
  },
  {
    title: "ライブドアニュース (海外)",
    url: "https://news.livedoor.com/topics/rss/int.xml",
  },
  {
    title: "ライブドアニュース (IT・経済)",
    url: "https://news.livedoor.com/topics/rss/eco.xml",
  },
  {
    title: "ライブドアニュース (芸能)",
    url: "https://news.livedoor.com/topics/rss/ent.xml",
  },
  {
    title: "ライブドアニュース (スポーツ)",
    url: "https://news.livedoor.com/topics/rss/spo.xml",
  },
  {
    title: "ライブドアニュース (映画)",
    url: "https://news.livedoor.com/rss/summary/52.xml",
  },
  {
    title: "ライブドアニュース (女子)",
    url: "https://news.livedoor.com/topics/rss/love.xml",
  },
  {
    title: "ライブドアニュース (トレンド)",
    url: "https://news.livedoor.com/topics/rss/trend.xml",
  },
  {
    title: "朝日新聞デジタル",
    url: "http://www.asahi.com/rss/asahi/newsheadlines.rdf",
  },
  {
    title: "Yahoo!ニュース",
    url: "https://news.yahoo.co.jp/rss/topics/top-picks.xml",
  },
  {
    title: "NHK",
    url: "https://www.nhk.or.jp/rss/news/cat0.xml",
  },
  {
    title: "ゲキサガ",
    url: "https://web.gekisaka.jp/feed",
  },
  {
    title: "Number Web",
    url: "https://number.bunshun.jp/list/rsssports",
  },
  {
    title: "東洋経済オンライン",
    url: "https://toyokeizai.net/list/feed/rss",
  },
  {
    title: "文春オンライン",
    url: "https://bunshun.jp/list/feed/rss",
  },
  {
    title: "はてなブックマーク",
    url: "https://b.hatena.ne.jp/hotentry.rss",
  },
  {
    title: "ゴミリー",
    url: "https://gori.me/feed",
  },
  {
    title: "J-CAST ニュース",
    url: "https://www.j-cast.com/index.xml",
  },
  {
    title: "J-CAST トレンド",
    url: "https://www.j-cast.com/trend/index.xml",
  },
  {
    title: "ハフィントンポスト",
    url: "https://www.huffingtonpost.jp/feeds/index.xml",
  },
  {
    title: "PC Watch",
    url: "https://pc.watch.impress.co.jp/data/rss/1.0/pcw/feed.rdf",
  },
  {
    title: "INTERNET Watch",
    url: "https://internet.watch.impress.co.jp/data/rss/1.0/iw/feed.rdf",
  },
  {
    title: "デイリーポータルZ",
    url: "https://dailyportalz.jp/feed/headline",
  },
  {
    title: "Zenn",
    url: "https://zenn.dev/feed",
  },
  {
    title: "ビジネスジャーナル",
    url: "https://biz-journal.jp/index.xml",
  },
  {
    title: "CNET Japan 最新情報",
    url: "http://feeds.japan.cnet.com/rss/cnet/all.rdf",
  },
  {
    title: "アゴラ",
    url: "https://agora-web.jp/feed",
  },
  {
    title: "IT 最新記事一覧",
    url: "https://rss.itmedia.co.jp/rss/2.0/ait.xml",
  },
  {
    title: "ロケットニュース24",
    url: "https://rocketnews24.com/feed/",
  },
  {
    title: "DIGIDAY",
    url: "https://digiday.jp/feed/",
  },
  {
    title: "市況かぶ全力2階建",
    url: "https://kabumatome.doorblog.jp/index.rdf",
  },
  {
    title: "ギズモード・ジャパン",
    url: "http://www.gizmodo.jp/atom.xml",
  },
  {
    title: "ハムスター速報",
    url: "http://hamusoku.com/index.rdf",
  },
  {
    title: "らばQ",
    url: "http://labaq.com/index.rdf",
  },
  {
    title: "秒刊SUNDAY",
    url: "https://yukawanet.com/feed",
  },
  {
    title: "現代ビジネス",
    url: "https://gendai.ismedia.jp/list/feed/rss",
  },
  {
    title: "映画.comニュース",
    url: "http://feeds.eiga.com/eiga_news",
  },
  {
    title: "痛いニュース",
    url: "https://itainews.com/index.rdf",
  },
  {
    title: "ライフハックちゃんねる弐式",
    url: "https://lifehack2ch.livedoor.biz/index.rdf",
  },
  {
    title: "不思議.net",
    url: "http://world-fusigi.net/index.rdf",
  },
  {
    title: "働くものニュース:人生VIP職人ブログwww",
    url: "http://workingnews117.com/?xml",
  },
  {
    title: "【海外の反応】パンドラの憂鬱",
    url: "http://pandora11.com/?xml",
  },
  {
    title: "海外反応!! I LOVE JAPAN",
    url: "http://blog.livedoor.jp/zzcj/index.rdf",
  },
  {
    title: "カオスちゃんねる",
    url: "http://chaos2ch.com/index.rdf",
  },
  {
    title: "WIRED.jp",
    url: "https://wired.jp/feed/rss",
  },
  {
    title: "ナノロジー",
    url: "https://nazology.kusuguru.co.jp/feed",
  },

  {
    title: "窓の社",
    url: "https://forest.watch.impress.co.jp/data/rss/1.0/wf/feed.rdf",
  },
  {
    title: "AV Watch",
    url: "https://av.watch.impress.co.jp/data/rss/1.0/avw/feed.rdf",
  },
  {
    title: "ケータイ Watch",
    url: "https://k-tai.watch.impress.co.jp/data/rss/1.0/ktw/feed.rdf",
  },
  {
    title: "家電 Watch",
    url: "https://kaden.watch.impress.co.jp/data/rss/1.0/kdw/feed.rdf",
  },
  {
    title: "PCパーツまとめ",
    url: "http://blog.livedoor.jp/bluejay01-review/index.rdf",
  },
  {
    title: "Publickey",
    url: "https://www.publickey1.jp/atom.xml",
  },
  {
    title: "AUTOMATION",
    url: "https://automaton-media.com/feed/",
  },
  {
    title: "4gamer.net",
    url: "https://www.4gamer.net/rss/index.xml",
  },
  {
    title: "PS5速報!",
    url: "http://openworldnews.net/index.rdf",
  },
  {
    title: "GAME Watch",
    url: "https://game.watch.impress.co.jp/data/rss/1.0/gmw/feed.rdf",
  },
  {
    title: "スプラトゥーン3攻略 - トリカラ速報",
    url: "https://splatoon-torikara.com/feed",
  },
  {
    title: "STUDY HACKER",
    url: "https://studyhacker.net/feed",
  },
  {
    title: "はてなブックマーク-新着エントリー-テクノロジー",
    url: "https://b.hatena.ne.jp/entrylist/it.rss",
  },
];

export default allNews;
