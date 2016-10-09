This repository contains the source code for http://opentracing.github.io website, generated with Jekyll + Node.js + Gitbook.


## Project structure

### Folders

#### _data
collections of data that is then used in to render liquid templates

#### _docs
The gitbook documentation that is then built into /documentation on build

#### _includes, _layouts
jekyll folders containing html templates and layouts

#### _sass
Contains the scss that is then preprocessed into /css on build

#### _site
Jekyll temp folder when running `jekyll serve`. You can ignore this.

#### fonts, img, css, documentation
post-build static assets. don't remove these.

## Making changes

Create a branch, test the change locally, then create a pull request.


## Running Opentracing.io locally

### Prerequisites

you need to have Node.js, NPM and Jekyll installed on your computer.


### Install dependencies
```
npm install
```

### Run development server
```
npm run dev
open http://localhost:3000
```

## Running Gitbook locally (to edit documentation)

### Run gitbook server
```
npm run docs:watch
```

### Build Documentation
```
npm run docs:build
```

### Build for Production
```
npm run production
```