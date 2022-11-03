- [Contenuti](#contenuti)
- [Materiale bibliografico per lo studio](#materiale-bibliografico-per-lo-studio)
- [Alcune domande di riepilogo](#alcune-domande-di-riepilogo)
# Contenuti

_Parte 1_
- Introduzione agli EJB
- Come sono fatti gli EJB 
- Tipi di EJB
  - Stateless 
  - Stateful 
  - Singleton
- Come usare un EJB

_Parte 2_
- Ciclo di Vita dei Session Beans 
- Autorizzazioni
  - Autorizzazione dichiarativa 
  - Autorizzazione da programma
- Transazioni 
  - Cosa sono
  - Container-managed 
  - Bean-Managed
- Esercizi EJB con NetBeans

# Materiale bibliografico per lo studio
- "Beginning Java Enterprise Edition": Cap. 7, escludere da pag 247 a pag 256
- "Beginning Java Enterprise Edition": Cap. 8, escludere Timer Service
- "Beginning Java Enterprise Edition": Cap. 9,  solo "Understanding Transactions", "Transaction Support in EJB",  "Container-managed transactions" fino a pag. 296
- [`@Inject` vs `@EJB`](https://www.oracle.com/technical-resources/articles/java/cdi-javaee-bien.html)
- [Managing Concurrent Access in a Singleton Session Bean](https://javaee.github.io/tutorial/ejb-basicexamples003.html)
# Alcune domande di riepilogo
* Qual è il ciclo di vita di un bean?
* Qual è il vantaggio dell'utilizzo di JNDI?
* Quali sono le differenze tra i tre differenti tipi di beans in termini di chiamate dai clients?
* Qual è il caso d'uso più comune per un singleton bean?
* Qual è il vantaggio dell'suo del: "Programmatic Authorization"?
* Quali sono le principali differenze fra Container-Managed e Bean-managed transactions?
* Packaging e deploying
* Come invocare EJB