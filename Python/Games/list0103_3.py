import tkinter
from PIL import ImageTk, Image

x = 0
ani = 0
def animation():
    global x, ani
    x = x + 4
    if x == 480:
        x = 0
    canvas.delete("BG")
    canvas.create_image(x-240, 150, image=img_bg, tag="BG")
    canvas.create_image(x+240, 150, image=img_bg, tag="BG")
    ani = (ani+1)%4
    canvas.create_image(240, 200, image=img_dog[ani], tag="BG")
    root.after(200,animation)

root = tkinter.Tk()
root.title("Animation")
canvas = tkinter.Canvas(width=480, height=300)
canvas.pack()
img_bg = ImageTk.PhotoImage(Image.open("park.png"))
img_dog = [
    ImageTk.PhotoImage(Image.open("dog0.png")),
    ImageTk.PhotoImage(Image.open("dog1.png")),
    ImageTk.PhotoImage(Image.open("dog2.png")),
    ImageTk.PhotoImage(Image.open("dog3.png")),
    ]
animation()
root.mainloop()