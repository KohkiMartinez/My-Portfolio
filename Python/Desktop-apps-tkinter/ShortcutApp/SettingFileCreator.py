import configparser

config = configparser.ConfigParser()

config["Programming"] = {
    "app1": r"C:\Users\kohki\AppData\Local\Programs\Microsoft VS Code"
    r"\Code.exe",
    "app2": r'C:\Program Files\Git\git-bash.exe',
    "url1": "https://github.com/KohkiMartinez"
}

config["Investment"] = {
    "app1": r"C:\Program Files (x86)\Titan FX MetaTrader 4\terminal.exe",
    "url1": "http://kissfx.com/",
    "url2": "https://jp.tradingview.com/chart/yalQDGqJ/"
}

config["Tools"] = {
    "app1": r"C:\WINDOWS\system32\notepad.exe",
    "app2": r"C:\WINDOWS\system32\calc.exe"
}

with open("config.ini", "w+") as file:
    config.write(file)
