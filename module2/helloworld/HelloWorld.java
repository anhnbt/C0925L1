import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("=== TIEM PHO ANH HAI ===");
        System.out.println("1. Pho tai");
        System.out.println("2. Pho chin");
        System.out.println("3. Com nguoi");
        System.out.println("0. Exit");
        Scanner sc = new Scanner(System.in);
        int choice;
        while (true) {
            System.out.println("Moi chon mon: ");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    System.out.println("Bạn đã chọn Phở tái nhiều hành");
                    break;
                case 2:
                    System.out.println("Bạn đã chọn Phở chín nhiều hành");
                    break;
                case 3:
                    System.out.println("Bạn đã chọn Cơm nguội");
                    break;
                case 0:
                    System.out.println("Thank You!");
                    System.exit(0);
                default:
                    System.out.println("Lựa chọn không đúng!");
            }
        }
    }
}
