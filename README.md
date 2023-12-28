# Laundary React Native App

This React Native application, titled HomeScreen, combines various features such as location services, image carousels, and product displays. Below is a brief overview of the main components and functionalities of the app.

## Components

1. **Location Services**
   - The app utilizes the `expo-location` library to access and display the user's current location.
   - It checks if location services are enabled and requests permission to access the device's location.

2. **Current Location Display**
   - The user's current location is displayed, including the locality and postal code.
   - An image is also displayed, potentially indicating the user's home.

3. **Search Bar**
   - A search bar is included for users to search for items or more information.

4. **Image Carousel**
   - A carousel of images is implemented using the `SliderBox` component, showcasing different images related to the app.

5. **Services**
   - Various services are displayed using the `Services` component.

6. **Product Display**
   - Products are fetched using Redux and displayed on the screen.
   - The `DressItem` component is used to represent each product.

7. **Total Cart Summary**
   - If there are items in the cart, a summary is displayed at the bottom.
   - It shows the total number of items and the total cost.
   - Users can proceed to pickup by navigating to the 'Pickup' screen.

## Usage

1. **Location and Permissions**
   - The app checks if location services are enabled and requests permission from the user.

2. **Product Display**
   - Products are fetched and displayed on the screen.

3. **Cart Summary**
   - If items are present in the cart, a summary is shown, and users can proceed to pickup.

4. **Search**
   - Users can use the search bar to find items or get more information.

## Running the App

1. **Install Dependencies**
   - Make sure to install the necessary dependencies using `npm install` or `yarn install`.

2. **Run the App**
   - Use `npm start` or `yarn start` to run the app on an emulator or a connected device.

3. **Expo**
   - The app uses Expo for development, and you can run it using the Expo client on your device.

Feel free to explore the code for detailed implementation and customization. If you have any questions or issues, please refer to the relevant documentation or seek assistance from the development community. Happy coding!
