# DocFinder

Use this web page to find information about doctors in your area.

**Author: Katharyn Reed**

Using the BetterDoctor API, users are able to search for doctors in the Portland area based on what the medical condition they are suffering from. The web page returns name, title, and a brief biography on each doctor in the area.

## Installation

Requires **npm** installed in order to run.

Step 1: **Clone this repository to your local computer**

```console
git clone [url]
```

Step 2: **Install all development and production dependencies from the project root directory**

```console
npm install
```
```
bower install
```

Step 3: **Create a file called `.env` in your root directory and export your API key as `apiKey`**

```js
exports.apiKey = "YOUR KEY HERE";
```

Step 4: **Use _gulp_ to build compile the app**

```console
gulp build
```

**Note:** You can create a minified production build of the app by adding the `--production` tag

```console
gulp build --production
```

Step 5: **Use _Browser Sync_ to run a local server instance**

```console
gulp serve
```


## Known Bugs
There are currently no known bugs.

## Contact Information
If you have any questions or suggestions please contact katharynreedpierce@gmail.com

## License

MIT License. Copyright 2017 Katharyn Reed
