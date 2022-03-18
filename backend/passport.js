const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

REACT_APP_CLIENT_ID = 'your id';
REACT_APP_CLIENT_SECRET = 'your secret';

passport.use(
    new GithubStrategy(
        {
            clientID: REACT_APP_CLIENT_ID,
            clientSecret: REACT_APP_CLIENT_SECRET,
            callbackURL: '/auth/github/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
