# Spoty

Spoty is an open source tool you may use to upload discussions on songs.

# Screenshots 
![](https://media.discordapp.net/attachments/1237657804529991773/1237661867208474645/image.png?ex=663c75ef&is=663b246f&hm=a0121794826897a39acfc15c9c5b51dbee18a84116f940b6d113f2322f51cff6&=&format=webp&quality=lossless&width=1157&height=583)
![](https://media.discordapp.net/attachments/1237657804529991773/1237662024390152192/image.png?ex=663c7615&is=663b2495&hm=e767fcd4716556e3eb836100627620e10c980ff4acd03c4ffe9fb00fd3d8c496&=&format=webp&quality=lossless&width=1157&height=583)
![](https://media.discordapp.net/attachments/1237657804529991773/1237662098717278281/image.png?ex=663c7626&is=663b24a6&hm=13e364c9c420f9c9c9cc6a16bb0037ee36d4ad88bdd83b9b5b65367f0063f1a2&=&format=webp&quality=lossless&width=687&height=346)
![](https://media.discordapp.net/attachments/1237657804529991773/1237662167956717610/image.png?ex=663c7637&is=663b24b7&hm=ef5992218a8bdf9455918332ff79b2ef301102fad5489f1fedd151b3f7d42250&=&format=webp&quality=lossless&width=687&height=346)
![](https://media.discordapp.net/attachments/1237657804529991773/1237662240421711882/image.png?ex=663c7648&is=663b24c8&hm=b78c67ece6fa617a8da9bb2d9ead46b46e05988b58590690cecca3ab68f5d7ca&=&format=webp&quality=lossless&width=687&height=346)
![](https://media.discordapp.net/attachments/1237657804529991773/1237662383783022613/image.png?ex=663c766a&is=663b24ea&hm=3e366802262b07645edf99a600297e1dbaa3f622747367f6fdbcaa3349e6bce9&=&format=webp&quality=lossless&width=687&height=346)
![](https://media.discordapp.net/attachments/1237657804529991773/1237662474782769162/image.png?ex=663c7680&is=663b2500&hm=d93b4bc27763698d89a303d0e87ac46139b6bb8d0395f9c94de11d93ea31fd61&=&format=webp&quality=lossless&width=566&height=437)

# Getting Started
This guide will help you get started with this file.

## Requirements:
* [NodeJS](https://nodejs.org/en/download/current).
* Cookie Editor (optional, you may use [this one](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)).

## Installation

Use the package manager npm (comes with node.js) to install it inside the folder.

```bash
npm install
```
Then, run this script in order to run a development server on a localhost.

```bash
npm run dev
```
At it's best, it should output a website you're going to use to run this script.
By default, it is [http://localhost:5173/](http://localhost:5173/).

## API
The React App relies on [Spotify API](https://developer.spotify.com/documentation/web-api). 

To use this App, you will need to get your own Spotify API credentials by creating a developer account on the Spotify for Developers website. Once you get those and deploy your app, you're expected to get these two message boxes:

![ClientID](https://media.discordapp.net/attachments/1237657804529991773/1237657816886677536/image.png?ex=663c722a&is=663b20aa&hm=816a74fb3b99648d44d719238d0a5609a220c1fb41b902ccc68134dc2d7d154c&=&format=webp&quality=lossless&width=723&height=352)

![ClientSecret](https://media.discordapp.net/attachments/1237657804529991773/1237657859614052444/image.png?ex=663c7234&is=663b20b4&hm=b65a2bad8a7ec47834b2b35f3e2709775ee8f320ca1ac60536fbffa5b0efd803&=&format=webp&quality=lossless&width=700&height=341)

For Client-ID and Client-Secret, you're going to use these two credentials again available on the Spotify Development website:
![credentials](https://media.discordapp.net/attachments/1237657804529991773/1237659017564786750/image.png?ex=663c7348&is=663b21c8&hm=1cce1790ba7f52ef913375fee7bcf3208fced3b1862991a106fb58c7bf9f241b&=&format=webp&quality=lossless&width=1087&height=430) 


## Cookie
This is right. Your Client-ID and Client Secret & Login infoare saved in your cookie files, so that you wouldn't need to fill-in again multiple times!

### If you skip these message boxes and click 'Cancel', you'll most likely end up getting your cookie to null, which will later on affect on the performance of the web app.
This is why, in this scenario we suggest you to delete your browsing data on the website OR you may use a Cookie Editor to delete these records (client-id & client-secret) and fill in again in those message boxes. (You may also start filling into these boxes directly). 

For more comfortable filling-in experience you may use a computer clipboard to fill in without leaving the tab.

## Issues

* When an user clicks cancel / switches tabs while filling inside the messagebox, the cookie gets 'nulled', which afterwards will affect user-performance. However, this issue may be fixed by clearing browsing data (INCLUDING COOKIES) / Deleting Cookie Records.
* When you want to create a discussion about a song, then you use the search menu, the first selection always gets ignored. That's why you might need to choose ANY song out of the seleciton box except for the 1st, then choose the 1st song again.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)