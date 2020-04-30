<p align="center">
    <img src="assets/logo.png" width="300"/>
</p>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/spotify-clone">
<img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/spotify-clone">
<img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/spotify-clone">
</p>

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-Images/gifs">Images/gifs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
</p>

## :rocket: Built with

This project was developed with the following technologies:

-  [React Native](https://facebook.github.io/react-native/)
-  [Expo](https://expo.io/)
-  [Styled Components](https://www.styled-components.com/)
-  [Axios](https://github.com/axios/axios)
-  [Json Server](https://github.com/typicode/json-server)
-  [React Navigation](https://reactnavigation.org/)
-  [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [VS Code](https://code.visualstudio.com/)

## :iphone: Images/gifs

<p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085670/spotify/nxjoizolo5dxjkzrlwja.png" height="250">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085669/spotify/qahzcvew7zwqxviii3q0.png" height="250">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085668/spotify/wo714hrmjxdbbwhwxnug.png" height="250">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085668/spotify/qi64z7z8qazfyu3vhpup.png" height="250">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085670/spotify/ekypbzlbr2qygi10eo0o.png" height="250">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085670/spotify/tfmkvfnlzjplyhsiq2um.png" height="250">
</p>
<br/>

<p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581092143/spotify/prapyjjxtzkuxv31nbgd.gif" height="320">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085696/spotify/sengxslrzmfnfqxrs40i.gif" height="320">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581085691/spotify/g8pfqwbylauz9wsszzmo.gif" height="320">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581092145/spotify/onibeefqcdm0vsrefixh.gif" height="320">
</p>

### :new: New feat - Animated music player
<p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1581613970/spotify/klqpipcbtyrrjymuamom.gif" height="320">
</p>

## :information_source: How to run

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

The Application was developed using Expo. It is a free and open source toolchain built around React Native to facilitate the process of running and testing applications. [Click here](https://expo.io/learn) to get start with Expo.

Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://github.com/StefanoSaffran/spotify-clone.git

# go into the project folder
cd spotify-clone

#install the dependencies
yarn

```

In order to run the application on your device, you need to change the ip config in 2 places.

1. [package.json](https://github.com/StefanoSaffran/spotify-clone/blob/master/package.json)
```json
  "server": "json-server --host 192.168.0.185 -p3333 db.json -w"
```
2. [api.js](https://github.com/StefanoSaffran/spotify-clone/blob/master/src/services/api.js)
```javascript
  baseURL: 'http://192.168.0.185:3333',
```
replace 192.168.0.185 with your machine's ip.

Now with everything on place, run the json-server that has the application data and then run the app.
```bash
# to run the json-server
yarn server

# to run the app
yarn start
```
Expo will open a page in your browser, scan the QRcode on the page and wait for the app to load.

> The Application was developed and tested on Iphone 6s

---

### TODO

- [x] Animated music player
- [ ] Profile Page

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://github.com/StefanoSaffran/spotify-clone/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch!

<a href="https://stefanosaffran.com" target="_blank" >
  <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:stefanoas@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a>

---

Made with :coffee: and ❤️ by Stefano Saffran.


