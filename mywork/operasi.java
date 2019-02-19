import java.util.Scanner;
public class operasi
{
	
	public static void main(String[] args)
	{
	int b1;
	int b2;
	Scanner input=new Scanner(System.in);

	System.out.print("Masukkan B1 dan B2 berturut = ");
	b1=input.nextInt();
	b2=input.nextInt();
	System.out.println("Penambahan B1 dan B2 = " +(b1+b2));
	System.out.println("Perkalian B1 dan B2 = " +(b1*b2));
	System.out.println("Pengurangan B1 dan B2 = " +(b1-b2));
	System.out.println("Pembagian B1 dan B2 = " +(b1/b2));
	}
}