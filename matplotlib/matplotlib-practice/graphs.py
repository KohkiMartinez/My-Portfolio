import matplotlib.pyplot as plt

fig, ax = plt.subplots(2, 2, figsize=(15, 15))

ax[0, 0].plot(['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
              [10, 13, 12, 12, 10, 11, 12],
              label='Min Temp', marker='^', color='m')
ax[0, 0].set_xlabel('Day')
ax[0, 0].set_ylabel('Temp', rotation='horizontal')
ax[0, 0].set_yticks([0, 5, 10, 15, 20, 25])
ax[0, 0].set_title('Tokyo Oct week1')
ax[0, 0].grid()
ax[0, 0].legend()

ax[0, 1].bar(['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
             [19, 22, 24, 21, 20, 22, 20],
             label='Max Temp', color='c')
ax[0, 1].set_xlabel('Day')
ax[0, 1].set_ylabel('Temp', rotation='horizontal')
ax[0, 1].set_yticks([0, 5, 10, 15, 20, 25])
ax[0, 1].set_title('Tokyo Oct week1')
ax[0, 1].grid()
ax[0, 1].legend()

ax[1, 0].scatter([120, 122, 122, 123, 125, 125, 126, 127, 128, 129, 129, 130],
                 [21, 23, 22, 26, 21, 25, 28, 27, 28, 25, 31, 32])
ax[1, 0].set_xlabel('Height')
ax[1, 0].set_ylabel('Weight', rotation='horizontal')
ax[1, 0].set_title('Elementary school students')
ax[1, 0].grid()

ax[1, 1].hist([30, 41, 43, 45, 50, 51, 55, 56, 59, 60, 61, 63,
               64, 66, 69, 69, 72, 75, 77, 80, 87, 90, 95], bins=5)
ax[1, 1].set_xlabel('Score')
ax[1, 1].set_ylabel('Number', rotation='horizontal')
ax[1, 1].set_title('Elementary school students')
ax[1, 1].grid()

plt.show()
