import tkinter as tk
from tkinter import ttk
import subprocess
import configparser
import webbrowser


# Run button 1 (Programming)
def run1_func():
    try:
        config.read("config.ini")
        read_base = config["Programming"]
        app1 = read_base.get("app1")
        app2 = read_base.get("app2")
        url1 = read_base.get("url1")

        programs = [app1, app2]
        for v in programs:
            subprocess.Popen(v)

        webbrowser.open(url1, new=2, autoraise=True)
    except Exception as e:
        print(e)
        print('The file "config.ini" is not found!!')


# Run button 2 (Investment)
def run2_func():
    try:
        config.read("config.ini")
        read_base = config["Investment"]
        app1 = read_base.get("app1")
        url1 = read_base.get("url1")
        url2 = read_base.get("url2")

        subprocess.Popen(app1)

        programs = [url1, url2]
        for v in programs:
            webbrowser.open(v, new=2, autoraise=True)
    except Exception as e:
        print(e)
        print('The file "config.ini" is not found!!')


# Run button 3 (Tools)
def run3_func():
    try:
        config.read("config.ini")
        read_base = config["Tools"]
        app1 = read_base.get("app1")
        app2 = read_base.get("app2")

        programs = [app1, app2]
        for v in programs:
            subprocess.Popen(v)
    except Exception as e:
        print(e)
        print('The file "config.ini" is not found!!')


root = tk.Tk()
config = configparser.ConfigParser()


# Setting
# Open "config.ini" with notepad
def set_func():
    notepad = r"C:\WINDOWS\system32\notepad.exe"
    subprocess.run([notepad, "config.ini"])


# Help menu
def man_func():
    subprocess.run(["start", "manual.txt"], shell=True)


# Label frame
frame = ttk.Labelframe(root, text="Launcher", padding=15)
frame.grid(row=0, column=0, padx=15, pady=15)

# Button
run_button1 = tk.Button(frame, text="Programming", command=run1_func)
run_button1.grid(row=0, column=0, padx=5, pady=5)

run_button2 = tk.Button(frame, text="Investment", command=run2_func)
run_button2.grid(row=0, column=1, padx=5, pady=5)

run_button3 = tk.Button(frame, text="Tools", command=run3_func)
run_button3.grid(row=0, column=3, padx=5, pady=5)

# Menu bar
menubar = tk.Menu(root)
root.configure(menu=menubar)

# File menu
filemenu = tk.Menu(menubar, tearoff=0)
menubar.add_cascade(label="File", menu=filemenu)

# Setting
filemenu.add_command(label="Setting", command=set_func)

# Separator
filemenu.add_separator()

# Exit
filemenu.add_command(label="Exit", command=lambda: root.destroy())

# Help menu
helpmenu = tk.Menu(menubar, tearoff=0)
menubar.add_cascade(label="Help", menu=helpmenu)

helpmenu.add_command(label="Manual", command=man_func)

root.mainloop()
