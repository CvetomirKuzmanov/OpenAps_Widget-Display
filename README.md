# README

## Select Language / Изберете език
- [English](#information)
- [Български](#информация)

## Information

This is a widget to display your open apps' information, made from scratch. You'll need to follow the installation steps and set up your own website that will be used to read the information and send it to the widget.

![Backend](https://github.com/user-attachments/assets/57048d01-362d-4d27-911e-2d110957dab4)

## Installation

Make sure you have Node.js and npm installed beforehand.

1. Open the project folder in your terminal.
2. Install the dependencies by running:
   ```sh
   npm install
   ```

## Configuration

Create a file named `.env.development` in the root of your project and add the following content:

```sh
MONGO_URI='mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl'
```

For more details on how to get the MongoDB URI, refer to [MongoDB Connection String Documentation](https://www.mongodb.com/docs/manual/reference/connection-string/).

## Deployment

To deploy the server to a hosting platform like Railway, follow the steps in their [Quick Start Guide](https://docs.railway.com/quick-start).

## Scriptable Widget Setup

1. Install the [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) app on your iPhone.
2. Create a new script inside the app.
3. Copy and paste the contents of the `script.js` file from this project into the new script.
4. Save the script.
5. Go to your iPhone home screen and enter edit mode (long-press on the screen).
6. Tap the `+` button to add a widget.
7. Search for Scriptable and add a widget.
8. Edit the widget by clicking it in edit mode and select the script you created.
9. Save and exit.

Your Scriptable widget should now be active on your home screen!

---

## Информация

Това е уиджет за показване на информация за вашите отворени приложения, създаден от нулата. Трябва да следвате инструкциите за инсталиране и да настроите свой собствен уебсайт, който ще се използва за четене на информацията и изпращането ѝ към уиджета.

## Инсталация

Уверете се, че предварително сте инсталирали Node.js и npm.

1. Отворете папката на проекта в терминала.
2. Инсталирайте зависимостите с командата:
   ```sh
   npm install
   ```

## Конфигурация

Създайте файл с име `.env.development` в основната папка на проекта и добавете следното съдържание:

```sh
MONGO_URI='mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl'
```

За повече подробности относно получаването на MongoDB URI, вижте [документацията за MongoDB връзка](https://www.mongodb.com/docs/manual/reference/connection-string/).

## Деплоймънт

За да разположите сървъра на хостинг платформа като Railway, следвайте стъпките в техния [Quick Start Guide](https://docs.railway.com/quick-start).

## Настройка на Scriptable уиджет

1. Инсталирайте приложението [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) на вашия iPhone.
2. Създайте нов скрипт в приложението.
3. Копирайте и поставете съдържанието на файла `script.js` от този проект в новия скрипт.
4. Запазете скрипта.
5. Отидете на началния екран на iPhone и влезте в режим на редактиране (натиснете и задръжте екрана).
6. Докоснете бутона `+`, за да добавите уиджет.
7. Потърсете Scriptable и добавете уиджет.
8. Редактирайте уиджета и изберете създадения от вас скрипт.
9. Запазете и излезте.

Вашият Scriptable уиджет вече трябва да е активен на началния ви екран!

