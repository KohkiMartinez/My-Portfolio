import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
import configparser

config = configparser.ConfigParser()                                 
config.read("setting.ini")

# Create a sub window (Fixed Phrase)
def sub_window():
    # Writing function
    def writing_func():
        with open("Setting.ini", "w") as file:
            config.write(file)

    # Registration function
    def reg_func():
        reg_phrase = reg_box.get()
        if radio_value.get() == 1:
            rdio_1["text"]=reg_phrase
            config.set("Fixed Phrase", "Phrase 1", reg_phrase)
            writing_func()
        elif radio_value.get() == 2:
            rdio_2["text"]=reg_phrase
            config.set("Fixed Phrase", "phrase2", reg_phrase)
            writing_func()
        elif radio_value.get() == 3:
            rdio_3["text"]=reg_phrase
            config.set("Fixed Phrase", "phrase2", reg_phrase)
            writing_func()

    # Save button function
    def insert_func():
        if radio_value.get()==1:
            txtbox.insert("insert", rdio_1["text"])
        elif radio_value.get()==2:
            txtbox.insert("insert", rdio_2["text"])
        elif radio_value.get()==3:
            txtbox.insert("insert", rdio_2["text"])

    fp_window = tk.Toplevel(root)
    frame1 = ttk.Labelframe(fp_window, text= "Registration", padding= 10)
    frame1.pack(padx=20, pady = 10)

    reg_label = tk.Label(frame1, text = "Fixed Phrase:")
    reg_label.pack(side = tk.LEFT, anchor = tk.W)
    
    reg_box = tk.Entry(frame1, width = 50)
    reg_box.pack(side = tk.LEFT)
    
    save_button = tk.Button(frame1, text = "Save")
    save_button.pack(padx = 10, side = tk.LEFT)

    # Frame 2 (For radio button)
    frame2 = ttk.Labelframe(sub_window, text = "Save Slot", padding = 10)
    frame2.pack(padx = 20, pady = 5, fill = tk.X)

    ## Radio Button ##
    radio_value = tk.IntVar()
    read_base = config["Fixed Phrase"]

    # Radio button 1 
    rdio_1 = ttk.Radiobutton(frame2, text = read_base.get("phrase1"), variable = radio_value, value = 1)
    rdio_1.grid(row = 0, column = 0, sticky = tk.W)

    # Radio button 2
    rdio_2 = ttk.Radiobutton(frame2, text = read_base.get("phrase2"), variable = radio_value, value = 2)
    rdio_2.grid(row = 1, column = 0, sticky = tk.W)

    # Radio button 3
    rdio_3 = ttk.Radiobutton(frame2, text = read_base.get("phrase3"), variable = radio_value, value = 3)
    rdio_3.grid(row = 2, column = 0, sticky = tk.W)

    # Set button
    set_button = tk.Button(fp_window, text = "Set")
    set_button.pack(padx = 20, pady = 10, ipady = 5, fill = tk.X)

# Open function
def open_func():
    type = [("Text", "*.txt"), ("All Files", "*.*")]
    txt_path = tk.filedialog.askopenfilename(filetypes=type)
    if len(txt_path) != 0:
        txtbox.delete("1.0", "end")
        with open (txt_path, "r") as file:
            txtbox.insert("1.end", file.read())

# Save as function
def save_func():
    type = [("Text", "*.txt")]
    txt_path = tk.filedialog.asksaveasfilename(filetypes = type, defaultextension = "txt")
    if len(txt_path) != 0:
        with open(txt_path, "w") as file:
            data = txtbox.get("1.0", "end")
            file.write(data)

root = tk.Tk()

# Frame
frame = ttk.Frame(root, padding = 5)
frame.pack(padx = 5, pady = 5)

# Text box
txtbox = tk.Text(frame, width = 60, height = 20)
yscroll = tk.Scrollbar(frame, orient=tk.VERTICAL, command = txtbox.yview)
yscroll.pack(side = tk.RIGHT, fill = tk.Y)
txtbox["yscrollcommand"]= yscroll.set
txtbox.pack()

# Menu bar
menubar = tk.Menu(root)
root.configure(menu = menubar)
filemenu = tk.Menu(menubar, tearoff = 0)
menubar.add_cascade(label = "File", menu = filemenu)

# Open menu
filemenu.add_command(label = "Open...", command = open_func)

# Save as menu
filemenu.add_command(label= "Save as...", command = save_func)

filemenu.add_separator()

# Exit menu
filemenu.add_command(label= "Exit", command = lambda:root.destroy())

# Help menu
helpmenu = tk.Menu(menubar, tearoff = 0)
menubar.add_cascade(label = "Help", menu= helpmenu)
helpmenu.add_command(label = "Manual")

# Sub window button
fp_button = tk.Button(root, text = "Fixed Phrase", command = sub_window)
fp_button.pack(padx=10, pady = 10, ipady = 5, fill = tk.X)





# Check button
# button = tk.Button(frame2, text = "Check", command = lambda:print(radio_value.ger()))
# button.grid(row = 2, column = 0, sticky = tk.W)




root.mainloop()