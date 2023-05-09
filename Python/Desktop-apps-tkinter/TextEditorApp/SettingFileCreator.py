import configparser

config = configparser.ConfigParser()

config["Fixed Phrase"] = {
    "phrase1": "To whome this may concern,",
    "phrase2": "Thank you for contacting us.",
    "phrase3": "I look forward to hearing from you.",
    "phrase4": "",
    "phrase5": ""
}

with open("setting.ini", "w+") as file:
    config.write(file)
