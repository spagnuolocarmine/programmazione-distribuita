- [Installazione ambiente di sviluppo](#installazione-ambiente-di-sviluppo)
  - [Esercizi](#esercizi)
    - [Importare i progetti del libro di testo nel proprio ambiente](#importare-i-progetti-del-libro-di-testo-nel-proprio-ambiente)
    - [Un primo esempio con CDI](#un-primo-esempio-con-cdi)
    - [Applicazione Hello World CDI](#applicazione-hello-world-cdi)
  - [Approfondimenti](#approfondimenti)

# Installazione ambiente di sviluppo
- Utilizzare solo la JDK SE 8.0
- Installare [Netbeans](https://netbeans.apache.org/download/nb15/)
- ⚠️ Utilizzare per il percorso di installazione di Netbeans e dei progetti solo path privi di spazio!
- Nel caso di più versioni della JDK, impostare Netbeans per utilizzare come default la JDK 8.0
- Unix like systems: netbeans/etc/netbeans.conf
- Aggiungere un nuovo server Glassfish 4.1: Tools ➡️ Servers ➡️ Add Servers ...
- Verificare che il server Glassfish utilizza JDK 8, nel caso modificare il file ```glassfish/config/asenv.conf``` per impostare il percorso corretto della JAVA_HOME

## Esercizi

- [Repository](https://github.com/Apress/beg-java-ee-7) codice  del libro di testo [Beginning Java EE 7](https://link.springer.com/book/10.1007/978-1-4302-4627-5) 

### Importare i progetti del libro di testo nel proprio ambiente 

1. Code ➡️ Download Zip,  Unarchive the project zip, Open Project  
2. Aprire il progetto [chapter02-samples](https://github.com/Apress/beg-java-ee-7/tree/master/agoncal-book-javaee7-master/chapter02/chapter02-samples)
  - Aggiungere nel descrittore di progetto [Maven](https://maven.apache.org/) nella dipendenza ```javaee-api```la versione specifica di J2EE 7.0 
  ```maven 
      <dependency>
        <groupId>javax</groupId>
        <artifactId>javaee-api</artifactId>
        <version>7.0</version>
      </dependency> 
   ```
   - Analizzare il codice degli esercizi
3. Aprire il progetto [chapter02-putting-together](https://github.com/Apress/beg-java-ee-7/tree/master/agoncal-book-javaee7-master/chapter02/chapter02-putting-together) e provare ad eseguire il file ```Main.java```
   - Beginning Java EE 7 pg. 57 
### Un primo esempio con CDI
Creare un nuovo progetto ```CDI WebApplication``` per utilizzare la metodologia CDI per visualizzare tramite una Servlet il risulato della creazione di un istanza di ```Book```.
- New Project ➡️ Java with ➡️ Ant Java Web ➡️ Web Application
- Includere i sorgenti di `chapter02-putting-together` nel package principale, utilizzando la struttura originale
- Includere la dipendenza a J2EE 7, Project X ➡️ Properties ➡️ Libraries ➡️ Add Library ... ➡️ `Java EE Web 7 API Library`
- Create una nuova Servlet, chiamata ```NewServlet``` Source Package ➡️ New ➡️ Servlet... 
- Selezionare la modalità di discovery ``all`` nel file ```Web Pages/WEB-INF/beans.xml```
- Utilizzare la annotazione ```@Inject```per includere una nuova istanza ```BookService```nel codice della servlet
- Utilizzare il servizio BookService per costruire un nuovo libro e visualizzare risultato nell'output della servlet in elemento HTML `<h3>`

### Applicazione Hello World CDI
1. Realizzare da zero una nuova applicazione Hello World utilizza una servlet per visualizzare in una pagina Web il testo `hello world`. Ogni lettera viene elaborata da un particolare POJO MB che implementa l'interfaccia `Letter` è possibile utilizzare _Injection_, _Qualifiers_, e _Producers_.
     - New Project ➡️ Java with Ant ➡️ Java Enterprise ➡️ EJB Module

## Approfondimenti 
- [JAVA EE 7: THE BIG PICTURE](https://tomylab.wordpress.com/2016/06/18/java-ee-7-the-big-picture/)

*Files di esempio*

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/beans_1_1.xsd"
       bean-discovery-mode="all">
</beans>
```