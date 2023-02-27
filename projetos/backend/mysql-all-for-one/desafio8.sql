SELECT 
	CONCAT(first_name, ' ', last_name) AS full_name, 
	CONCAT(city, '-', state_province, ', ', address) AS location 
FROM employees;