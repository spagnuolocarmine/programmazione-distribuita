- [Contenuti](#contenuti)
- [Materiale bibliografico](#materiale-bibliografico)
- [Domande di riepilogo](#domande-di-riepilogo)
- [`persistence.xml` visto a lezione](#persistencexml-visto-a-lezione)

# Contenuti
_Parte 1_
- Introduzione a JPA
- Entità
  - Definizione
  - Anatomia
  - Queries
- Object-Relational Mapping (ORM)
  - Entity Manager
  - Persistence Unit
  - Ciclo di vita delle Entità
- Specifiche JPA
- Esempio completo di JPA
- Managing Persistent Objects
  
_Parte 2_
- Come si manipolno le entita con un Entity Manager
- JPQL
  - tipi di query
- Interazione col ciclo di vita
  - callbacks
  - listeners

#  Materiale bibliografico
- "Beginning Java Enterprise Edition": Cap. 4 (tranne "Integration with Bean Validation", "JPA Specification Overview")
- "Beginning Java Enterprise Edition": Cap. 5 (tranne "Composite Primary Keys", da pag 129 a 148)  e Cap. 6 (tranne "Fetching Relationships", da pag 161 a 176; "Type-Safe Criteria API", "Cache API", da pag 209 a 216)
- [Querying JPA Entities with JPQL and Native SQL](https://www.oracle.com/technical-resources/articles/vasiliev-jpql.html)
# Domande di riepilogo
* Qual è la differenza fra una entità ed un oggetto?
* A cosa serve l'annotazione @GeneratedValue?
* Qual è l'elemento discriminante per distinguere una entità da un POJO?
* Qual è l'API fondamentale per la gestione delle operazioni sulle entità?
* Quali sono le caratteristiche e le funzionalità più importanti della persistence unit?
* Descrivere il ciclo di vita di una entità
* Descrivere i tipi di relazioni  in un database relazionale
* A cosa serve l'annotazione @JoinColumn?
* Definizione e funzionalità di un Persistence Context
* Descrivere i vari tipi di query definiti da JPQL
     
# `persistence.xml` visto a lezione

```xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.1" xmlns="http://xmlns.jcp.org/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd">
  <persistence-unit name="PJPAPU" transaction-type="RESOURCE_LOCAL">
    <provider>org.eclipse.persistence.jpa.PersistenceProvider</provider>
    <class>pjpa.Person</class>
    <properties>
      <property name="javax.persistence.jdbc.url" value="jdbc:derby://localhost:1527/Paolo;create=true"/>
      <property name="javax.persistence.jdbc.user" value="paolo"/>
      <property name="javax.persistence.jdbc.driver" value="org.apache.derby.jdbc.ClientDriver"/>
            <property name="javax.persistence.schema-generation.scripts.action" value="drop-and-create"/>
      <property name="javax.persistence.jdbc.password" value="paolo"/>
      <property name="javax.persistence.schema-generation.database.action" value="drop-and-create"/>
       <property name="eclipselink.logging.level" value="INFO"/>
      <property name="javax.persistence.schema-generation.scripts.create-target" value="pjpa-create.ddl"/>
      <property name="javax.persistence.schema-generation.scripts.drop-target" value="pjpa-drop.ddl"/>
    </properties>
  </persistence-unit>
</persistence>
```