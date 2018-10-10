# create-portpi-app

CLI for creating PortPi apps.

[PortPi](https://www.portpi.com) is a Raspberry Pi project.

## Install

This package requires `node >= 4`, but we recommend `node >= 8`.

```bash
npm install -g create-portpi-app
```

## Creating a New PortPi App

```bash
create-portpi-app
```

Answer some basic prompts about your app, and then the CLI will perform the following steps:
- copy over the PortPi app template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo

At this point, your new app should be all setup for local development.

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` a PortPi dev server that's linked to the local version of your app.

```bash
# (in another tab)
cd example
npm start # runs PortPi dev server
```

Now, anytime you make a change to your app in `src/` or to the example dev server's `example/src`, PortPi dev server will live-reload your local dev server so you can iterate on your app in real-time.

#### Available Packages

For now only the following packages can be used in your app:

* react
* @material-ui/core

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
MIT © [Vivo Xu](https://github.com/hivivo)
MIT © [PortPi](https://github.com/portpi)
