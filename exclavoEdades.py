##Exclavo UDP etapas de la vida

from tkinter import *
import socket


def etapas():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.bind(('localhost', 2000))
    data, addr = s.recvfrom(1024)
    print(data)
    if (data == b'boca'):#Pasar el dato aqui
        btn_causas.image = photo1
        btn_causas.config(image=photo1)
        btn_causas.place(x=20, y=40)
    if (data == b'corazon'):#Pasar el dato aqui
        btn_causas.image = photo2
        btn_causas.config(image=photo2)
        btn_causas.place(x=20, y=40)
    if (data == b'estomago'):#Pasar el dato aqui
        btn_causas.image = photo3
        btn_causas.config(image=photo3)
        btn_causas.place(x=20, y=40)
    if (data == b'oido'):#Pasar el dato aqui
        btn_causas.image = photo4
        btn_causas.config(image=photo4)
        btn_causas.place(x=20, y=40)
    if (data == b'pulmon'):#Pasar el dato aqui
        btn_causas.image = photo5
        btn_causas.config(image=photo5)
        btn_causas.place(x=20, y=40)
    ventana.after(50, etapas)


ventana = Tk()
ventana.geometry("300x300+400+25")
L = Label(ventana, text="Etapas de la vida")
L.place(x=100, y=10)
photo1 = PhotoImage(file = "./examenes/boca.png")
photo2 = PhotoImage(file = "./examenes/corazon.png")
photo3 = PhotoImage(file = "./examenes/estomago.png")
photo4 = PhotoImage(file = "./examenes/oido.png")
photo5 = PhotoImage(file = "./examenes/pulmon.png")
btn_causas = Button(ventana, bg="white", font=('Helvetica', 12), compound=LEFT)
ventana.after(50, etapas)

ventana.mainloop()
