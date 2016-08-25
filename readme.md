# Radiate

A responsive dashboard written in React - built for all screen sizes.

![Radiate - A responsive dashboard written in React - built for all screen sizes.](/docs/assets/radiate-example-wall.png)

## Table of Contents

  1. [Getting Started](#getting-started)
  1. [Customizing Radiate](#customizing-radiate)
    1. [Layout](#layout)
    1. [Colors](#colors)
    1. [Assets](#assets)
  1. [Getting Data Into Radiate](#getting-data-into-radiate)
  1. [Deploying Radiate](#deploying-radiate)
  1. [Developing](#developing)
  1. [Contributing](#contributing)
  1. [License](#license)

## Getting Started

Because you'll be amending the example and creating your own instance of Radiate  you may want to fork this repository to be able to push updates.

Clone the repository and `cd` into it.

```
git clone git@github.com:<your-github-username>/radiate.git && cd radiate

or

git clone git@github.com:chrisdwheatley/radiate.git && cd radiate
```

Install the project dependencies.

```
npm install
```

Start the server.

```
npm start
```

Navigate to [localhost:3000](http://localhost:3000) in your browser of choice.

You'll notice a warning about setting an authorization code in the console output. If you're going to expose your instance of Radiate in any way then you will want to set an authorization code to ensure POST's to your server can be restricted. This can be set as an environment variable.

```
AUTH=your-auth-code-here npm start
```

You can also customize the port that Radiate runs on with an environment variable.

```
PORT=8080 npm start
```

## Customizing Radiate

#### Layout

#### Colors

#### Assets

## Getting Data Into Radiate

## Deploying Radiate

## Developing

## Contributing

## License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
