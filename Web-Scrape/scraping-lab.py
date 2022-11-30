import requests
from bs4 import BeautifulSoup

url = 'https://ja.wikipedia.org/wiki'\
      '/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8'
response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")
today = soup.find("div", attrs={"id": "on_this_day"})

entries = today.find_all('li')

for i, entry in enumerate(entries):
    print('%d: %s ' % (i + 1, entry.get_text()))
