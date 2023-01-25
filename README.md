## Getting Started

### 1. Clone the repository and install dependencies

```
git clone https://github.com/mynhinguyentruong/white-label-demo.git
cd white-label-demo
yarn install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

### 3. Start the application

To run your site locally, use:

```
yarn dev
```

To run it in production mode, use:

```
yarn build
yarn start
```

## Caution
Do not fetch data from the front-end (client) as it is risky. Always make sure that you're fetching from the server
