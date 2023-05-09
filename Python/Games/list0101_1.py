import tkinter

root = tkinter.Tk()
root.geometry("550x200")
root.title("Using GUI by Python")
label = tkinter.Label(
        root, text = "The begginig of making games!!",
        font=("Times New Roman", 20)
        )
label.place(x=80, y=60)
root.mainloop()