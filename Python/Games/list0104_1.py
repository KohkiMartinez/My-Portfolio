import tkinter
from PIL import ImageTk, Image

root = tkinter.Tk()
root.title("Map data")
canvas = tkinter.Canvas(width=336, height=240)
canvas.pack()
img = [
    ImageTk.PhotoImage(Image.open("chip0.png")),
    ImageTk.PhotoImage(Image.open("chip1.png")),
    ImageTk.PhotoImage(Image.open("chip2.png")),
    ImageTk.PhotoImage(Image.open("chip3.png"))
]

map_data = [
    [0, 1, 0, 2, 2, 2, 2],
    [3, 0, 0, 0, 2, 2, 2],
    [3, 0, 0, 1, 0, 0, 0],
    [3, 3, 0, 0, 0, 0, 1],
    [3, 3, 3, 3, 0, 0, 0]
]

for y in range(5):
    for x in range(7):
        n = map_data[y][x]
        canvas.create_image(x*48+24, y*48+24,
        image=img[n])
root.mainloop()
