# GospelOverflow [MEAN Stack Project]
This project is for management of church member's information.

## Screenshot
* Dashboard
![dashboard](https://user-images.githubusercontent.com/43972187/46876871-6a699080-ce0d-11e8-869d-1f83d5f1f032.JPG)

* Member List
![member](https://user-images.githubusercontent.com/43972187/46877020-c6341980-ce0d-11e8-837f-556820a7f9e0.JPG)

![member_insert](https://user-images.githubusercontent.com/43972187/46923192-50cd7200-cfe2-11e8-8516-1e8d62139e95.JPG)

* Table
![responsive](https://user-images.githubusercontent.com/43972187/46877053-d946e980-ce0d-11e8-98b4-4a406bbc5988.JPG)

## Directory Structure of FrontEnd
<pre><code>
src
├───assets
│   ├───img
│   └───scss
├───environments
└───app
    ├───components
    │   ├───home
    │   ├───signin
    │   ├───signup
    │   └───containers
    │       ├───dashboard
    │       │   └───dashcard
    │       ├───navbar
    │       ├───layout
    │       │   ├───fullscreen
    │       │   ├───sidemenu
    │       │   ├───sidemenu-item
    │       │   ├───toolbar
    │       │   └───user-menu
    │       ├───tables
    │       │   ├───fixed
    │       │   └───rsponsive
    │       ├───medias
    │       │   ├───gallery
    │       │   │   └───details
    │       │   └───videos
    │       │       ├───vdieo-detail
    │       │       └───video-list
    │       ├───lists
    │       │   ├───event
    │       │   │   └───event-datail
    │       │   ├───member
    │       │   ├───user
    │       │   ├───profiles
    │       │   │   ├───member-profile
    │       │   │   └───user-profile
    │       │   └───dialog-member
    │       │       ├───list-member
    │       │       └───popup-member
    │       └───tasks
    │           ├───dailytask
    │           ├───weeklytask
    │           └───monthlytask
    ├───services
    ├───models
    ├───modules
    └───guards
</code></pre>

# Angular Version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Run
	1. Excute MongoDB
	2. Run `nodemon` in backEnd directory
	3. Run `npm start` in frontEnd directory

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Author
* [Daniel Song](https://github.com/ksong7060/GospelOverflow)
