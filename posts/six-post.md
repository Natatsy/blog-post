# What is Password Hashing?

![Password](/images/password.png/)

Password hashing is a cryptographic process used to securely store passwords. Instead of saving a password in plain text, hashing converts it into an irreversible string of characters. This ensures that even if a database is breached, attackers cannot easily retrieve the original password.

## How Password Hashing Works

1. **User Creates a Password**  
   When a user signs up, their password is hashed using a cryptographic function before being stored in the database.

2. **User Logs In**  
   When logging in, the entered password is hashed again and compared with the stored hash. If they match, access is granted.

3. **One-Way Function**  
   Hashing functions are designed to be irreversible, meaning you cannot derive the original password from the hash.

## Common Hashing Algorithms

- **BCrypt** – Secure, slow by design to prevent brute-force attacks.
- **Argon2** – The recommended hashing algorithm with high security.
- **PBKDF2** – Uses key stretching to make brute-force attacks harder.
- **SHA-256** – Often used but requires additional measures like salting.

## Salting: Enhancing Security

A **salt** is a random value added to a password before hashing. It prevents attackers from using precomputed hash databases (rainbow tables) to crack passwords.

Example:

```js
const bcrypt = require("bcrypt");
const saltRounds = 10;
const password = "securePassword123";

bcrypt.hash(password, saltRounds, function (err, hash) {
  console.log("Hashed Password:", hash);
});
```

## Best Practices for Password Hashing

Always use a strong, adaptive hashing algorithm like BCrypt or Argon2.
Implement salting to make attacks more difficult.
Use a high work factor to slow down brute-force attempts.
Never store passwords in plain text.
Consider using multi-factor authentication (MFA) for extra security.

## Conclusion

Password hashing is a crucial part of authentication security. By using the right hashing techniques and best practices, you can protect user data from breaches and attacks. If you're developing an authentication system, always prioritize security by implementing strong password hashing!
