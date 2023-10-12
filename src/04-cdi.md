# Contexts and Dependency Injection (CDI)
- [Contexts and Dependency Injection (CDI)](#contexts-and-dependency-injection-cdi)
- [Obiettivo](#obiettivo)
- [Contenuti](#contenuti)
- [Materiale bibliografico](#materiale-bibliografico)
- [Domande di riepilogo](#domande-di-riepilogo)
# Obiettivo 
Presentare il meccanismo di Dependency and Context Injection. Presentare concetti chiavi legati al ciclo di vita e al deployment delle applicazioni enterprise. Mostrare degli esempi di injection, qualificatori, producers, disposers, interceptors e decorators.



# Contenuti
_Parte 1_
- Introduzione  
  - Dependency Injection
  - Life-cycle Management  
  - Interception
  - Loose Coupling and Strong Typing
  - Deployment Descriptor
- Esempio di CDI Bean
  - Injection
  - Qualifiers  
  - Producers/Disposers  
  - Scope

_Parte 2_
- Interceptors
  - Classi Interceptor e Ciclo di vita  
  - Interceptor multipli
  - Decorators ed eventi  

# Materiale bibliografico
- Beginning Java Enterprise Edition: 
  - Chapter 2 "Context Dependance Injection" da pag. 23 a 66 (tranne "CDI Specifications Overview", "InjectionPoint API", "Beans in Expression Language")
- [Descrizione di classi tightly e loosely coupled](https://learn.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/hh323705(v=vs.100)?redirectedfrom=MSDN) 
- [Introduction to Contexts and Dependency Injection for Java EE](https://docs.oracle.com/javaee/7/tutorial/cdi-basic.htm#GIWHB)
- [Using Java Reflection](https://www.oracle.com/technical-resources/articles/java/javareflection.html#:~:text=Reflection%20is%20a%20feature%20in,its%20members%20and%20display%20them.)
- [Comparing JSF Beans, CDI Beans and EJBs](https://www.andygibson.net/blog/article/comparing-jsf-beans-cdi-beans-and-ejbs/)
- [@Retention](https://www.oracle.com/technical-resources/articles/hunter-meta1.html)
- [@interface](https://docs.oracle.com/javase/1.5.0/docs/guide/language/annotations.html)
- @Transactional
  - Beginning Java Enterprise Edition: Chapter 9 "Transactions" pg.302
# Domande di riepilogo
* Qual è l'idea alla base del design pattern inversion of control?
* Quali sono i vantaggi del "loose coupling, strong typing"?
* In che modo il ciclo di vita di un bean differisce da quello di un POJO?
* Quali sono i vantaggi derivanti dall'uso degli Interceptor?
* In che modo è possibile definire una sorta di priorità nell'esecuzione di una catena di Interceptor?
* In che modo è possibile realizzare disaccoppiamento nelle applicazioni Java enterprise?
* Qual è il meccanismo che permette di scegliere fra due diverse implementazioni di uno specifico bean?
* Perchè è stato introdotto il concetto di Interceptor Binding?
* Qual è il vantaggio derivante dall'uso dei Decorator?
* Qual è il vantaggio derivante dall'uso degli Eventi?