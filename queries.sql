SELECT * from Employees;

SELECT employeeId, (firstName || ' ' || lastName) as Name, birthdate from Employees;

SELECT employeeId, (firstName || ' ' || lastName) as Name, birthdate from Employees where BirthDate > '1965-01-01';

SELECT * FROM [Products] WHERE Price > 100 AND Price <= 199;

SELECT * FROM [Products] ORDER BY Price DESC LIMIT 5;
SELECT * FROM [Products] ORDER BY Price ASC LIMIT 5;

SELECT Country, City, Address, CustomerName From Customers ORDER BY Country DESC, City, CustomerName;

INSERT INTO Categories (CategoryName, Description) VALUES ('Lambda Swag', 'Merch and stuff and things');

SELECT * FROM Categories where CategoryName LIKE '%am%da%';

UPDATE Categories SET CategoryName = 'LS Swag', Description = 'Lambda swag adn merch' WHERE CategoryID = 10;

DELETE FROM Categories WHERe CategoryID = 9;