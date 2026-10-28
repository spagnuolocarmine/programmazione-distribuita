# Interceptor Lab - Estendere l'Esercizio Music Library 
Estendere l'applicazione ⏯️  Music Library ([Esercizio 2](05-javaee-lab.md)) introducendo i CDI Interceptors, secondo le seguenti specifiche.

## 1. Logging delle operazioni tramite Interceptor
Realizzare una classe LoggingInterceptor che utilizzi l'annotazione @AroundInvoke e l'interfaccia InvocationContext per registrare l'esecuzione delle operazioni della libreria (aggiunta, eliminazione e ricerca dei brani). L'interceptor deve registrare il nome del metodo invocato, i parametri ricevuti e l'esito dell'operazione. Applicare l'interceptor ai metodi del Managed Bean Library tramite l'annotazione @Interceptors.
## 2. Intercettazione del ciclo di vita e monitoraggio delle prestazioni
Realizzare un secondo interceptor, denominato PerformanceInterceptor, che permetta di monitorare il ciclo di vita del Managed Bean e il tempo di esecuzione dei suoi metodi. Utilizzare @PostConstruct per intercettare l'inizializzazione del bean e @AroundInvoke per calcolare il tempo impiegato dalle operazioni, registrando i risultati nei log dell'applicazione.
## 3. Interceptor multipli, binding e priorità di esecuzione. 
Definire un'annotazione personalizzata tramite @InterceptorBinding che consenta di associare gli interceptor ai metodi della libreria senza riferirsi direttamente alle rispettive classi. Configurare l'applicazione affinché più interceptor possano essere eseguiti sulla stessa operazione e utilizzare @Priority per stabilirne l'ordine di esecuzione. Verificare attraverso i log la corretta concatenazione degli interceptor, distinguendo le operazioni eseguite prima e dopo l'invocazione del metodo originale.
