# Java Remote Method Invocation (RMI)
## Hello World con Java Remote Method Invocation 
- In questo esempio utilizzeremo per il servizio di naming Java RMI registry `rmiregistry` presente nella directory `bin` della jdk,
  - per permettere al registro di caricare la codebase necessaria dobbiamo avviarlo all'interno della directory contente i file `.class`del nostro progetto, nel costro caso la direcory `$Project/build/classes`
- Per i nostri scopi definiamo un nuovo SecurityManager che garantisce una politica `AllPermission`.
- Per la lookup degli oggetti remoti utilizzeremo la classe [`Naming`](https://docs.oracle.com/javase/8/docs/api/java/rmi/Naming.html).  
- [Material di supporto: Oracle Getting Started Using Java RMI](https://docs.oracle.com/javase/8/docs/technotes/guides/rmi/hello/hello-world.html)
1. Definizione interfaccia remota `Hello.java`
```java
   public interface Hello extends java.rmi.Remote {
     String dimmiQualcosa(String daChi) throws java.rmi.RemoteException;
   }
```
2. Implementazione dell'oggetto remoto `HelloImpl.java`
```java
import java.rmi.*;
import java.rmi.server.UnicastRemoteObject; 
import java.security.Permission;
import java.util.logging.Logger;
public class HelloImpl extends UnicastRemoteObject implements Hello {
    
    private static final long serialVersionUID = -4469091140865645865L;
    static Logger logger= Logger.getLogger("global");
    public HelloImpl() throws RemoteException { }
    public String dimmiQualcosa(String daChi) throws RemoteException {
        logger.info("Sto salutando "+daChi);
        return "Ciao "+daChi+"!"; 
    }
    public static void main(String args[]) throws RemoteException { 
        System.setSecurityManager(new SecurityManager() {
            @Override
            public void checkPermission(Permission perm) {
            }
            @Override
            public void checkPermission(Permission perm, Object context) {
            }
        });
        try {
            logger.info("Creo l’oggetto remoto..."); 
            HelloImpl obj = new HelloImpl(); 
            logger.info("... ne effettuo il rebind...");
            Naming.rebind("HelloServer", obj); 
           
            logger.info("... Pronto!");
        } catch (Exception e) { 
            e.printStackTrace();
        }
    }
}
```
3. Definizione del client che utilizza l'oggetto remoto `HelloClient.java`
```java
import java.rmi.*;
import java.util.logging.Logger;
public class HelloClient {
    static Logger logger= Logger.getLogger("global");
    public static void main(String args[]) { 
        try {
            
        logger.info("Sto cercando l’oggetto remoto..."); 
        Hello obj = (Hello) Naming.lookup("rmi://localhost/HelloServer");  
        logger.info("... Trovato! Invoco metodo...");
        String risultato = obj.dimmiQualcosa("Pippo");
        System.out.println("Ricevuto:"+ risultato); } 
        catch (Exception e) { e.printStackTrace(); }

    }
}
```
4. Esecuzione del progetto
   - avviare `rmiregistry` dalla directory `~/$PROJECT_NAME/build/classes` porta di default `rmiregistry` 1099.
   - eseguire `HelloImpl.java`da netbeans tasto destro run file.
   - eseguire `HelloClient.java`da netbeans tasto destro run file.

## `rmiregistry` locale e export di oggetti remoti

- Server
```java
public void createStubAndBind() throws RemoteException {
	MessengerService stub = (MessengerService) UnicastRemoteObject.exportObject((MessengerService) this, 0);
	Registry registry = LocateRegistry.createRegistry(1099);
	registry.rebind("MessengerService", stub);
}
```
- Client
```java
Registry registry = LocateRegistry.getRegistry();
MessengerService server = (MessengerService) registry.lookup("MessengerService");
responseMessage = server.sendMessage("Client Message");
```

## Esercizi Java RMI

1. Progettare e realizzare una semplice applicazione RMI client/server per realizzare una calcolatrice:
    - Interfaccia remota `Calculator` che definire i metodi per le operazioni di somma, sottrazione, divisione e moltiplicazione;
    - `CalculatorImpl` implementa l'interfaccia `Calculator` ed estende ` java.rmi.server.UnicastRemoteObject` definendo la logica dell'applicazione;
    - `CalculatorServer` definisce solo il metodo _main_ e costruisce ed esporta l'oggetto remoto  `CalculatorImpl`;
    - `CalculatorClient` utilizza l'oggetto remoto `Calculator`.
2. Progettare e realizzare una  applicazione RMI client/server per la gestione delle prenotazioni di un Hotel, con le seguenti operazioni:
   -  il client deve essere in grado di ottenere la lista delle stanze libere;
   -  il client può tentare di prenotare una stanza e ottiene un risultato booleano;
   -  la applicazione deve funzionare in presenza di più client connessi.