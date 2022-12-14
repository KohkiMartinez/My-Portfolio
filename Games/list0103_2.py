import tkinter 
from PIL import ImageTk, Image

x = 0
def scroll_bg():
    global x
    x = x + 1
    if x == 1000:
        x = 0
    canvas.delete("BG")
    canvas.create_image(x-500, 350, image=img_bg, tag="BG")
    canvas.create_image(x+500, 350, image=img_bg, tag="BG")
    root.after(50, scroll_bg)

root = tkinter.Tk()
root.title("Scrolling Screen")
canvas = tkinter.Canvas(width = 1000, height = 700)
canvas.pack()
img_bg = ImageTk.PhotoImage(Image.open("land.png"))
scroll_bg()
root.mainloop()