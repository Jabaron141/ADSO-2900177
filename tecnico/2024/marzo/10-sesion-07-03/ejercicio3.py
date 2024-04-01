num1 = 0
num2 = 0
num3 = 0
bandera = True
while bandera == True:
    try:
        num1 = float(input("Ingrese el primer número: "))
        num2 = float(input("Ingrese el segundo número: "))
        num3 = float(input("Ingrese el tercer número: "))
        if num1 == num2 or num1 == num3 or num2 == num3:
            print("No es posible mostrar datos de mayor, menor e intermedio ya que hay dos o más números iguales.")
        else:
            if num1 > num2 and num1 > num3:
                mayor = num1
                if num2 > num3:
                    intermedio = num2
                    menor = num3
                else:
                    intermedio = num3
                    menor = num2
            if num2 > num1 and num2 > num3:
                mayor = num2
                if num1 > num3:
                    intermedio = num1
                    menor = num3
                else:
                    intermedio = num3
                    menor = num1
            else:
                mayor = num3
                if num1 > num2:
                    intermedio = num1
                    menor = num2
                else:
                    intermedio = num2
                    menor = num1
            print("El mayor es:", mayor)
            print("El intermedio es:", intermedio)
            print("El menor es:", menor)
        bandera = False
    except ValueError:
        print("Error: Solo se pueden ingresar números")
        print("Por favor intentelo de nuevo")