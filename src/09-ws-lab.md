- [Esercizio 0 - Card Validator](#esercizio-0---card-validator)
- [Esercizio 1 - Previsioni Meteo](#esercizio-1---previsioni-meteo)
- [Esercizio 2 - Web Service Previsioni Meteo Avanzate](#esercizio-2---web-service-previsioni-meteo-avanzate)
- [Esercizio 3 - PDtify 🎵 ⏯️](#esercizio-3---pdtify--️)
# Esercizio 0 - Card Validator
- New project ➡️ Java with Ant ➡️ Java Web ➡️ Web Application: `CardValidatorWebApplication`

- Definiamo un nuovo oggetto `Card` utilizzando JAXB (Java Architecture for XML Binding)

    ```java
    @XmlRootElement
    @XmlAccessorType(XmlAccessType.FIELD)
    public class CreditCard {
        @XmlAttribute(required = true)
        private String number;
        private String expiryDate;
        private Integer controlNumber; 
        private String type;
        // Constructors , getters , setters
    }
    ```
- Definiamo una nuova interfaccia `Validator`
  ```java
    @WebService
    public interface Validator {
        public boolean validate(CreditCard creditCard); 
    }
    ```
- Definiamo un nuovo Web Service `CardValidator` che implementa un interfaccia `Validator`
    - New Files ... ➡️ Web Services ➡️ Web Service
    - _Name_ : `CardValidator`
    - _Implement Web Service as Stateless Session Beans_: [✔️] 

```java
@WebService(serviceName = "CardValidator")
public class CardValidator implements Validator {
    public boolean validate(CreditCard creditCard) {
        Character lastDigit = creditCard.getNumber().charAt( creditCard.getNumber().length() - 1);
        if (Integer.parseInt(lastDigit.toString()) % 2 == 0) {
             return true;
        } else {
                 return false; 
                }
    }    
}
```

- **Testing**: Project ➡️ Web Services ➡️ `Card Validator`➡️ Test Web Service
- Aggiungere al Web Service `Card Validator` un nuovo metodo `validatedata`che prende come parametri tutti i campi di `Card`singolarmente e utilizza `validate` restituire una stringa `valid| not valid`.
  - utilizzare il wizard di netbeans per aggungere il metodo  Project ➡️ Web Services ➡️ `Card Validator`➡️ Add Operation ...
  - successivamente modificare il codice come segue:
    ```java
    public String validatedata(String number, String expiryDate, Integer controlNumber, String type) {
        Character lastDigit = number.charAt( number.length() - 1);
        if (validate(new CreditCard(number, expiryDate, controlNumber,type))) {
             return "valid"; 
        } else {
                 return "not valid"; 
                }
    }    
    ```
- Definire un nuovo Web Service Client
  - New Project ➡️ Jav with Ant ➡️ Java Application
  - _Nome_: `ValidateWSClient`
  - Project ➡️ New Web Service Client
    - Project ➡️ Browse ...
    - `CardValidatorWebApplication` ➡️ `CardValidator`
    - Visualizzare i file generati in `Generated Sources (jax-ws)`
    - Definire l'oggetto `ValidateWSClient` come segue:
        ```java
        public class ValidateWSClient {

            public static void main(String[] args) {
                CardValidator_Service service = new CardValidator_Service();
                CardValidator port = service.getCardValidatorPort();
                CreditCard card = new CreditCard();
                card.setNumber("6011111111111118");
                System.out.println(port.validate(card));
                
            }
            
        }
        ```
# Esercizio 1 - Previsioni Meteo

Scrivere un servizio Web Service che implementa un servizio di previsioni meteo. Il servizio
implementa un servizio `forecast()` che prende in input una stringa con il nome del luogo
in cui fare previsione (ad esempio “Salerno” o “Fisciano”), e restituisce una stringa con la
previsione (ad esempio “sole”, “pioggia”, “neve”, “nebbia”). L’implementazione del servizio
restituisce sempre “sole” se l’input è “Salerno”, “pioggia” se l’input è “Fisciano”, oppure un
valore casuale se l’input è diverso. 

Implementare un client Java che richiede il servizio di previsioni per diverse località, e le
stampa a video. 

# Esercizio 2 - Web Service Previsioni Meteo Avanzate 

Aggiungere al Web Service dell’esercizio precedente una funzionalità chiamata
`advancedForecast()` che prende in input un oggetto `Place` con i seguenti attributi: 
- Stringa con nome del posto
- Coordinate GPS 

e restituisce un oggetto Forecast con i seguenti attributi: 
- Stringa con la descrizione della previsione
- Temperatura
- Direzione del vento
- Forza del vento
- Umidità

I valori in output posso essere casuali. Implementare un client Java che richiede il servizio di previsioni avanzato per diverse località, e le visualizza su standard output.

# Esercizio 3 - PDtify 🎵 ⏯️

Modificare il progetto PDtify per offrire  le funzionalità di MusicLibrary utilizzando anche un Web Service.
Sviluppare un client java che permette di eseguire tutte le funzionalità di PDtify e per eseguire il play di una canzone utilizzare il seguente esempio.
```java
public class TestOpenBrowser {
    public static void main(String[] args) {
         String url = "https://www.youtube.com/embed/lLGLUSzzuWU";

        if(Desktop.isDesktopSupported()){
            Desktop desktop = Desktop.getDesktop();
            try {
                desktop.browse(new URI(url));
            } catch (IOException | URISyntaxException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }else{
            Runtime runtime = Runtime.getRuntime();
            try {
                runtime.exec("xdg-open " + url);
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
    
}

```
