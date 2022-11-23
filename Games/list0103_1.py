import tkinter 
from PIL import ImageTk, Image

root = tkinter.Tk()
root.title("Import img to Canvas")
canvas = tkinter.Canvas(width=1000, height=700)
canvas.pack()
img_bg = ImageTk.PhotoImage(Image.open("land.png"))
canvas.create_image(500, 350, image=img_bg)
root.mainloop()