# README

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
6. Tap the `Edit` button and then the `Add Widget` button to add a widget.
7. Search for Scriptable and add the `Run Script` widget.
8. In the edit mode click the widget and select the script you created.
9. Save and exit.

Your OpenAps widget should now be active on your home screen!