# Users API

API RESTful to CRUD users in MongoDB

**Tests in browser:**

## GET http://localhost:3000/users/getusers

Get all users

**Test in Postman:**

## POST http://localhost:3000/users/createUsers

Create user

Select:
-Body
-raw
-JSON

```
{
    "name": "Alejandra",
    "email": "ale@example.com",
    "birthDate": "17-09-1960",
    "address": {
        "street": "Tita Merello",
        "state": "Buenos Aires",
        "city": "Distrito Federal",
        "country": "Argentina",
        "zip": "1428"
    }
}
```

## GET http://localhost:3000/users/getusersById/65764435bd066719d68529ee

Get user by Id: found

## GET http://localhost:3000/users/getusersById/1

Get user by Id: not found

## GET http://localhost:3000/users/getusersById/\*

Get user by Id: invalid input

## PUT http://localhost:3000/users/updateUsersById/65764435bd066719d68529ee

Update user by Id

Select:
-Body
-raw
-JSON

```
{"birthDate": "19-11-1993"}
```

## DELETE http://localhost:3000/users/deleteUsersById/657617cf71664eb1d7ef2a88

Delete user by Id
