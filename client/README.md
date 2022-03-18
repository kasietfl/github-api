git clone https://github.com/kasietfl/github-api.git

cd backend

1. npm install
2. create oAuth App (https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)

Homepage URL : http://localhost:3000
Authorization callback URL : http://localhost:5000/auth/github/callback

3. in passport.js enter your own client_id and client_secret (REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET)

4. npm start

cd client
npm install
npm start
