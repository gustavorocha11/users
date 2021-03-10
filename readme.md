## User Challenge 

This is a simple CRUD user made with typeScript and nodeJs

Is a simple project but made with best practices.

You can test it creating an user, updatind, find it and delete it.

1 First, clone this porject:

2 install dependencies:

	npm i

3 run project:

	npm run start

API REST running in port 3000

This is the list of services and routes:

Create user:

	Url: localhost:3000/api/user/create
	Metoth: POST
	Data:

	{
		"name":"Gustavo",
		"lastName": "Rocha",
		"email":"teste@gmail.com",
		"password":"12345678"
	}

Update user:

	Url: localhost:3000/api/user/update
	Metoth: POST
	Data:
	{
		"name":"Lucas",
		"lastName": "Alberto",
		"email":"teste2@gmail.com",
		"password":"newpass"
	}
	

Find user:

	Url: localhost:3000/api/user/:emailUser

	Metoth: GET

Delete user:

	Url: localhost:3000/api/user/:emailUser
	Metoth: DELETE

Responses:

	{
		code:200,
		message:"...",
		data{...} //an object or empty
	}