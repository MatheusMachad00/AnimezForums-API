<Span style="color: #24FF00; font-size:50px; font-weight: 700">AnimezForums API:</Span>

<Span style="color: blue; font-size:35px; font-weight:600">Authorization routes:</Span>

<Span style="color: red; font-size:20px;">- Login (Post request at "/login"):</Span>
###### Must receive an object with email and password (min 6 characters):
````json
{
  "email": "guts@email.com",
  "password": "123456"
}
````

###### Will return status code 200 and an object with token, user ID, username and avatar URI:
````JSON
{
  "token": "abc123......",
  "id": 1,
  "username": "guts",
  "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg"
}
````

<Span style="color: red; font-size:20px;">- Signup (Post request at "/signup"):</Span>
###### Must receive an object with username (min 1 and max 50 characters), email, password (min 6 characters) and avatar URI:
````JSON
{
  "username": "guts",
  "email": "guts@email.com",
  "password": "123456",
  "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg"
}
````

###### Will return status code 201.


<Span style="color: blue; font-size:35px; font-weight:600">Post routes:</Span>

<Span style="color: red; font-size:20px;">- Create a new post (Post request at "/post/create"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an object with title, anime title and description:
Token format:
````
Bearer abc123456......
````

Object format:
````JSON
{
  "title": "Yofukashi no Uta episode 13",
  "anime": "Yofukashi no Uta",
  "description": "The episode 13 was....."
}
````

###### Will return status code 201.

<Span style="color: red; font-size:20px;">- Get all posts (Get request at "/post/getAll"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login:
Token format:
````
Bearer abc123456......
````

###### Will return status code 200 and an array of objects:
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

<Span style="color: red; font-size:20px;">- Get post by ID (Get request at "/post/:id"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an ID referring to the post you want through URI params:
Token format:
````
Bearer abc123456......
````

###### Will return status code 200 and an object:
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


<Span style="color: red; font-size:20px;">- Get post by user ID (Get request at "/post/postsByUsers/:id"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an ID referring to the user you want through URI params:
Token format:
````
Bearer abc123456......
````

###### Will return status code 200 and an object:
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

<Span style="color: red; font-size:20px;">- Give the post a star (Post request at "/post/star/:id"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an ID referring to the post you want through URI params:
Token format:
````
Bearer abc123456......
````

###### Will return status code 201.


<Span style="color: blue; font-size:35px; font-weight:600">Comment routes:</Span>

<Span style="color: red; font-size:20px;">- Create comment (Post request at "/post/:id/createComment"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login, an ID referring to the post you want through URI params and an object with comment:
Token format:
````
Bearer abc123456......
````

###### Object format:
````JSON
{
  "comment": "I liked..."
}
````

<Span style="color: red; font-size:20px;">- Get comment by user (Get request at "/comment/user/:id"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an ID referring to the post you want through URI params:
Token format:
````
Bearer abc123456......
````

###### Will return status code 200 and an array:
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

<Span style="color: red; font-size:20px;">- Give the comment a star (Post request at "/comment/:id/star"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an ID referring to the comment you want through URI params:
Token format:
````
Bearer abc123456......
````

###### Will return status code 201.


<Span style="color: blue; font-size:35px; font-weight:600">User routes:</Span>

<Span style="color: red; font-size:20px;">- Get user profile (Get request at "/userProfile/:id"):</Span>
###### Must receive a <Span style="color:orange;">header authorization</Span> with token generated on login and an ID referring to the user you want through URI params:
Token format:
````
Bearer abc123456......
````

###### Will return status code 200 and an object:
````JSON
{
  "id": 1,
  "username": "guts",
  "avatar": "https://i.pinimg.com/736x/d4/17/9f/d4179fca656e8d9166bcde22c192d612.jpg",
  "totalStars": 9
}
````
