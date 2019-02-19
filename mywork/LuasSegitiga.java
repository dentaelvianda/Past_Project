import java.util.Scanner;
public class LuasSegitiga
{
	
	public static void main(String[] args)
	{
	int b1;
	int b2;
	Scanner input=new Scanner(System.in);

	System.out.print("Masukkan nilai alas = ");
	b1=input.nextInt();
	
	System.out.println("Masukkan nilai tinggi = ");
	b2=input.nextInt();
	System.out.println("Luas segitia = " +(b1*b2)/2);
	
	}
}