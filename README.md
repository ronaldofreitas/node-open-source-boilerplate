# Simple Node Open Source Boilerplate Project

[![Greenkeeper badge](https://badges.greenkeeper.io/rwieruch/node-open-source-boilerplate.svg)](https://greenkeeper.io/)

Minimal boilerplate project to open source npm packages.

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone git@github.com:rwieruch/node-open-source-boilerplate.git`
* `cd node-open-source-boilerplate`
* `npm install`

Adjust your Babel presets in *package.json* if you like to add or remove future JavaScript ES features.

## Publish

* adjust `name` to match `[your_open_source project_name]` in *package.json*
* `npm run prepublish`
* `npm publish`
* `cd example`
* `npm install [your_open_source project_name]`
