import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import he from "he";

const options = {
  ignoreAttributes: false, // 属性を無視しない
  attributeNamePrefix: "", // 属性名のプレフィックスを指定しない
  parseAttributeValue: true, // 属性値を変換する
  parseNodeValue: true, // ノードの値を変換する
  trimValues: true, // 値の前後の空白をトリムする
};

// Get data from RSSurl, parse and return them.
const fetchRSS = async (RSSurl: string) => {
  try {
    const response = await axios.get(RSSurl);
    const parser = new XMLParser(options);
    const result = parser.parse(response.data);

    let items;
    // 4gamer.net, 映画.comニュース, 働くものニュース:人生VIP職人ブログwww  【海外の反応】パンドラの憂鬱 etc
    if (
      RSSurl.endsWith(".rdf") ||
      RSSurl === "https://www.4gamer.net/rss/index.xml" ||
      RSSurl === "http://workingnews117.com/?xml" ||
      RSSurl === "http://feeds.eiga.com/eiga_news" ||
      RSSurl === "http://pandora11.com/?xml"
    ) {
      items = result["rdf:RDF"].item;

      const itemDetails = items.map((item: any) => {
        const enclosureUrl = item.enclosure
          ? item.enclosure.url._text || item.enclosure.url
          : null;

        return {
          title: item.title._text || item.title,
          link: item.link._text || item.link,
          // pubDate: item.pubDate._text || item.pubDate,
          enclosure: enclosureUrl,
        };
      });

      return itemDetails;
    }
    // Study Hacker
    else if (RSSurl === "https://studyhacker.net/feed") {
      items = result.feed.entry;

      const itemDetails = items.map((item: any) => {
        return {
          title: item.title,
          link: item.link[0]["href"],
          // pubDate: item.pubDate._text || item.pubDate,
          enclosure: item.link[1]["href"],
        };
      });

      return itemDetails;
    }
    // Publickey, ギズモード・ジャパン
    else if (
      RSSurl === "https://www.publickey1.jp/atom.xml" ||
      RSSurl === "http://www.gizmodo.jp/atom.xml"
    ) {
      items = result.feed.entry;

      const itemDetails = items.map((item: any) => {
        const enclosureUrl = item.enclosure
          ? item.enclosure.url._text || item.enclosure.url
          : null;

        return {
          title: item.title._text || item.title,
          link: item.link["href"] || item.link,
          // pubDate: item.pubDate._text || item.pubDate,
          enclosure: enclosureUrl,
        };
      });

      return itemDetails;
    }
    // はてなブックマーク-新着エントリー-テクノロジー
    else if (
      RSSurl === "https://b.hatena.ne.jp/entrylist/it.rss" ||
      RSSurl === "https://b.hatena.ne.jp/hotentry.rss"
    ) {
      items = result["rdf:RDF"].item;

      const itemDetails = items.map((item: any) => {
        const encodedTitle = he.decode(item.title);
        const enclosureUrl = item.enclosure
          ? item.enclosure.url._text || item.enclosure.url
          : null;

        return {
          // title: item.title._text || item.title,
          title: encodedTitle,
          link: item.link._text || item.link,
          // pubDate: item.pubDate._text || item.pubDate,
          enclosure: enclosureUrl,
        };
      });

      return itemDetails;
    }
    // AUTOMATION ➔ excluding webm
    else if (RSSurl === "https://automaton-media.com/feed/") {
      items = result.rss.channel.item;

      const itemDetails = items.map((item: any) => {
        // const enclosureUrl = item.enclosure
        //   ? item.enclosure["url"]._text || item.enclosure["url"]
        //   : null;

        // console.log(enclosureUrl);

        return {
          title: item.title._text || item.title,
          link: item.link._text || item.link,
          // pubDate: item.pubDate._text || item.pubDate,
          // enclosure: enclosureUrl,
          enclosure: null,
        };
      });

      return itemDetails;
    } else {
      items = result.rss.channel.item;

      const itemDetails = items.map((item: any) => {
        const enclosureUrl = item.enclosure
          ? item.enclosure.url._text || item.enclosure.url
          : null;

        return {
          title: item.title._text || item.title,
          link: item.link._text || item.link,
          // pubDate: item.pubDate._text || item.pubDate,
          enclosure: enclosureUrl,
        };
      });

      return itemDetails;
    }
  } catch (error) {
    console.error("Error fetching RSS:", error);
    return [];
  }
};

export default fetchRSS;
