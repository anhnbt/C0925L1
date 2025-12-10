package center;

public abstract class Person {
    protected String name;
    protected int age;

    public static void sayHello() {
        System.out.println("Hello");
    }

    public abstract void displayInfo();
}
