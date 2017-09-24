# Buzzer

> Simple buzzer for quizzes

![Buzzer](https://lh3.googleusercontent.com/Y9RczePftgDfXlMk9yEv5gcKHg-wQVACZRfwlV1cHzCipeK8Qg5COLzrZTgwUowk0epUCLD4HqZs4co4_My519M97YvDaOmVS8_FhCKvAujKa4fI2DPIjdYmrQmnF7aQM8KiXRkIK3hh4roIKmH8UWTnNE5VBXFfWIgdnnoTNiPdUCErtASMOd76yn4_F8RM3-VzD6R_7HN94vOMdVbnRp1-V64FS8kczzyvOZABnGC-wjPuj7N14L2vuArREgDVADaLup9jLJWi5eWiAQGwsouusSi_UYJnTBcKv5NQlsmR47QNObEKpHMP_Ryqh0_0NqEiNB8JC-RCi1V8HaCXXCTR0PBW-V2yDRtm-GmJN3hbaZPAXFgvTwGl_XcCCs5xk4iP_H_AtXC7uh6Xi5GTxNpxtqoyq86g7IwXLUHzF0CzKyEK77U5mQtnAxp2mKv0jYnjo895gzoPy4acwU3EJ5rhmJNMKlSDn3yKyvb6UQyX7oNuWmtgP6AQJVPqlzsOFp9WUxFfYZ0tU1tVQbnKmdYevRGptqrKqt5LXT9EcY3IGtsrB3P9AdvJ33gyIRUiY7eDlSBt9EvarRCEwy7zZXRZep3e1n0obNh58MlnOw=w974-h808-no)

## Features
1. Buzzers for both mobile and desktop
2. Activate or Deactivate(TODO) buzzers after a countdown
3. Board page for showing countdown and buzz list on a separate screen
4. Optional password for both host and participants

## Usage
1. Install `socket.io`, the only dependency:
  ```
  npm install
  ```
2. Modify following snippet in `index.js` to set password or leave as is for no password:
  ```js
  // passwords for host and users, keep it null for no pass
  const pass = {
    '/host': null, // 'buzzerhost'
    '/user': null  // 'buzzeruser'
  }
  ```
3. Start buzzer server (default port is 4000):
  ```
  node index.js
  ```
4. Connect host, user and optionally board at
  ```
  http://<server-ip>:4000/host.html
  http://<server-ip>:4000/user.html
  http://<server-ip>:4000/board.html
  ```

## License
[MIT](LICENSE)
