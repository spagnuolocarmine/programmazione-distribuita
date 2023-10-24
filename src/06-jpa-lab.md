- [Esercizio 1 - BookStore](#esercizio-1---bookstore)
- [Esercizio 2 - Job Scheduling](#esercizio-2---job-scheduling)
  - [Esercizio 2.1](#esercizio-21)
  - [Esercizio 2.2](#esercizio-22)
  - [Esercizio 2.3](#esercizio-23)
  - [Esercizio 2.4](#esercizio-24)
# Esercizio 1 - BookStore

Scrivere un programma Java usando JPA che simuli le operazioni principali di un negozio di libri (aggiunta, rimozione e lista dei libri).

1. Da Derby, creare il database con un utente associato. Fate attenzione a specificare user name e password non vuote.
2. Creare una classe Entity Book caratterizzata da:
   - titolo, prezzo, descrizione, isbn e categoria.
3. Creare una classe Main in cui l’utente può aggiungere e rimuovere un libro e permetta di fare una ricerca per filtri (titolo, categoria, isbn).

Note: 
- Nuovo progetto Java with Ant ➡️ Java Application
- Creare il file `META-INF/persistence.xml` da Netbeans
- Aggiungere al progetto le librerie: `Java EE 7 API Library`, `Java DB Driver`, `Eclipse Link (JPA 2.1)`
- Se utilizzate come schema generation della persistence unit drop-and-create, non occorre che creiate manualmente le tabelle
- *Esempio di file persistence*
```xml
<persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd" version="2.1">
    <persistence-unit name="exercise_pu" transaction-type="RESOURCE_LOCAL">
    <provider>org.eclipse.persistence.jpa.PersistenceProvider </provider>
    <class>pd.bookstore.Book</class>
        <properties>
            <property name="javax.persistence.schema-generation.database.action" value="drop-and-create"/>
            <property name="javax.persistence.jdbc.driver" value="org.apache.derby.jdbc.ClientDriver"/>
            <property name="javax.persistence.jdbc.url" value="jdbc:derby://localhost:1527/BookStore;create=true"/>
            <property name="javax.persistence.jdbc.password" value="abc"/>
            <property name="javax.persistence.jdbc.user" value="abc"/>
        </properties>
    </persistence-unit>
</persistence>
```

# Esercizio 2 - Job Scheduling

Scrivere un programma Java usando JPA che simuli le operazioni di una azienda che assegna a ogni dipendente un particolare lavoro (_Job_). Ad ogni dipendente (_Person_) si associa anche un particolare indirizzo (_Address_).
```java
public class Person {
    private String id;
    private String firstName;
    private String lastName;
    private Character middleInitial;
    private Address address;
    private Job job;
    /*...*/
}
public class Address {
    private String id;
    private String street1;
    private String street2;
    private String city;
    private String state;
    private String zip;
    /*...*/
}

public class Job {
    private Long id;
    private String title;
    private Float salary;
    private String employeedId;
     /*...*/
}
```
Nota: vedere Cascading Events pg.191 libro di testo Java EE7
## Esercizio 2.1

Permettere il mapping di diversi Job per un singolo dipendente.

```java
   @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
   private List<Job> jobs = new ArrayList<>();
```

## Esercizio 2.2

Definire le seguenti NamedQuery per l'entità _Person_:
```java
@NamedQueries({
    @NamedQuery(name = FIND_ALL, query = " ... "),
    @NamedQuery(name = FIND_BY_FIRST_NAME, query = "  ... "),
    @NamedQuery(name = FIND_BY_LAST_NAME, query = " ... "),
    @NamedQuery(name = FIND_BY_FIRST_LAST_NAME, query = " ... "),
    @NamedQuery(name = FIND_BY_ADDRESS, query = " ... "),
    @NamedQuery(name = FIND_BY_ID, query = " ... "),
    @NamedQuery(name = FIND_BY_JOB, query = " ... "),
})

```

## Esercizio 2.3

Definire un POJO che permetta di popolare il database come segue.

```java

public class DatabasePopulator {
    private Person p1, p2, p3, p4;
    private Address a1,a2;
    private Job j1,j2,j3,j4,j5,j6,j7,j8;

    private void populateDB(){
        /*here code*/
    }
    private void clearDB(){
        /*here code*/
    }
}
```

## Esercizio 2.4

Scrivere una classe Main che permette di popolare il DB e permette di eseguire le diverse NamedQuery e di visualizzare il risulato (utilizzare `@Inject` e/o `@PersistenceUnit(unitName="name")`). 
