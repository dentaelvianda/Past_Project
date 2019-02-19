import java.util.Scanner;
public class nama
{
	
	public static void main(String[] args)
	{
	String b1="";
	String b2="";
	String b3="";
	Scanner input=new Scanner(System.in);

	System.out.print("Masukkan Nama Depan = ");
	b1=input.next();
	System.out.print("Masukkan Nama Tengah = ");
	b2=input.next();
	System.out.print("Masukkan Nama Belakang = ");
	b3=input.next();
	System.out.print("Namaku adalah = " +b1 +"" +b2 +"" +b3);
	}
}