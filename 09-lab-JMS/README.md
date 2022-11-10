- [Esercizio 0](#esercizio-0)
- [Esercizio 1](#esercizio-1)
- [Esercizio 2](#esercizio-2)
- [Esercizio 3](#esercizio-3)
- [Esercizio 4 - PDtify 🎵 ⏯️](#esercizio-4---pdtify--️)
# Esercizio 0

- Riferimento: org.agoncal.book.javaee7.chapter13
- New Project ➡️ Java with Ant ➡️ Java Application
- Aggiungere le dipendenze: `Java EE7 API Library` e `gf-client.jar`
  
1. Definire un nuovo wrapper per i messaggi relativi ad un ordine, come segue:
   
    ```java
    public class OrderDTO implements Serializable {

    private Long orderId;
    private Date creationDate;
    private String customerName;
    private Float totalAmount;

    public OrderDTO() {
    }

    public OrderDTO(Long orderId, Date creationDate, String customerName, Float totalAmount) {
        this.orderId = orderId;
        this.creationDate = creationDate;
        this.customerName = customerName;
        this.totalAmount = totalAmount;
    }

    //Getters and setters
    //toString()
    }
    ```

2. Definire un Producer di messaggi, come segue:

    ```java
    public class OrderProducer {

    public static void main(String[] args) throws NamingException {
        // Creates an orderDto with a total amount parameter
        float value = 10.0;
        Float totalAmount = Float.valueOf(10);
        OrderDTO order = new OrderDTO(1234l, new Date(), "Serge Gainsbourg", totalAmount);

        // Gets the JNDI context
        Context jndiContext = new InitialContext();

        // Looks up the administered objects
        ConnectionFactory connectionFactory = (ConnectionFactory) jndiContext.lookup("jms/javaee7/ConnectionFactory");
        Destination topic = (Destination) jndiContext.lookup("jms/javaee7/Topic");

        try (JMSContext jmsContext = connectionFactory.createContext()) {
        // Sends an object message to the topic
        jmsContext.createProducer().setProperty("orderAmount", totalAmount).send(topic, order);
        System.out.println("\nOrder sent : " + order.toString());
        }
     }
    }
    ```

3. Definire un Consumer di messaggi, come segue:
   
   ```java
    public class OrderConsumer {
    public static void main(String[] args) throws NamingException {

        // Gets the JNDI context
        Context jndiContext = new InitialContext();

        // Looks up the administered objects
        ConnectionFactory connectionFactory = (ConnectionFactory) jndiContext.lookup("jms/javaee7/ConnectionFactory");
        Destination topic = (Destination) jndiContext.lookup("jms/javaee7/Topic");

        // Loops to receive the messages
        System.out.println("\nInfinite loop. Waiting for a message...");
        try (JMSContext jmsContext = connectionFactory.createContext()) {
        while (true) {
            OrderDTO order = jmsContext.createConsumer(topic).receiveBody(OrderDTO.class);
            System.out.println("Order received: " + order);
        }
        }
    }
    }
    ```

> 🚀 A questo punto è possibile eseguire prima il Consumer e poi il Producer.

# Esercizio 1

Scrivere un client Java che produce dei messaggi per un Topic di messaging su server Enterprise. Il client invia un messaggio con l’ordine per la costruzione di una moto, che è costituita da diverse componenti:
- Nome modello
- Nome telaio
- Nome pneumatici
  
Il server deve implementare attraverso un Message Driven Bean un servizio di notifica degli ordini, stampando a video il nome del modello della moto, del telaio e degli pneumatici. Il client deve offrire da console un’interfaccia che permetta di effettuare tutte le operazioni da remoto.

Note
- La ConnectionFactory deve chiamarsi: `jms/javaee7/ConnectionFactory`
- Il Topic deve chiamarsi: `jms/javaee7/Topic`

# Esercizio 2

Estendere l’esercizio precedente attraverso l’implementazione di un servizio di persistenza degli ordini che salvi su una tabella del database tutti gli ordini arrivati al server. Aggiungere un Singleton che popoli il database con 2 ordini.

Note
- PersistentUnit e DB devono chiamarsi rispettivamente MotoPU e MotoDB

# Esercizio 3

Estendere l’esercizio precedente aggiungendo un client Java che riceve i messaggi degli ordini delle moto e stampa li stampa a video; provare a ricevere tutti i messaggi inviati sul topic anche prima della sottoscrizione utilizzando un DurableConsumer. 

```java
 try (JMSContext jmsContext = connectionFactory.createContext()) {
    jmsContext.setClientID("uniqueID");
    JMSConsumer topicSubscriber = jmsContext.createDurableConsumer((Topic) topic, "uniqueID");
    OrderDTO order = topicSubscriber.receiveBody(OrderDTO.class);
    System.out.println("Order received: " + order);
    topicSubscriber.close();
}
```


# Esercizio 4 - PDtify 🎵 ⏯️

Definire una nuova servlet `Player` che si occupa di visualizzare il player youtube per un particolare brano o una playlist.

- *Input*: due parametri nel metodo GET `?id=x&type=song|playlist`:
  - _song_  viene visualizzato a tutto schermo il player youtube;
  - _playlist_ vengono visualizzati tutti i brani in una tabella, e mostra un tasto play per ogni brano.

Quando la servlet viene caricata in modalità _song_ viene inviato un nuovo messaggio sul Topic `jsm/musicplayer/Player` (utilizzare la factory di default di installazione di glassfish) contenete l'identificativo del brano. Se la servlet viene caricata in modalità _playlist_  si invia un messaggio sempre sullo stesso topic con l'identificativo della playlist.
La gestione dei messaggi avviene tramite l'utilizzo di MDB e degli eventi, per ogni messaggio si genera un messaggio di log visualizzato nella console di glassfish.

Sviluppare il progetto come segue:


- Definire due nuovi Qualifier `SongEvent` e `PlaylistEvent`. 
- Definire un wrapper di messaggi `MessageWrapper` che permette di memorizzare l'id di un brano o di una playlist ed il relativo tipo di messaggio song/playlist.
- Definire un nuovo message-driven bean `MusicLibraryMDB` che implementa `MessageListener`, per ogni messaggio ricevuto (MessageWrapper) si esegue il fire di un nuovo evento con body la relativa Song o Playlist.
- Definire due nuove classi `SongNotification`e `PlaylistNotification` che definiscono un singolo metodo `notify` che definisce un'opportuna `@Observes` di un entità `Song` o `Playlist` (parametro del metodo) con l'obiettivo di visualizzare un messaggio di log.

    ```java
        public class PlaySongNotification {
            public void notify(@Observes Song s){
                System.out.println("Playing song "+s.getName());
            }
        }
    ```
- Definire un nuovo stateless EJB `EventProducer` che consente di inviare messaggi su Topic `jsm/musicplayer/Player`.
- Definire una nuova servlet `Player`che si comporta come descritto ed utilizza l'`EventProducer` per notificare il play di un brano. 
- Definire un client Java `MDBtest` nel package test del ptrogetto EJB che definire un metodo main nel quale si esegue il test di tutte le funzionalità di scambio di messaggi definiti (aggiungere il file gf-client.jar come dipendenza).
- Modificare la servlet `MusicPlayer` al fine di utilizzare la nuova servlet `Player`per effettuare il play di un brano o una playlist.

