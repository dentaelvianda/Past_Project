import java.util.Scanner;
public class Denta Elvianda R.R._1501154290_3 {
    public static void main (String[] args){

        Scanner input = new Scanner (System.in);
        System.out.println("Tebak Angkanya");
        int angka_misteri = 8;

       int tebakan = input.nextInt();
if    (tebakan != angka_misteri){
            if (tebakan < angka_misteri){
                System.out.println("Bilangan terlalu kecil, tebak lagi");
            }
                else {
                System.out.println("Bilangan terlalu besar, tebak lagi");    
            }
            tebakan = input.nextInt ();
            }
        System.out.println("Tebakan Benar");
        }
    }
