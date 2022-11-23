import requests
from bs4 import BeautifulSoup

res = requests.get("https://www.australianethical.com.au/etf/"\
                    "?&c=adwords&st=g-15925952379-etf&gclid=Cj"\
                    "wKCAjwvsqZBhAlEiwAqAHElafirpKOaR-Fojaf0f"\
                    "w-ApTCnKxuVcpUT-VuPjqXfPSV4SlTnNXjchoCu6IQAvD_BwE&gclsrc=aw.ds")
soup = BeautifulSoup(res.text, 'html.parser')
h2_tags = soup.find_all('h2')
h2_strings = [x.string for x in h2_tags]
print(h2_strings)
