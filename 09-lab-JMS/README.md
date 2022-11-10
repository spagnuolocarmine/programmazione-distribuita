- [Esercizio 1](#esercizio-1)
- [Esercizio 2](#esercizio-2)
- [Eserizio 3](#eserizio-3)
- [Esercizio 4 - PDtify 🎵 ⏯️](#esercizio-4---pdtify--️)

# Esercizio 1

Scrivere un client Java che produce dei messaggi per un Topic di messaging su server Enterprise. Il client invia un messaggio con l’ordine per la costruzione di una moto, che è costituita da diverse componenti:
- Nome modello
- Nome telaio
- Nome pneumatici
- 
Il server deve implementare attraverso un Message Driven Bean un servizio di notifica degli ordini, stampando a video il nome del modello della moto, del telaio e degli pneumatici. Il client deve offrire da console un’interfaccia che permetta di effettuare tutte le operazioni da remoto.

Note
- La ConnectionFactory deve chiamarsi: jms/javaee7/ConnectionFactory
- Il Topic deve chiamarsi: jms/javaee7/Topic
 
# Esercizio 2

Estendere l’esercizio precedente attraverso l’implementazione di un servizio di persistenza degli ordini che salvi su una tabella del database tutti gli ordini arrivati al server. Aggiungere un Singleton che popoli il database con 2 ordini.

Note
- PersistentUnit e DB devono chiamarsi rispettivamente MotoPU e MotoDB
  
# Eserizio 3

Estendere l’esercizio precedente aggiungendo un client Java che riceve i messaggi degli ordini delle moto e stampa a video tutti quelli ricevuti dall’ultima connessione (includendo quindi, quelli ricevuti quando non connesso).

# Esercizio 4 - PDtify 🎵 ⏯️

Definire una nuova servlet `Player` che si occupa di visualizzare il player youtube per un particolare brano.

- *Input*: due parametri nel metodo GET `?id=x&type=song|playlist`:
  - _song_  viene visualizzato a tutto schermo il player youtube a tutto schermo;
  - _playlist_ vengono visualizzati tutti i brani in una tabella 2xN, e mostra un tasto play per ogni brano.

Quando la servlet viene caricata in modalità _song_ viene inviato un nuovo messaggio sul Topic `jsm/musicplayer/Player` (utilizzare la factory di default di installazione di glassfish) contenete l'identificativo del brano. Se la servlet viene caricata in modalità _playlist_  si invia un messaggio sempre sullo stesso topic con l'identificativo della playlist.
La gestione dei messaggi avviene tramite l'utilizzo di MDB e degli eventi, per ogni messaggio si genera un messaggio di log visualizzato nella console di glassfish.

Sviluppare il progetto come segue:

- Modificare la servlet `MusicPlayer` al fine di suddividere il play dei brani e la visualizzazione del contenuto delle playlist dalle altre operazioni.
- Definire due nuovi Qualifier `SongEvent` e `PlaylistEvent`. 
- Definire un wrapper di messaggi `MessageWrapper` che permette di memorizzare l'id di un brano o di una song.
- Definire un nuovo message-driven bean `MusicLibraryMDB` che implementa `MessageListener`, per ogni messaggio ricevuto (MessageWrapper) si esegue il fire di un nuovo evento SongEvent o PlaylistEvent contente l'entità Song o la Playlist.
- Definire due nuove classi `SongNotification`e `PlaylistNotification` che definiscono un singolo metodo `notify` che fa l'opportuna `@Observes` di un entità `Song` o `Playlist` con l'obiettivo di visualizzare un messaggio di log.
- Definire un nuovo stateless EJB `EventProducer` che consente di inviare messaggi su Topic `jsm/musicplayer/Player`.
- Definire una nuova servlet `Player`che si comporta come descritto ed utilizza l'`EventProducer` per notificare il play di un brano. 
- Definire un client Java `MDBtest` nel package test del ptrogetto EJB che definire un metodo main nel quale si esegue il test di tutte le funzionalità di scambio di messaggi definiti (aggiungere il file gf-client.jar come dipendenza).
