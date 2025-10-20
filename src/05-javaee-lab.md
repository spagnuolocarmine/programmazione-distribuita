# Laboratorio Java EE ☕
- [Laboratorio Java EE ☕](#laboratorio-java-ee-)
- [Installazione ambiente di sviluppo](#installazione-ambiente-di-sviluppo)
  - [Importare i progetti del libro di testo nel proprio ambiente](#importare-i-progetti-del-libro-di-testo-nel-proprio-ambiente)
- [Esercizi](#esercizi)
  - [0. Un primo esempio con CDI](#0-un-primo-esempio-con-cdi)
  - [1. 🗺️ Esercizio Explore CDI - Applicazione Hello World CDI](#1-️-esercizio-explore-cdi---applicazione-hello-world-cdi)
  - [2. ⏯️ Esercizio Music Library primi 👣](#2-️-esercizio-music-library-primi-)
  - [3. Verifica del funzionamento di Safe Exam Browser](#3-verifica-del-funzionamento-di-safe-exam-browser)
  - [Approfondimenti](#approfondimenti)

# Installazione ambiente di sviluppo
- Utilizzare solo la JDK SE 8.0
- Installare [Netbeans](https://netbeans.apache.org/download/nb15/)
- ⚠️ Utilizzare per il percorso di installazione di Netbeans e dei progetti solo path privi di spazio!
- Nel caso di più versioni della JDK, impostare Netbeans per utilizzare come default la JDK 8.0
- Unix like systems: netbeans/etc/netbeans.conf
- Aggiungere un nuovo server Glassfish 4.1: Tools ➡️ Servers ➡️ Add Servers ...
- Verificare che il server Glassfish utilizza JDK 8, nel caso modificare il file ```glassfish/config/asenv.conf``` per impostare il percorso corretto della JAVA_HOME





## Importare i progetti del libro di testo nel proprio ambiente 

[Repository](https://github.com/Apress/beg-java-ee-7) codice  del libro di testo [Beginning Java EE 7](https://link.springer.com/book/10.1007/978-1-4302-4627-5) 
  
1. Code ➡️ [Download Zip](https://github.com/Apress/beg-java-ee-7),  Unarchive the project zip, Open Project  
2. Aprire il progetto [chapter02-samples](https://github.com/Apress/beg-java-ee-7/tree/master/agoncal-book-javaee7-master/chapter02/chapter02-samples)
   - Analizzare il codice degli esercizi
3. Aprire il progetto [chapter02-putting-together](https://github.com/Apress/beg-java-ee-7/tree/master/agoncal-book-javaee7-master/chapter02/chapter02-putting-together) e provare ad eseguire il file ```Main.java```
   - Beginning Java EE 7 pg. 57 
   - Questo esempio utilizza [Weld](https://weld.cdi-spec.org/) un implementazione CDI per applicazioni Java o Java EE ora sviluppato nell'ambito del progetto [Jakarta EE](https://jakarta.ee/). Weld in questo caso consente di eseguire una applicazione Java SE che utilizza CDI.
  
# Esercizi

## 0. Un primo esempio con CDI
Creare un nuovo progetto ```CDI WebApplication``` per utilizzare la metodologia CDI per visualizzare tramite una Servlet il risulato della creazione di un istanza di ```Book```.
- New Project ➡️ Java with ➡️ Ant Java Web ➡️ Web Application
- Includere i sorgenti di `chapter02-putting-together` nel package principale, utilizzando la struttura originale (fare copia e incolla dei sorgenti ossia del package `org.agoncal.book.javaee7.chapter02` in src)
- Includere la dipendenza a J2EE 7, Project X ➡️ Properties ➡️ Libraries ➡️ Add Library ... ➡️ `Java EE Web 7 API Library`
- Create una nuova Servlet, chiamata ```NewServlet``` Source Package ➡️ New ➡️ Servlet... 
- Selezionare la modalità di discovery ``all`` nel file ```Web Pages/WEB-INF/beans.xml``` se non presente crearlo con new file in ```Web Pages/WEB-INF/beans.xml```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/beans_1_1.xsd"
       bean-discovery-mode="all">
</beans>
```
- Utilizzare la annotazione ```@Inject```per includere una nuova istanza ```BookService```nel codice della servlet
```java
public class MainServerlet extends HttpServlet {
    
    @Inject
    BookService b;
...
}
```
- Utilizzare il servizio BookService per costruire un nuovo libro e visualizzare risultato nell'output della servlet in elemento HTML `<h3>`
```java
 protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>"); out.println("<html>");
            out.println("<head>");
            out.println("<title >Servlet NewServlet </title >"); out.println("</head>");
            out.println("<body>"); out.println("<h1>Servlet NewServlet at " +
            request.getContextPath() + "</h1>");
            Book book = b.createBook("H2G2", 12.5f, "Geeky scifi Book");
            out.println("<h3>Libro creato:"+book+"</h3>"); out.println("</body>"); out.println("</html>");
        }
    }
```
## 1. 🗺️ Esercizio Explore CDI - Applicazione Hello World CDI
Realizzare da zero una nuova applicazione Hello World che utilizza una servlet per visualizzare in una pagina Web un messaggio di benvenuto.
  - La stringa viene elaborata tramite un particolare MB che implementa l'interfaccia `Welcome` che definisce i metedi `getWelcomeMessageLowercase()` e `getWelcomeMessageUppercase()`.
  - E' possibile utilizzare _Injection_, _Qualifiers_, e _Producers_.  
  - Provare a definire un producer per la stringa `hello world` e un producer per la stringa `HELLO WORLD` in maiuscolo specificando due diversi _qualifiers_. 
  - Implementare una servlet che visualizza il messaggio `hello world` e `HELLO WORLD` in maiuscolo invocando i corrispondenti metodi dell'MB.

## 2. ⏯️ Esercizio Music Library primi 👣
Gestire una libreria musicale definendo un oggetto _Song_ e un oggetto _Library_ che è un MB che tramite l'utilizzo di Producers dichiara un `ArrayList<Song>`. 
   - Il risultato dell'architettura deve permettere di utilizzare il seguente codice nella classe _Library_: `@Inject ArrayList<Song> db;`, preinizializzato con un fissato insieme di Song
     - la classe Library permette di gestire tutte le successive operazioni possibili di una libreria musicale (aggiungi, cancella, trova per ID, trova per nome, etc.).
   - Realizzare una serverlet che permette di visualizzare il contenuto della libreria in una pagina HTML.

## 3. Verifica del funzionamento di [Safe Exam Browser](https://safeexambrowser.org/)
## Approfondimenti 
- [JAVA EE 7: THE BIG PICTURE](https://tomylab.wordpress.com/2016/06/18/java-ee-7-the-big-picture/)

