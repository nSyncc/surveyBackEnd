[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Tech Stack


* MongoDB
* Mongoose

## What this does
  The backend; takes in the user information from the sign up then uses that same information for the sign in and other CRUD functions, it also is what allows surveys and survey responses to be stored and accessed.

# ERD

![ERD](./Survey-project-diagram.png)


# Useful links

- https://github.com/nSyncc/surveyFrontEnd

### Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

## ERD

![ERD](/../../../../../desktop/Survey-project-diagram.png)