import requests
import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure


def sub_window():

    try:
        api_key = "DSUB8RJZ7LVIAK0F"
        symbol = cb.get()
        time_frame = radio_value.get()
        url = "https://www.alphavantage.co/query?"\
            f"function=TIME_SERIES_{time_frame}"\
            f"&symbol={symbol}&apikey={api_key}"
        data = requests.get(url).json()

        # Daily data
        if time_frame == "DAILY_ADJUSTED":
            w_data = dict(reversed(data['Time Series (Daily)'].items()))
            x = w_data.keys()
            y = [float(x['4. close']) for x in w_data.values()]

            mini_window = tk.Toplevel(root)
            plt.rcParams['font.size'] = 7
            fig = Figure(figsize=(16, 9), dpi=100)

            plot1 = fig.subplots()
            plot1.plot(x, y)
            plot1.set_title(f"{symbol} DAILY".upper())
            plot1.xaxis.set_major_locator(mdates.DayLocator(interval=15))
            plot1.grid()

            canvas = FigureCanvasTkAgg(fig, master=mini_window)
            canvas.draw()
            canvas.get_tk_widget().pack()
            statusbar['text'] = f"{symbol} DAILY".upper() + " Done!!"

        # Weekly data
        elif time_frame == "WEEKLY":
            w_data = dict(reversed(data['Weekly Time Series'].items()))
            x = w_data.keys()
            y = [float(x['4. close']) for x in w_data.values()]

            mini_window = tk.Toplevel(root)
            plt.rcParams['font.size'] = 7
            fig = Figure(figsize=(16, 9), dpi=100)

            plot1 = fig.subplots()
            plot1.plot(x, y)
            plot1.set_title(f"{symbol} {time_frame}".upper())
            plot1.xaxis.set_major_locator(mdates.DayLocator(interval=90))
            plot1.grid()

            canvas = FigureCanvasTkAgg(fig, master=mini_window)
            canvas.draw()
            canvas.get_tk_widget().pack()
            statusbar['text'] = f"{symbol} {time_frame}".upper() + " Done!!"

        # Monthly data
        elif time_frame == "MONTHLY":
            w_data = dict(reversed(data['Monthly Time Series'].items()))
            x = w_data.keys()
            y = [float(x['4. close']) for x in w_data.values()]

            mini_window = tk.Toplevel(root)
            plt.rcParams['font.size'] = 7
            fig = Figure(figsize=(16, 9), dpi=100)

            plot1 = fig.subplots()
            plot1.plot(x, y)
            plot1.set_title(f"{symbol} {time_frame}".upper())
            plot1.xaxis.set_major_locator(mdates.DayLocator(interval=30))
            plot1.grid()

            canvas = FigureCanvasTkAgg(fig, master=mini_window)
            canvas.draw()
            canvas.get_tk_widget().pack()
            statusbar['text'] = f"{symbol} {time_frame}".upper() + " Done!!"

        else:
            statusbar["text"] = "Error!! Please Choose the time frame."
    except Exception as e:
        print(e)
        statusbar["text"] = "Error!! Please Enter the valid symbol"\
                            "(MSFT, IBM, AAPL etc...)"


root = tk.Tk()
root.title("Stock Data Extractor")
root.geometry("1000x200")

# Label frame
frame2 = ttk.Labelframe(root, text="Time frames", padding=10)
frame2.pack(padx=20, pady=5)

# Combo box
matana = ["MSFT", "AAPL", "TSLA", "GOOGL", "NVDA", "AMZN"]
cb = ttk.Combobox(root, values=matana, width=50)
cb.pack()

# Run button
run_button = tk.Button(root, text="Run", command=sub_window)
run_button.pack()

# Statusbar
statusbar = tk.Label(root, text="Please Enter the symbol"
                                "(MSFT, IBM, AAPL etc...)",
                     bd=1, relief=tk.SUNKEN, anchor=tk.W)
statusbar.pack(side=tk.BOTTOM, fill=tk.X)

# Radio buttons
radio_value = tk.StringVar()
rdio_D = ttk.Radiobutton(frame2, text="Daily",
                         variable=radio_value, value="DAILY_ADJUSTED")
rdio_D.pack(side=tk.LEFT)

rdio_W = ttk.Radiobutton(frame2, text="Weekly",
                         variable=radio_value, value="WEEKLY")
rdio_W.pack(side=tk.LEFT)
rdio_M = ttk.Radiobutton(frame2, text="Monthly",
                         variable=radio_value, value="MONTHLY")
rdio_M.pack(side=tk.LEFT)

root.mainloop()
