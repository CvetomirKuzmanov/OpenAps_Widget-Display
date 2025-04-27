# README

## Select Language / Изберете език
- [English](#information)
- [Български](#информация)

## Information

This is a widget to display your open apps' information, made from scratch. You'll need to follow the installation steps and set up your own website that will be used to read the information and send it to the widget.

![IMG_2964(1)](https://github.com/user-attachments/assets/eb1ba678-a77f-4668-a880-138a104346c7)

## Installation

Make sure you have Node.js and npm installed beforehand.
 
0. Clone the repository (download zip) and then extract it.

![Screenshot From 2025-04-27 18-20-58](https://github.com/user-attachments/assets/f4d6ad62-4efa-43eb-b011-d8a8f1e15966)

1. Open the project folder in a code editor (e.g. Visual Studio Code) in your terminal.
   
![Screenshot From 2025-04-27 18-24-31](https://github.com/user-attachments/assets/febe9ea6-359f-4fb5-9984-002654560a2c)
   
2. Install the dependencies by running:
   ```sh
   npm install
   ```

![Screenshot From 2025-04-27 18-25-29](https://github.com/user-attachments/assets/13ace337-f9ad-4a3d-bf5f-709ddeb6058d)


## Configuration

Create a file named `.env` in the root of your project.

![Screenshot From 2025-04-27 18-26-25](https://github.com/user-attachments/assets/f90490f5-7024-4fb3-80ba-ee9540929cbd)

Add the following content:

```sh
MONGO_URI='mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl'
```

![Screenshot From 2025-04-27 18-28-18](https://github.com/user-attachments/assets/02abb27c-30b8-458f-8e90-b94b070d0c5c)

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

![IMG_2964(1)](https://github.com/user-attachments/assets/eb1ba678-a77f-4668-a880-138a104346c7)

## Инсталация

Уверете се, че предварително сте инсталирали Node.js и npm.

0. Инсталирайте repository-то



1. Отворете папката на проекта (Visual Studio Code) в терминала.

![Screenshot From 2025-04-27 18-24-31](https://github.com/user-attachments/assets/febe9ea6-359f-4fb5-9984-002654560a2c)

2. Инсталирайте зависимостите с командата:
   ```sh
   npm install
   ```
   
![Screenshot From 2025-04-27 18-25-29](https://github.com/user-attachments/assets/13ace337-f9ad-4a3d-bf5f-709ddeb6058d)


## Конфигурация

Създайте файл с име `.env` в основната папка на проекта и добавете следното съдържание:

```sh
MONGO_URI='mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl'
```

![Screenshot From 2025-04-27 18-28-18](https://github.com/user-attachments/assets/02abb27c-30b8-458f-8e90-b94b070d0c5c)

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

