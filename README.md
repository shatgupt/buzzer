# Buzzer

> Simple buzzer for quizzes

![Buzzer](https://lh3.googleusercontent.com/atUGPJ4gjPYARrncQvuxLo-6PrhPpGlRRf11imfrJlHwKNvlBztMEuRqjUFtIgX2OOJ7hlHXDKtcWtwnWsi9VHZXtnMexGJYz08oCrGaz-HqBV1Ysv-Bgh4k6eEEAeqowyC0D0qARHXCNiIWftwRwieWKQgXGREF2AKlVMdD_f7EnCOTVTwc9fFKPQuJnmodQHZxosOyW7HVOTk12k7gH2GWG6oVkqtaShXOPFwlHMsh9XaW8L7x7B-dtbQQZ545TS-2lCM35_BJd39IuOVAif913hyKDaF61NIDedQe5bt78yLOjQLpiQnV7CqCf629LyAV38HH_wszg7ZH6W8Wzx-xvstRIgatHa24U3LQNd_T0ydNMctLswSl3AYaln4Lm157nAxcLeW1pFezxWnR6Y2aj4yeYvCfqOuvR_-DZpLzr3ebl6s_AvzsRvLv8JXuN2DRqkmq4MKUhhgKx-RPvU2SoeM-LWddxo8-PKKa0PVaAIAQYVaoq-X-ioIC3sAAt9XQE8kRMQyU-CmQ9EXFDhmI1BQ7hDj-v1zTC9Ws7VM9FETMPhido1LOecGJ1cJfuIHTCQx0-BHoS_s29xrdZ0_xecjuK3ns82juKlN5Uw=w984-h808-no)

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
