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
- `GET /medicine`
- `GET /medicine/:id`
- `PATCH /medicine/:id (aunthentication)`
- `DELETE /medicine/:id (aunthentication)`

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

## 4. GET /medicine

Description:
- Return all medicines

Request:

- query:

```
page || limit (default 10) || search
```


_Response (200 - OK)_

```json
[
  {
    "_id": "64a6cf358abab35009e82a70",
    "name": "Advocate - Obat Anti Kutu",
    "category": "Antiparasit",
    "imgUrl": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/2/20/ff2d33c4-388c-4c37-9c9a-b8620131b7d8.jpg.webp",
    "price": 80000,
    "minQuantity": "4 pipet",
    "__v": 0
  },
  {
    "_id": "64a6ce7e8abab35009e82a6a",
    "name": "Baytril - Obat Antibiotik 50mg",
    "category": "Antibiotik",
    "imgUrl": "https://cdn.shopify.com/s/files/1/0071/8064/8566/products/Baytril-10_800x.jpg?v=1546205482",
    "price": 55000,
    "minQuantity": "50mg",
    "__v": 0
  },
  {....}
]

```

&nbsp;

## 5. GET /medicine/:id

Description:
- Return a medicine by Id

Request:

- params:

```json
{
  "id": "ObjectId"
}
```


_Response (200 - OK)_

```json
{
  "_id": "64a6ce7e8abab35009e82a6a",
  "name": "Baytril - Obat Antibiotik 50mg",
  "category": "Antibiotik",
  "imgUrl": "https://cdn.shopify.com/s/files/1/0071/8064/8566/products/Baytril-10_800x.jpg?v=1546205482",
  "price": 55000,
  "minQuantity": "50mg",
  "__v": 0
}

```

&nbsp;

## 6. PATCH /medicine/:id

Description:
- Edit a medicine by Id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "ObjectId"
}
```


_Response (200 - OK)_

```json
{
  "_id": "64a6ce7e8abab35009e82a6a",
  "name": "Baytril - Obat Antibiotik 50mg",
  "category": "Antibiotik",
  "imgUrl": "https://cdn.shopify.com/s/files/1/0071/8064/8566/products/Baytril-10_800x.jpg?v=1546205482",
  "price": 55000,
  "minQuantity": "50mg",
  "__v": 0
}

```

&nbsp;

## 7. DELETE /medicine/:id

Description:
- Delete a medicine by Id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "ObjectId"
}
```


_Response (200 - OK)_

```json
{
  "message": "data with id 64a6ede25fd9d6bc402a84e1 deleted successfully"
}

```

&nbsp;
