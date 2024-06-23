# What is a .env file?

- A plain text file, typically named .env (with a leading dot), used to store configuration settings for an application.

- The leading dot makes the file hidden by default in most operating systems, preventing accidental exposure of sensitive information.

  ## .env file summary

  - .env file stores app configurations (key-value pairs) securely.
  - Separates configuration from code for cleaner, maintainable code.
  - Protects sensitive data (API keys, passwords) by not hardcoding them.
  - (**IN CASE OF APPWRITE**) Improves security and flexibility in managing Appwrite project configurations.

# Reason to create auth.js and AuthService(class)

- It makes code vendor independent.
- You can just work on 1 file and change service provider (in this case appwrite).
- Rest of application is not dependent on it.
