#TODO

*Esempio di file persistence*
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