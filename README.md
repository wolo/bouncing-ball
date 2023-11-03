# Bouncing ball demo

## Info

- Deployed to github pages automatically on push to `master`
- Main logic is inside `src/main.ts` and `src/ball-styles.css`
- Ball's parameters and colors are set in `bouncing_ball_demo` feature flag variables 

## Deploy to Github Pages

- Fork the current repository with default parameters

![Step 1](/images/1.png)
- Go to `Actions` and enable workflows

![Step 2](/images/2.png)
- Go to `Settings` > `Pages` and select `Github Actions` as a source for build and deploy

![Step 3](/images/3.png)
- Go back to `Actions` and run `Deploy static content to Pages` workflow

![Step 4](/images/4.png)
- Wait for the deployment process to finish. The link to your Github Pages URL will be displayed in deployment window.

![Step 5](/images/5.png)

- Note: Your URL for Github hosted page will be `https://{your_github_name}.github.io/bouncing-ball`


## Development

- `git clone git@github.com:Kameleoon/bouncing-ball.git` - clone repository
- `cd bouncing-ball` - go to project directory
- `npm install` or `yarn` - install dependencies
- `npm run dev` or `yarn dev` - run development server with live reload

