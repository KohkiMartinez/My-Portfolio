import tkinter
from PIL import ImageTk, Image

def mouse_click(e):
    px = e.x
    py = e.y
    print("mouse pointer is at ({},{})".format(px, py))
    mx = int(px/48)
    my = int(py/48)
    if 0 <= mx and mx <= 6 and 0 <= my and my <= 4:
        n = map_data[my][mx]
        print("This area is "+ CHIP_NAME[n])

root = tkinter.Tk()
root.title("Map data")
canvas = tkinter.Canvas(width=336, height=240)
canvas.pack()
canvas.bind("<Button>", mouse_click)
CHIP_NAME = ["Grass", "Flower", "Forest", "Sea"]
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
        canvas.create_image(x*48+24, y*48+24,
        image=img[map_data[y][x]]
        )
root.mainloop()