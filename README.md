[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Survey Backend


# Tech Stack

* MongoDB
* Mongoose

# What this does
  The backend; takes in the user information from the sign up then uses that same information for the sign in and other CRUD functions, it also is what allows surveys and survey responses to be stored and accessed.


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

# Issues
    Our only issues were team communication issues, but we eventually solved those by talking through all of our issues with our communication and code.
    
# Process
    We spent the entire first day planning out how we wanted the project to look, and how we wanted it to work. We drew up ERD's and WireFrames to help with this process, along with some whiteboarding of the initial starter code. We then used Agile Methodologies by having standups at the beginning and end of each day.
