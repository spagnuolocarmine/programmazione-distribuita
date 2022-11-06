- [Esercizio 0 - Music Library](#esercizio-0---music-library)
  - [Music Library](#music-library)
    - [Definizione entità e persistenza](#definizione-entità-e-persistenza)
    - [Definizione della logica della nostra applicazione](#definizione-della-logica-della-nostra-applicazione)
  - [Music Library Client](#music-library-client)
- [Esercizio 0.1 - Music Library++](#esercizio-01---music-library)
- [Esercizio 0.2 - PDtify 🎵](#esercizio-02---pdtify-)
- [Esercizio 1 - Calcolatrice EJB](#esercizio-1---calcolatrice-ejb)
- [Esercizio 2 - Calcolatrice EJB basata su stack](#esercizio-2---calcolatrice-ejb-basata-su-stack)
- [Esercizio 3 - Calcolatrice EJB basata su stack persistente](#esercizio-3---calcolatrice-ejb-basata-su-stack-persistente)

# Esercizio 0 - Music Library

Creare due progetti:
- **MusicLibrary**: New Project ➡️ Java with Ant ➡️ Java Enterprise ➡️ EJB Module
- **MusicLibraryClient**: New Project ➡️ Java with Ant ➡️ Java Application (con una main class)
  
## Music Library
Creare un nuovo pacchetto Source Packages ➡️ New ➡️ Java Package `ìt.pd2022.musiclibrary`

### Definizione entità e persistenza

- `Song.java` definisce un entità persistente che identifica un brano musicale.
```java
//import packages
import static it.pd2022.musiclibrary.Song.TROVA_TUTTE;
@Entity
@NamedQueries({
    @NamedQuery(name = TROVA_TUTTE, query = "SELECT s FROM Song s"),
})
public class Song implements Serializable{
    public static final String TROVA_TUTTE = "Song.trovaTutteCanzoni";
    @Id @GeneratedValue
    private Long ID;
    private String authors;
    private String name;
    private URL url; //link youtube 
    public Song() { }
    public Song(String authors, String name, URL url) {
        this.authors = authors;
        this.name = name;
        this.url = url;
    }
    //Insert code -> getters and setter
    //Insert code -> toString()
}
```
**Nota**: ottenere i link da youtube utilizzando il tasto _Condividi_ ➡️ _Incorpora_ dal player youtube.
- Dobbiamo denifire una nuova Persistence Unit in modalità JTA: `MusicLibraryPU`
  - New ➡️ Persistence Unit, e come segue:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.1" xmlns="http://xmlns.jcp.org/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence     http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd">
  <persistence-unit name="MusicLibraryPU" transaction-type="JTA">
    <provider>org.eclipse.persistence.jpa.PersistenceProvider</provider>
    <jta-data-source>java:global/jdbc/MusicLibraryDataSource</jta-data-source>
    <properties>
      <property name="eclipselink.target-database" value="DERBY"/>
      <property name="eclipselink.ddl-generation" value="drop-and-create-tables"/>
      <property name="eclipselink.logging.level" value="INFO"/>
    </properties>
  </persistence-unit>
</persistence>
```
- Creaiamo un nuovo Singleton istanziato in fase di avvio dell'applicazione che consente l'inizializzazione e la definizione di un nuovo database e datasource per la nostra applicazione: `DatabasePopulator.java`
```java
@Singleton
@Startup 
@DataSourceDefinition(
    className ="org.apache.derby.jdbc.EmbeddedDataSource", name ="java:global/jdbc/MusicLibraryDataSource",
    user ="APP",
    password ="APP",
    databaseName ="MusicLibraryDB",
    properties = {"connectionAttributes=;create=true"} 
)
public class DatabasePopulator { 
   
    //PER ORA VUOTO
}
```
> 🚀 A questo punto la parte base della persistenza è terminata e possiamo eseguire la build del progetto e il deploy su GlassFish.

### Definizione della logica della nostra applicazione
Le funzionalità dell'applicazione saranno definite in un enterprise java bean stateless chiamato `MusicLibrary.java`, che saranno offerte ai client (applicazioni Java) tramite l'invocazione di metodi remoti, quindi dovremo definire ed implementare un interfaccia remota `MusicLibraryRemote.java`.
```java
@Stateless
@LocalBean
public class MusicLibrary implements MusicLibraryRemote{
    
    @Inject
    private EntityManager em; 

    public List<Song> findSongs() {
        TypedQuery<Song> query = em.createNamedQuery(Song.TROVA_TUTTE, Song.class);
        return query.getResultList();
    }
    public Song createSong( Song song) {
        em.persist(song);
        return song;
    }
}
```

```java
@Remote
public interface MusicLibraryRemote {
    public List<Song> findSongs();
    public Song createSong(Song song);
}
```

Nella definzione del nostro EJB MusicLibrary utilizziamo l'iniezione di una dipendenza ad un `EntityManager` di conseguenza dobbiamo definire un metodo per la "produzione" di tale oggetto in una classe `DatabaseProducer.java` come segue.

```java
public class DatabaseProducer {
     
    @Produces
    @PersistenceContext(unitName ="MusicLibraryPU") 
    private EntityManager em;
}

```
- Prima di proseguire dobbiamo include nel nostro progetto la definizione del file `beans.xml`che ci permette di impostare la disscovery mode dei nostri beans a all.
  - New File ➡️ Contexts and Dependency Injection ➡️ beans.xml, impostare `bean-discovery-mode="all"`
- A questo punto possiamo completare il nostro `DatabasePopulator.java`inserendo nel database alcune canzoni di esempio ed utilizzando l'EJB MusicLibrary. Possiamo inserire la definizione del seguente metodo:
```java
@PostConstruct
private void populateDB() {
    try {
        s1 = new Song("Queen","We Are The Champions", new URL("https://www.youtube.com/embed/KXw8CRapg7k"));
        s2 = new Song("Home Free", "Sea Shanty Medley", new URL("https://www.youtube.com/embed/lLGLUSzzuWU"));
        lib.createSong(s1);
        lib.createSong(s2);
    } catch (MalformedURLException ex) {
        Logger.getLogger(DatabasePopulator.classgetName()).log(Level.SEVERE, null, ex);
    }
}
```

> 🚀 La parte di logica è terminata e possiamo eseguire la build del progetto e il deploy su GlassFish.
## Music Library Client
Prima di procedere con lo sviluppo del nostro java client dobbiamo specificare le dipendenze necessarie:
* 1️⃣ Progetto `MusicLibrary`: Properties ➡️ Libraries ➡️  Classpath ➕  ➡️ Add Projects...  ➡️ `MusicLibrary`
* 2️⃣ Libreria `gf-clinet.jar`: Properties ➡️ Libraries ➡️  Classpath ➕  ➡️ Add JAR/Folder ➡️ `[USER_HOME]/GlassFish_Server/glassfish/lib/gf-clinet.jar`, la libreria si trova nella vostra installazione di glassfish nel path specificato.
```java 
public class MusicLibraryClient {

    public static void main(String[] args) throws NamingException {
        Context ctx = new InitialContext();
        MusicLibraryRemote ejb = (MusicLibraryRemote) ctx.lookup("java:global/MusicLibrary/MusicLibrary!it.pd2022.musiclibrary.MusicLibraryRemote");
        
        List<Song> lista = ejb.findSongs();
        for(Song s: lista)
            System.out.println(s);
    }
    
}
```
**Nota** l'indirizzo JNDI dell'interfaccia remota del bean MusicLibrary può essere visualizzato nella console di output di glassfish subito dopo il deploy dell'applicazione.
# Esercizio 0.1 - Music Library++

Aggiungere le seguenti funzionalità al progetto MusicLibrary:

1. Ampliare la definzione di `Song` inserendo: 
   - anno di rilascio, 
   - numero di visualizzazioni (numero di volte in cui il bravo è stato riprodotto), 
   - lyrics; 
   - specificare delle nuove NamedQuery che permettano la ricerca delle canzoni per anno di rilascio, nome autore, nome del brano.
2. Definire una nuova entità `Playlist` che consente di collezionare molteplici `Song`, specificando 
   - nome, 
   - autore, 
   - tipologia, 
   - descrizione,
   - data in cui è stato effettuato l'ultimo aggiornamento.
  
    Le playlist possono essere create, modificate, visualizzate, e ricercate per tipologia.
3. Ampliare la definizione di `MusicLibrary` per supportare le precedenti nuove entità e funzionalità. 
   - Introdurre la definizione di una metodo `play(song_ID)` che permette di ottenere la URL di una song, questo metodo va intercettato per aggiornare il numero di volte che un particolare brano viene riprodotto.
   - _Opzionale_: estendere la definizione del metodo play per la riproduzione di un lista di brani ottenuti da una particolare playlist.

Mofificare la classe main di `MusicLibraryClient` per il testing e la verifica di tutte le funzionalità di `MusicLibrary`.

# Esercizio 0.2 - PDtify 🎵
**Obiettivo**: creare un enterprise java application con due moduli principali un modulo di business/persistenza e un modulo di presentazione web.

- `PDtify`: New Project ➡️ Java with Ant ➡️ Java Enterprise ➡️ Enterprise Application
- Output in Netbeans: 
  - `PDtify` enterprise application.
  - `PDtify-ejb` un modulo ejb.
  - `PDtify-web` un modulo web.
- Riportare il progetto `MusicLibray` nel modulo `PDtify-ejb`.
- Costruire un nuovo client web utilizzando una servelet `MusicPlayer` che sfrutta l'EJB `MusicLibrary` per offrire attraverso una pagina web tutte le funzionalità dell'applicazione.
- _Note_: bisogna riportare nel modulo ejb tutte le definizione di persistence e beans.xml. Inoltre, quando si eseguono le operazioni di build, deploy, e run del progetto vanno lanciate dal progetto principale entrprise `PDtify`.
- `play()`la visualizzazione del metodo play può essere ottenuta utilizzando l'embedding della URL di un brano all'interno di un iframe:
    ```java
         Song s =  new Song("Queen","We Are The Champions", new URL("https://www.youtube.com/embed/KXw8CRapg7k"));
         out.println("<iframe width=\"420\""+
                             "height=\"315\"\n" +
                             "src=\""+s.getUrl()+"\">\n" +
                     "</iframe>");
    ```
# Esercizio 1 - Calcolatrice EJB

Scrivere un client Java che invoca degli EJB sul server che implementano un servizio di calcolatrice per tipi float. La calcolatrice offre tre metodi, tutti prendono in input due operandi di tipo `float` e restituiscono un `float`:

- `add(float,float)`
- `sub(float,float)`
- `multiply(float,float)`

Il server offre inoltre un servizio di counting `count()` che restituisce il numero di operazioni effettuate da tutti i clienti dall’avvio del server. Il client deve offrire da console un interfaccia che permetta di effettuare tutte le operazioni da remoto.

# Esercizio 2 - Calcolatrice EJB basata su stack

Scrivere un client Java che invoca degli Enterprise EJB sul server che implementano un servizio di calcolatrice basata su stack per tipi `float`. La calcolatrice offre cinque metodi. Tre di questi metodi rappresentano operazioni aritmetiche che non prendono input e operano direttamente sui dati nello stack: `add()`, `sub()`, `multiply()`.
In aggiunta, il server offre il metodovoid `push(float)` e `float pop()` per la gestione dello stack. Nota che l’unico metodo che restituisce valori è la `pop()`. Le operazione aritmetiche eseguono implicitamente due `pop()` per prelevare gli operandi e una `push()` per salvare il valore di ritorno.

Esempio di esecuzione del servizio:

- `push(3)`, `push(4)`, `add()`, `pop()` ➡️ 7
- `push(3)`, `push(4)`, `multiply()`, `pop()` ➡️ 12
- `push(3)`, `push(4)`, `push(1)`, `add()`, `pop()` ➡️ 5
- `push(3)`, `push(4)`, `push(1)`, `add()`, `add()`, `pop()` ➡️ 8

Avanzato: gestire i meccanismi di attivazione e passivazione.

# Esercizio 3 - Calcolatrice EJB basata su stack persistente

Estendere il servizio di calcolatrice basata su stack implementata nell’esercizio precedente aggiungendo un livello di persistenza dello stack. In particolare, ad ogni operazione, lo stack deve essere salvato su database. All’interfaccia del servizio verrà aggiunto il metodo `loadStack(String stackName)` e `saveStack(String stackName)` che consentono all’utente di caricare lo stack da database . Se il client non invoca la `loadStack()`, la sessione si avvia con uno stack vuoto. Lo stack puo essere salvato nel formato piu appropriato, anche come stringa.

Al fine di completare l’esercizo, occorre

1. Implementare il metodo `loadStack(String username)`.
2. Implementare il metodo `saveStack(String username)`.
3. Implementare un metodo `stackList()` che restituisce tutti i nomi degli stack
salvati su database.
4. Implementare un interceptor che, alla fine dell’interazione con un client, stampa una
lista dei stackName usati da quell’utente in quella sessione.
