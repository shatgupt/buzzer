# Buzzer

> Simple buzzer for quizzes

![Buzzer](https://lh3.googleusercontent.com/t_ojVLWbexMjnz3Lx1vJmhm1CI2W3_cldCUxSVcpQsVyiRwjrK8AG3vNqDhQQvkoHD7WOkS94JVQ-IMJO2mWFJiVBBGy2mPIvP6TQ8OMuTtbnMmevwT35G-cfrZEaRYAQkydZrHMDkJZZ-S3oKlOUqUIW98QucMXO6-Ml4oJnsMtJdYVlnLShpRzNrYIAxh_HtZtFIt7UBWVSa945YOeD3lgQvaDHq3P-PcuKfn8Y20AEJ45ogbhzrYgHIYmp_ovEWXyF_D-1VSRg273itC9ESNowuFButv3EXKWfQR_P1OHAQwgHrRYgS4Axa0Biz9R-RRsS94EwD6hk8eDlHLLAs8Lo8KuFX5ipgXjyFvIwo8NvppadWbEzXZ4pO5WCWH7NH4BIiT_ofN3yhmFismymHGdojA6yH1CmmE_tYxbKeXvM-U2Kgu_7eHdt00nWyger1WL1IP67ZXwy-K-TOLJF80cl4B2ZR1tXvEp2s5o4ND6m7iyrThXCIXQEEqepqUwPBnEl3TxQU8jWbJeEFfgm3MTnS2p-2p5bw8XkEoPk8d_OFIawr0qUee0sWbxmNr5Rmyzi8XP-sohfyALvSJmqBvl0KVoYAUSgDq1Xcoymg=w268-h220-no)

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
