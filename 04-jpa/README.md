- [Contenuti](#contenuti)
- [Materiale bibliografico](#materiale-bibliografico)
- [Domande di riepilogo](#domande-di-riepilogo)

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
     