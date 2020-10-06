### Technical test of Jolimoi

demo [here](https://jolimoi-test-floriansr.now.sh/)

```
A web application that allows customers to search for a product using a search form.
The given starting code is in Vue.js but you can use React if you are more comfortable with it.
```

* * *

Stack and tools

- Front: React.js, Redux, Axios
- Test: Cypress
- Ops: Vercel
- CI: Travis
- External libraries: Atomize, AntDesign

The front app interacts with skincare-api(https://github.com/LauraRobertson/skincareAPI).

* * *

## Project setup

### Clone project
```
git clone https://github.com/floriansr/startup-jolimoi-front-technical-test.git
```

### Get into project
```
cd startup-jolimoi-front-technical-test
```

### Create .env file and put env variable
```
NODE_PATH="src/"
```

### Install packages locally
```
npm install
```

### Run server
```
npm start
```

### Run headless (Electron) test in another terminal
```
npm run test:e2e
```

### OR run GUI test in another terminal
```
npm run cy:open
```

## Author

-   **@floriansr** - (https://github.com/floriansr)