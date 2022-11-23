import tkinter as tk
from tkinter import ttk
import configparser
from tkinter import filedialog
from tkinter import messagebox
import os


# Create a sub window (Fixed Phrase)
def sub_window():
    if os.path.exists("setting.ini"):
        config = configparser.ConfigParser()
        config.read("setting.ini")

        # Writing function
        def writing_func():
            with open("setting.ini", "w") as file:
                config.write(file)

        # Registration function
        def reg_func():
            reg_phrase = reg_box.get()
            if radio_value.get() == 1:
                rdio_1["text"] = reg_phrase
                config.set("Fixed Phrase", "Phrase1", reg_phrase)
                with open("setting.ini", "W") as file:
                    config.write(file)
            elif radio_value.get() == 2:
                rdio_2["text"] = reg_phrase
                config.set("Fixed Phrase", "Phrase2", reg_phrase)
                writing_func()
            elif radio_value.get() == 3:
                rdio_3["text"] = reg_phrase
                config.set("Fixed Phrase", "Phrase3", reg_phrase)
                writing_func()
            elif radio_value.get() == 4:
                rdio_4["text"] = reg_phrase
                config.set("Fixed Phrase", "Phrase4", reg_phrase)
                writing_func()
            elif radio_value.get() == 5:
                rdio_5["text"] = reg_phrase
                config.set("Fixed Phrase", "Phrase5", reg_phrase)
                writing_func()

        # Save button function
        def insert_func():
            if radio_value.get() == 1:
                txtbox.insert("insert", rdio_1["text"])
            elif radio_value.get() == 2:
                txtbox.insert("insert", rdio_2["text"])
            elif radio_value.get() == 3:
                txtbox.insert("insert", rdio_3["text"])
            elif radio_value.get() == 4:
                txtbox.insert("insert", rdio_4["text"])
            elif radio_value.get() == 5:
                txtbox.insert("insert", rdio_5["text"])

        fp_window = tk.Toplevel(root)

        frame1 = ttk.Labelframe(fp_window, text="Registration", padding=10)
        frame1.pack(padx=20, pady=10)

        reg_label = tk.Label(frame1, text="Fixed Phrase")
        reg_label.pack(side=tk.LEFT, anchor=tk.W)

        reg_box = tk.Entry(frame1, width=50)
        reg_box.pack(side=tk.LEFT)

        save_button = tk.Button(frame1, text="Save", command=reg_func)
        save_button.pack(padx=10, side=tk.LEFT)

        # Frame2 (For radio buttons)
        frame2 = ttk.Labelframe(fp_window, text="Save slot", padding=10)
        frame2.pack(padx=20, pady=5, fill=tk.X)

        # Radio button (1-5)
        radio_value = tk.IntVar()

        read_base = config["Fixed Phrase"]

        rdio_1 = ttk.Radiobutton(frame2, text=read_base.get("phrase1"),
                                 variable=radio_value, value=1)
        rdio_1.grid(row=0, column=0, sticky=tk.W)

        rdio_2 = ttk.Radiobutton(frame2, text=read_base.get("phrase2"),
                                 variable=radio_value, value=2)
        rdio_2.grid(row=1, column=0, sticky=tk.W)

        rdio_3 = ttk.Radiobutton(frame2, text=read_base.get("phrase3"),
                                 variable=radio_value, value=3)
        rdio_3.grid(row=2, column=0, sticky=tk.W)

        rdio_4 = ttk.Radiobutton(frame2, text=read_base.get("phrase4"),
                                 variable=radio_value, value=4)
        rdio_4.grid(row=3, column=0, sticky=tk.W)

        rdio_5 = ttk.Radiobutton(frame2, text=read_base.get("phrase5"),
                                 variable=radio_value, value=5)
        rdio_5.grid(row=4, column=0, sticky=tk.W)

        # Set button
        set_button = tk.Button(fp_window, text="Set", command=insert_func)
        set_button.pack(padx=20, pady=10, ipady=5, fill=tk.X)
    else:
        messagebox.showerror("Error", "No seeting.ini!!")


# Open function
def open_func():
    typ = [("Text", "*.txt"), ("All Files", "*.*")]
    txt_path = tk.filedialog.askopenfilename(filetypes=typ)

    if len(txt_path) != 0:
        txtbox.delete("1.0", "end")
        with open(txt_path, "r") as file:
            txtbox.insert("1.end", file.read())


# Save as fuction
def save_func():
    typ = [("Text", "*.txt")]
    txt_path = tk.filedialog.asksaveasfilename(filetypes=typ,
                                               defaultextension="txt")

    if len(txt_path) != 0:
        with open(txt_path, "w") as file:
            data = txtbox.get("1.0", "end")
            file.write(data)


root = tk.Tk()

# Frame
frame = ttk.Frame(root, padding=5)
frame.pack(padx=5, pady=5)

# Text box
txtbox = tk.Text(frame, width=60, height=20)
yscroll = tk.Scrollbar(frame, orient=tk.VERTICAL, command=txtbox.yview)
txtbox["yscrollcommand"] = yscroll.set
yscroll.pack(side=tk.RIGHT, fill=tk.Y)
txtbox.pack()

# Menu bar
menubar = tk.Menu(root)
root.configure(menu=menubar)
filemenu = tk.Menu(menubar, tearoff=0)
menubar.add_cascade(label="File", menu=filemenu)

# Open menu
filemenu.add_command(label="Open...", command=open_func)

# Save as menu
filemenu.add_command(label="Save as...", command=save_func)

filemenu.add_separator()

# Exit menu
filemenu.add_command(label="Exit", command=lambda: root.destroy())

# Help menu
helpmenu = tk.Menu(menubar, tearoff=0)
menubar.add_cascade(label="Help", menu=helpmenu)
helpmenu.add_cascade(label="Manual")

# sub window button
fp_button = tk.Button(root, text="Fixed Phrase", command=sub_window)
fp_button.pack(padx=10, pady=10, ipady=5, fill=tk.X)

root.mainloop()
