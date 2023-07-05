# API Documentation

### Running Program:
```
npm install
npm run dev
```

List of available endpoints:

- `POST /userRegister`
- `POST /userLogin`
- `POST /medicine (aunthentication)`

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

## 3. POST /medicine

Description:
- Create a medicine

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "name": "string",
  "category": "string",
  "imgUrl": "string",
  "price": "number",
  "minQuantity": "string"
}
```

_Response (201 - Created)_

```json
{
  "name": "Olive Care Spray",
  "category": "Antibacterial",
  "imgUrl": "https://down-id.img.susercontent.com/file/cbde75473476b80f11e3e78303651ac5",
  "price": 80000,
  "minQuantity": "60 mL",
  "_id": "64a589beb5be865aa8be25a4",
  "__v": 0
}

```

&nbsp;
