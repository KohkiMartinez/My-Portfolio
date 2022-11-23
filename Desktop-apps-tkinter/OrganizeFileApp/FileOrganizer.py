import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
import os
import shutil


# Browse func
def browse_func():
    global dir_path
    statusbar["text"] = "Here we go!!"
    dir_path = filedialog.askdirectory()


# Run func
def run_func():
    try:
        save_path = filedialog.askdirectory()
        for file in os.listdir(dir_path):
            if file.endswith(cb.get()):
                path = dir_path + "/" + file
                shutil.move(path, save_path)
        statusbar["text"] = "Done!!"
    except Exception as e:
        print(e)
        statusbar["text"] = "Error!!"


root = tk.Tk()
root.title("File Organizer")
root.geometry("300x200")

# Status bar
statusbar = tk.Label(root, text="Here we go!!",
                     bd=1, relief=tk.SUNKEN, anchor=tk.W)
statusbar.pack(side=tk.BOTTOM, fill=tk.X)

# Run Button
run_button = tk.Button(root, text="RUN", command=run_func)
run_button.pack(pady=10, ipadx=20, side=tk.BOTTOM)

# Label frame
frame = ttk.Labelframe(root, text="Select Extension", padding=10)
frame.pack(padx=20, pady=5, side=tk.BOTTOM)
extensions = [".docx", ".py", ".txt", ".xlsx", ".zip"]

# combobox
cb = ttk.Combobox(frame, values=extensions, state="readonly")
cb.pack(side=tk.LEFT)
cb.current(0)

# Browse button
browse_button = tk.Button(frame, text="Browse...", command=browse_func)
browse_button.pack(padx=10, side=tk.LEFT)

root.mainloop()
