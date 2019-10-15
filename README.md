# Buzzer

> Simple buzzer for quizzes

[![Buzzer](https://lh3.googleusercontent.com/VFLbi-vC33d_Oc8aS7d7w98SEp4XEbXFZE8LLdEXLghelS_CnKfgdUrvkiT7aQKYSfAPSJm_YWdDb90MQ056xJuqe_4TNS9rkeka1wiUOGZnEpWE7GXBWvqGlmQSow_mDyLJ0G5WQGI=w2400)](https://photos.app.goo.gl/kDwm6TjBK42QBR739)

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
