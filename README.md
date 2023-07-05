# API Documentation

List of available endpoints:

- `POST /userRegister`
- `POST /userLogin`

&nbsp;

## 1. POST /userRegister

Description:
- Register user

Request:

- body:

```json
{
  "username": "string",
  "email": "string (unique)" ,
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "user with email user1@mail.com create successfully"
}

```

&nbsp;

## 2. POST /userLogin

Description:
- Login an user

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "username": "string",
  "access_token": "string"
}

```

&nbsp;
