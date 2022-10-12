- [Obiettivo](#obiettivo)
- [Contenuti](#contenuti)
- [Materiale bibliografico](#materiale-bibliografico)
- [Altri link interessanti](#altri-link-interessanti)
- [Installazione ambiente di sviluppo](#installazione-ambiente-di-sviluppo)
- [Domande di riepilogo](#domande-di-riepilogo)
# Obiettivo 
Comprendere le motivazioni dietro Java Enterprise. Presentare i concetti chiavi dell'architetettura di Java EE e le tecnologie.

# Contenuti
- Introduzione
- Architettura
  - Multilayer e multitier
  - Containers
  - Packaging
- Annotazioni e Deployment Descriptor
  - L’ecosistema JEE
  - Standard
  - Storia
- Tecnologie

# Materiale bibliografico
- Beginning Java Enterprise Edition: Chapter 1 "Java EE 7 at a Glance"
- Codice: https://github.com/agoncal/agoncal-book-javaee7

# Altri link interessanti
- Tutorial su Java EE: https://javaee.github.io/tutorial/

# Installazione ambiente di sviluppo
- Utilizzare solo la JDK SE 8.0
- Installare [Netbeans](https://netbeans.apache.org/download/nb15/)
- ⚠️ Utilizzare per il percorso di installazione di Netbeans e dei progetti solo path privi di spazio!
- Nel caso di più versioni della JDK, impostare Netbeans per utilizzare come default la JDK 8.0
- Unix like systems: netbeans/etc/netbeans.conf
- Aggiungere un nuovo server Glassfish 4.1: Tools ➡️ Servers ➡️ Add Servers ...
- Verificare che il server Glassfish utilizza JDK 8, nel caso modificare il file ```glassfish/config/asenv.conf``` per impostare il percorso corretto della JAVA_HOME


# Domande di riepilogo
* Quali sono le motivazioni dietro Java Enterprise?
* Che cos’è un Container?
* Quali sono i quattro container di Java EE?
* A cosa servono i metadata?
* Quali sono i vantaggi e svantaggi delle annotazioni rispetto ai deployment descriptor?