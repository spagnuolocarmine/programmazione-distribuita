- [Esercizio 0 - Hello World EJB](#esercizio-0---hello-world-ejb)
- [Esercizio 1 - Music Library 🎵📚 (warm-up 🏋)](#esercizio-1---music-library--warm-up-)
  - [Music Library](#music-library)
    - [Definizione entità e persistenza](#definizione-entità-e-persistenza)
    - [Definizione della logica della nostra applicazione](#definizione-della-logica-della-nostra-applicazione)
  - [Music Library Client](#music-library-client)
- [Esercizio 2 - Music Library++ 🎵📚](#esercizio-2---music-library-)
- [Esercizio 3 - PDtify 🎵 ⏯️](#esercizio-3---pdtify--️)
- [Esercizi Bonus](#esercizi-bonus)
  - [Esercizio B.1 - Calcolatrice EJB](#esercizio-b1---calcolatrice-ejb)
  - [Esercizio B.2 - Calcolatrice EJB basata su stack](#esercizio-b2---calcolatrice-ejb-basata-su-stack)
  - [Esercizio B.3 - Calcolatrice EJB basata su stack persistente](#esercizio-b3---calcolatrice-ejb-basata-su-stack-persistente)

> 🚀 Se avete problemi con la lookup dei vostri bean potete verificare che state utilizzando il dominio corretto con i parametri di default nel file `[USER_HOME]/GlassFish_Server/glassfish/domains/domain1/config/domain.xml`. Il pacchetto `[USER_HOME]/GlassFish_Server/glassfish/lib/gf-client.jar` carica configurazioni per l'InitialContext di default ([GlassFish Server Administration Guide](https://docs.oracle.com/cd/E26576_01/doc.312/e24928/overview.htm#GSADG00004)). 

> ❓ Esempio di setting della porta per il servizio IIOP necessario per il discovery di RMI: 
```java
Properties props = new Properties();
props.setProperty("java.naming.factory.initial",
"com.sun.enterprise.naming.SerialInitContextFactory");
props.setProperty("java.naming.factory.url.pkgs",
"com.sun.enterprise.naming");
props.setProperty("java.naming.factory.state",
"com.sun.corba.ee.impl.presentation.rmi.JNDIStateFactoryImpl");
props.setProperty("org.omg.CORBA.ORBInitialHost", "localhost");
props.setProperty("org.omg.CORBA.ORBInitialPort", "3700");
Context ctx = new InitialContext(props);
```
# Esercizio 0 - Hello World EJB

Ripetere l'esercitazione visto a lezione per la definizione di un nuovo _stateless_ EJB `HelloWorld` che implementa un metodo `sayHello(String text)` che restituisce una stringa di saluto. Il client deve essere un applicazione Java che invoca il metodo remoto `sayHello("Hello my name is "+name)` e stampa il risultato a console.

> 🚀 Includere nell'applicazione Java SE Client il pacchetto ``[USER_HOME]/GlassFish_Server/glassfish/lib/gf-client.jar`` per la lookup del bean remoto. Definendo la sua interfaccia remota `HelloWorldRemote.java` come segue:
```java
@Remote
public interface HelloWorldEJBRemote{
    public String sayHello(String name);
}
```

# Esercizio 1 - Music Library 🎵📚 (warm-up 🏋)

Creare due progetti:
- **MusicLibrary**: New Project ➡️ Java with Ant ➡️ Java Enterprise ➡️ EJB Module
- **MusicLibraryClient**: New Project ➡️ Java with Ant ➡️ Java Application (con una main class)
  
## Music Library
Creare un nuovo pacchetto Source Packages ➡️ New ➡️ Java Package `ìt.pd2023.musiclibrary`

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
private Song s1, s2; 
@Inject
private MusicLibrary lib;

@PostConstruct
private void populateDB() {
    try {
        s1 = new Song("Queen","We Are The Champions", new URL("https://www.youtube.com/embed/KXw8CRapg7k"));
        s2 = new Song("Home Free", "Sea Shanty Medley", new URL("https://www.youtube.com/embed/lLGLUSzzuWU"));
        lib.createSong(s1);
        lib.createSong(s2);
    } catch (MalformedURLException ex) {
        Logger.getLogger(DatabasePopulator.class.getName()).log(Level.SEVERE, null, ex);
    }
}
```

> 🚀 La parte di logica è terminata e possiamo eseguire la build del progetto e il deploy su GlassFish.
## Music Library Client
Prima di procedere con lo sviluppo del nostro java client dobbiamo specificare le dipendenze necessarie:
* 1️⃣ Progetto `MusicLibrary`: Properties ➡️ Libraries ➡️  Classpath ➕  ➡️ Add Projects...  ➡️ `MusicLibrary`
* 2️⃣ Libreria `gf-client.jar`: Properties ➡️ Libraries ➡️  Classpath ➕  ➡️ Add JAR/Folder ➡️ `[USER_HOME]/GlassFish_Server/glassfish/lib/gf-client.jar`, la libreria si trova nella vostra installazione di glassfish nel path specificato.
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
> 🚀 Il client della nostra applicazione è pronto possiamo eseguirlo.
> 🎯 Output:
> ```
> run: nov 06, 2022 1:32:13 PM com.sun.enterprise.v3.server.CommonClassLoaderServiceImpl findDerbyClient
> INFORMAZIONI: Cannot find javadb client jar file, derby jdbc driver will not be available by default.
> Song{ID=2, authors=Home Free, name=Sea Shanty Medley, url=https://www.youtube.com/watch?v=lLGLUSzzuWU&ab_channel=HomeFree}
> Song{ID=1, authors=Queen, name=We Are The Champions, url=https://www.youtube.com/watch?v=KXw8CRapg7k&ab_channel=QueenVEVO}
> BUILD SUCCESSFUL (total time: 2 seconds)
> ```
**Nota** l'indirizzo JNDI dell'interfaccia remota del bean MusicLibrary può essere visualizzato nella console di output di glassfish subito dopo il deploy dell'applicazione.
# Esercizio 2 - Music Library++ 🎵📚

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
  
    Le playlist possono essere create, modificate, visualizzate, ricercate per tipologia, ed eliminate senza eliminare dal database i brani contenuti.
3. Ampliare la definizione di `MusicLibrary` per supportare le precedenti nuove entità e funzionalità. 
   - Introdurre la definizione di una metodo `play(song_ID)` che permette di ottenere la URL di una song, questo metodo va intercettato per aggiornare il numero di volte che un particolare brano viene riprodotto. Modificare il file `beans.xml` per aggiungere la definizione del nuovo interceptor:
   ```xml
     <beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/beans_1_1.xsd"
           version="1.1" bean-discovery-mode="all">
       <interceptors>
          <class>org.agoncal.book.javaee7.chapter02.LoggingInterceptor</class>
        </interceptors>
    </beans>
   ```
   - _Opzionale_: estendere la definizione del metodo play per la riproduzione di un lista di brani ottenuti da una particolare playlist.

Mofificare la classe main di `MusicLibraryClient` per il testing e la verifica di tutte le funzionalità di `MusicLibrary`.

# Esercizio 3 - PDtify 🎵 ⏯️
**Obiettivo**: creare un enterprise java application con due moduli principali un modulo di business/persistenza e un modulo di presentazione web che permetta la gestione di una libreria musicale evoluta (playlist) utilizzando come player di riproduzione web le API di Youtube Embedded.
- ⚠️ **prima di procedere effettuare l'undeploy del progetto precedente dal server glassfish**. 
- `PDtify`: New Project ➡️ Java with Ant ➡️ Java Enterprise ➡️ Enterprise Application
- Output in Netbeans: 
  - `PDtify` enterprise application.
  - `PDtify-ejb` un modulo ejb.
  - `PDtify-web` un modulo web.
- Riportare il progetto `MusicLibray` nel modulo `PDtify-ejb`.
- Costruire un nuovo client web utilizzando una servelet `MusicPlayer` che sfrutta l'EJB `MusicLibrary` per offrire attraverso una pagina web tutte le funzionalità dell'applicazione. Quando si crea la Servlet specificare _Add information to the deployment descriptor (web.xml)_ passaggio 2 del wizard di creazione della Servlet.
- _Note_: 
  * riportare nel modulo ejb tutte le definizione di persistence e beans.xml;
  * quando si eseguono le operazioni di build, deploy, e run del progetto vanno lanciate dal progetto principale entrprise `PDtify`;
  * per specificare che di default la index della nostra applicazione sarà la Servlet `MusicPlayer` modificare il file `PDtify-war/Web Pages/WEB-INF/web.xml` come segue:
    ```xml
        <servlet-mapping>
            <servlet-name>MusicPlayer</servlet-name>
            <url-pattern>/</url-pattern>
        </servlet-mapping>
    ```
- `play()`la visualizzazione del metodo play può essere ottenuta utilizzando l'embedding della URL di un brano all'interno di un iframe:
    ```java
         Song s =  new Song("Queen","We Are The Champions", new URL("https://www.youtube.com/embed/KXw8CRapg7k"));
         out.println("<iframe width=\"420\""+
                             "height=\"315\"\n" +
                             "src=\""+s.getUrl()+"\">\n" +
                     "</iframe>");
    ```
# Esercizi Bonus
## Esercizio B.1 - Calcolatrice EJB

Scrivere un client Java che invoca degli EJB sul server che implementano un servizio di calcolatrice per tipi float. La calcolatrice offre tre metodi, tutti prendono in input due operandi di tipo `float` e restituiscono un `float`:

- `add(float,float)`
- `sub(float,float)`
- `multiply(float,float)`

Il server offre inoltre un servizio di counting `count()` che restituisce il numero di operazioni effettuate da tutti i clienti dall’avvio del server. Il client deve offrire da console un interfaccia che permetta di effettuare tutte le operazioni da remoto.

## Esercizio B.2 - Calcolatrice EJB basata su stack

Scrivere un client Java che invoca degli Enterprise EJB sul server che implementano un servizio di calcolatrice basata su stack per tipi `float`. La calcolatrice offre cinque metodi. Tre di questi metodi rappresentano operazioni aritmetiche che non prendono input e operano direttamente sui dati nello stack: `add()`, `sub()`, `multiply()`.
In aggiunta, il server offre il metodovoid `push(float)` e `float pop()` per la gestione dello stack. Nota che l’unico metodo che restituisce valori è la `pop()`. Le operazione aritmetiche eseguono implicitamente due `pop()` per prelevare gli operandi e una `push()` per salvare il valore di ritorno.

Esempio di esecuzione del servizio:

- `push(3)`, `push(4)`, `add()`, `pop()` ➡️ 7
- `push(3)`, `push(4)`, `multiply()`, `pop()` ➡️ 12
- `push(3)`, `push(4)`, `push(1)`, `add()`, `pop()` ➡️ 5
- `push(3)`, `push(4)`, `push(1)`, `add()`, `add()`, `pop()` ➡️ 8

Avanzato: gestire i meccanismi di attivazione e passivazione.

## Esercizio B.3 - Calcolatrice EJB basata su stack persistente

Estendere il servizio di calcolatrice basata su stack implementata nell’esercizio precedente aggiungendo un livello di persistenza dello stack. In particolare, ad ogni operazione, lo stack deve essere salvato su database. All’interfaccia del servizio verrà aggiunto il metodo `loadStack(String stackName)` e `saveStack(String stackName)` che consentono all’utente di caricare lo stack da database . Se il client non invoca la `loadStack()`, la sessione si avvia con uno stack vuoto. Lo stack puo essere salvato nel formato piu appropriato, anche come stringa.

Al fine di completare l’esercizo, occorre

1. Implementare il metodo `loadStack(String username)`.
2. Implementare il metodo `saveStack(String username)`.
3. Implementare un metodo `stackList()` che restituisce tutti i nomi degli stack
salvati su database.
4. Implementare un interceptor che, alla fine dell’interazione con un client, stampa una
lista dei stackName usati da quell’utente in quella sessione.
