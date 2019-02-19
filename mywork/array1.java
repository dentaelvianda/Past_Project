import java.util.Scanner;
public class array1 {
    public static void main(String [] args)
	{
	Scanner input=new Scanner(System.in);
	int i; 
	int [] x=new int[10];
        int max=x[0];
	System.out.print("Masukkan data x"+"("+i+")");
        x[i]=input.nextInt();
	for(i=0;i<=5;i++){
	if(max > x[i+1]){
        max = x[i];}
        
}
}
}