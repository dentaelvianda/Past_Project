import java.util.Scanner;
public class genapganjil
{
	
	public static void main(String [] args)
	{
	Scanner input=new Scanner(System.in);
	
	System.out.println("Bilangan Genap & Ganjil");
	System.out.println("\n");
	System.out.print("Masukkan nilai = ");
	int a=input.nextInt();
	if (a%2==0){
	System.out.println( +a +"Merupakan bilangan genap");
	}
	else
	{ 
		System.out.println(+a +"Merupakan bilangan ganjil");
	
	}
}
}