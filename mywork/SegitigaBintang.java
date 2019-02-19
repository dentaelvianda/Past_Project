class SegitigaBintang {
   public static void main(String [] args){
      int i,j,k=7;
      for(i=1;i<=k;i++){
         for(j=0;j<=i;j++){
            System.out.print(" ");
         }
         for(j=k;j<=i;k--){
            System.out.print(" *");
         }
         System.out.print("\n");
      }
   }
}