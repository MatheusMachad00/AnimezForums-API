<Span style="color: #24FF00; font-size:50px; font-weight: 700">AnimezForums API:</Span>
###### API da aplicação AnimezForums, essa API irá fornecer as principais funcionalidades da aplicação como: Cadastro, login, criar uma postagem, fazer um comentário em uma postagem e visualização do perfil de um usuário. 


<Span style="color: blue; font-size:35px; font-weight:600">Como utilizar a API:</Span>
###### O deploy ainda não está pronto, mas para rodar a API localmente você deve fazer:

###### 1- Rodar o comando:
```
npm i
```

###### 2- Você deve criar um arquivo .env na pasta raíz com as seguintes variáveis:
```
DATABASE_URL=postgres://USERNAME:PASSWORD@HOSTNAME:YOUR_PORT/DATABASE_NAME

JWT_SECRET=123

PORT=5000
```
Obs: A variável JWT_SECRET pode receber qualquer valor. A variável PORT deve ser 5000.

###### 3- Rodar o comando:
```
npx prisma migrate dev
```

###### 4- Subir o servidor:
```
npm run dev
```


<Span style="color: blue; font-size:35px; font-weight:600">Funcionamento das rotas:</Span>

<Span style="font-size:30px; font-weight:600">Rotas de autenticação:</Span>

<Span style="color: red; font-size:20px;">- Login (Requisição Post em "/login"):</Span>
###### Precisa receber um objeto com email e password (min 6 characters):
````json
{
  "email": "guts@email.com",
  "password": "123456"
}
````

###### Irá retornar status 200 e um objeto contendo o token, user ID, username e o avatar URI:
````JSON
{
  "token": "abc123......",
  "id": 1,
  "username": "guts",
  "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg"
}
````

<Span style="color: red; font-size:20px;">- Signup (Requisição Post em "/signup"):</Span>
###### Deve receber um objeto com username (min 1 e max 50 characters), email, password (min 6 characters) e avatar URI:
````JSON
{
  "username": "guts",
  "email": "guts@email.com",
  "password": "123456",
  "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg"
}
````

###### Irá retornar status code 201.


<Span style="font-size:30px; font-weight:600">Rotas das postagens:</Span>

<Span style="color: red; font-size:20px;">- Criar uma nova postagem (Requisição Post em "/post/create"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um objeto com título, título do anime e descrição:

Formato do token:
````
Bearer abc123456......
````

Formato do objeto:
````JSON
{
  "title": "Yofukashi no Uta episode 13",
  "anime": "Yofukashi no Uta",
  "description": "The episode 13 was....."
}
````

###### Irá retornar status code 201.

<Span style="color: red; font-size:20px;">- Pegar todas as postagens (Requisição Get em "/post/getAll"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 200 e um array de objetos no formato:
````JSON
[
  {
    "id": 1,
    "title": "Yofukashi no Uta episode 1",
    "description": "The episode 1 of.....",
    "stars": 0,
    "userId": 1,
    "animeId": 1,
    "postOwner": "guts",
    "postOwnerAvatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg"
  },
  {
    "id": 2,
    "title": "Yofukashi no Uta episode 2",
    "description": "The episode 2 of.....",
    "stars": 0,
    "userId": 1,
    "animeId": 1,
    "postOwner": "guts",
    "postOwnerAvatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg"
  }
]
````

<Span style="color: red; font-size:20px;">- Pegar uma postagem por ID (Requisição Get em "/post/:id"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um ID referenciando a postagem desejada via URI params:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 200 e um objeto no formato:
````JSON
{
  "id": 1,
  "title": "Yofukashi no Uta episode 1",
  "description": "The episode 1 of.....",
  "stars": 4,
  "userId": 1,
  "animeId": 1,
  "users": {
    "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg",
    "username": "guts"
  },
  "comments": [
    {
      "id": 1,
      "comment": "I hated.....",
      "stars": 0,
      "postId": 1,
      "userId": 5,
      "commentOwner": "Power-chan",
      "commentOwnerAvatar": "https://i.pinimg.com/736x/57/64/6b/57646bd658dfb89e78b024a3d9b3118c.jpg"
    },
    {
      "id": 2,
      "comment": "I loved....",
      "stars": 0,
      "postId": 1,
      "userId": 6,
      "commentOwner": "Nazuna-chan",
      "commentOwnerAvatar": "https://animes.olanerd.com/wp-content/uploads/2022/08/1661267202_Nazuna-e-Ko-sao-surpreendentemente-semelhantes.jpg"
    }
  ]
}

````


<Span style="color: red; font-size:20px;">- Pegar todas as postagens de um usuário específico (Get request at "/post/postsByUsers/:id"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um user ID referenciando o usuário desejado via URI params:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 200 e um objeto no formato:
````JSON
[
  {
    "id": 1,
    "title": "Yofukashi no Uta episode 1",
    "description": "The episode 1 of.....",
    "stars": 4,
    "userId": 1,
    "animeId": 1,
    "users": {
      "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg",
      "username": "guts"
    }
  },
  {
    "id": 2,
    "title": "Yofukashi no Uta episode 2",
    "description": "The episode 2 of.....",
    "stars": 1,
    "userId": 1,
    "animeId": 1,
    "users": {
      "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg",
      "username": "guts"
    }
  }
]
````

<Span style="color: red; font-size:20px;">- Dar uma estrela a uma postagem (Requisição post em "/post/star/:id"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um ID referenciando a postagem desejada via URI params:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 201.
Obs: Rota em fase de testes.

<Span style="font-size:30px; font-weight:600">Rotas de comentários:</Span>

<Span style="color: red; font-size:20px;">- Criar um comentário (Requisição Post em "/post/:id/createComment"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login, um ID referenciando a postagem que irá receber o comentário via URI params e um objeto com o comentário:

Formato do token:
````
Bearer abc123456......
````

Formato do objeto:
````JSON
{
  "comment": "I liked..."
}
````

###### Irá retornar status code 201.

<Span style="color: red; font-size:20px;">- Pegar comentários por usuário (Requisição Get em "/comment/user/:id"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um user ID referenciando o usuário que você deseja obter os comentários via URI params:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 200 e um array de objetos no formato:
````JSON
[
  {
    "id": 1,
    "comment": "I liked....",
    "stars": 0,
    "postId": 1,
    "userId": 1
  },
  {
    "id": 5,
    "comment": "I hated....",
    "stars": 4,
    "postId": 5,
    "userId": 1
  }
]
````

<Span style="color: red; font-size:20px;">- Dar uma estrela a um comentário (Requisição Get em "/comment/:id/star"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um ID referenciando o comentário que você deseja dar a estrela via URI params:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 201.
Obs: Rota em fase de testes.


<Span style="font-size:30px; font-weight:600">Rotas de usuário:</Span>

<Span style="color: red; font-size:20px;">- Pegar perfil de um usuário (Requisição Get em "/userProfile/:id"):</Span>
###### Deve receber um <Span style="color:orange;">header authorization</Span> com o token gerado no login e um user ID referenciando o usuário que você deseja via URI params:

Formato do token:
````
Bearer abc123456......
````

###### Irá retornar status code 200 e um objeto no formato:
````JSON
{
  "id": 1,
  "username": "guts",
  "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg",
  "totalStars": 9
}
````
