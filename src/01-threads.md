# Java Thread

## Esercizio 1
Scrivere un programma che incrementa un contatore intero per 40000 volte creando una classe Counter e una classe Incrementatore con il main che istanzia e usa Counter (e verificando poi il valore di Counter stampandolo)
1. senza thread;
2. generando 4 thread che tutti insieme incrementano di 10000 volte il contatore, SENZA curarsi della race condition  (e vedere il risultato);
3. generando 4 thread, curandosi della race condition (e vedere il risultato!). 

## Esercizio 2
Scrivere un programma Java per: 
- Inizializzare un array di 1200000 interi al valore 42;
- Misurando il tempo necessario. 

Verificare le prestazioni del programma al variare del numero dei thread 1 ... P (P> maggiore del numero di thread del processore).

## Esercizio 3
Scrivere un programma Java per: 
- Sommare un array di 1200000 interi inizializzato con valori pseudo-casuali;
- Misurando il tempo necessario. 

Verificare le prestazioni del programma al variare del numero dei thread 1 ... P (P> maggiore del numero di thread del processore).

## Esercizio 4
Scrivere un programma Java per: 
- Calcolare il massimo di array di 1200000 interi inizializzato con valori pseudo-casuali;
- Misurando il tempo necessario. 

Verificare le prestazioni del programma al variare del numero dei thread 1 ... P (P> maggiore del numero di thread del processore).

## Esercizio 5
Modificare il seguente codice al fine di scrivere su standard output la stringa `smiley`.
```java
   public class Smiley extends Thread {
       public void run() {
           while(true) {
               try { 
                //L TUO CODICE VA QUI
               } catch (InterruptedException e)
               { e.printStackTrace(); }
           }
       }
   
       private  void printparentesichiusa() throws InterruptedException {
           System.out.println(")"); Thread.sleep(100);
       }
       private void printtrattino() throws InterruptedException {
           System.out.print("-"); Thread.sleep(100);
       }
       private void printduepunti() throws InterruptedException {
           System.out.print(":"); Thread.sleep(100);
       }
       public static void main(String[] args) {
           new Smiley().start();
           new Smiley().start();
       }
   }
```


## Esercizio 6

- Scrivere un programma con 2 thread, che va sempre in deadlock.
- Scrivere un programma con 3 thread, che va sempre in deadlock.
- Scrivere un programma dove un numero n (alto) di thread fa incremento di un contatore (inizializzato a 0) per un numero m (alto) di volte. 
  - Quando l’incremento del contatore non è in mutua esclusione, causare un errore (alla fine il contatore NON è m*n).
  - Inserire tecniche di mutua esclusione di tipo vario e verificare l’impatto sulle prestazioni.
