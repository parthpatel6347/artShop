# artShop

#### An E-commerce website for art.

[Go to website]([https://art-shop-parth.herokuapp.com/](https://art-shop-three.vercel.app/))

The application is a FrontEnd project created with Reactjs.
Redux is used for state management and Styled Components are used to style the elements.
User creation and authentication is managed with Firebase.

---

## Running the application

> _cd into the project folder_

    npm install
    npm start

---

## Overview

### Homepage, Navbar, Explore

When the homepage is visited, there is a check if a user is signed in. If there is an authenticated user, the redux state is updated with current user details. The Navbar displays the current user's name with a dropdown menu with links to visit previous orders or signout.
If the user had any items in their cart on their last browsing session, the cart is updated with those. If there is no authenticated user, the Navbar shows a link to login and an empty cart.

From the homepage, the user may visit the list of categories by clicking on the explore button. They can also directly visit a particular category page directly by clicking on the links down below.  
The Explore page shows a list of categories - paintings, digital art, sculptures and photographs. Clicking on any of these will take the user to the products list for that category.

### User Creation and Authentication

User creation, storage and authentication is handled by the Firebase API. The login page displays an email and password fields for the user to log in, with validations and error displays if invalid credentials are used. The user may also Signin with their google account. The sign up page has similar validations and error display if invalid details are entered like passwords do not match or a user with the email already exists.

### Products

When the user clicks on any particular category, they are taken to page that displays a list of products for that category. Each product show an image, product name, artist name and the price.  
On clicking on any one of these, the user is taken to a product page, where the user is shown more details and a button to add the product to the cart. The idea is that all products are unique(only 1 of each exists), so if the product is already in the user's cart, the add to cart button is disabled.

### Cart, Checkout and Orders

Clicking the cart icon on the Navbar will open the cart and show all the products that are added to the cart. These items can be removed from the cart by click on the 'x' icon.  
If the user is signed in, clicking on the checkout button will redirect the user to the checkout page, otherwise they will be redirected to the log in page.  
The checkout page displays a list of cart items along with total cost of the purchase.
Stripe API is used for processing payments. On successfull payment the user shown an order success page. The user may view all their orders by clicking on the orders link in the user drop down menu.
