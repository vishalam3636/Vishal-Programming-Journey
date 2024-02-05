### Simple Shooping Website

### API Details-

### Idea

💡 The Idea is creating a simple e-commerce website where-
🖊️ User can signin, signup
🖊️ Customer can add to cart and remove from cart and proceed for checkout

💡 For protected routing, i'll be using encapsulating component concept.
🖊️ Encapsulating pages in the respective user type encapsulating components.

### Package Details Used In The Project

1. React Router Dom, For Routing
2. React Toastify, For Notifications

### React Hooks Used In The Project And What Is It Used For

### Imported Imortant Functions From Pacages

1. NavLink-
   📝 Imported from react-router-dom,
   📝 For routing, same as Link, which os also imported from react-router-dom, the difference is that we can use the 'active' state class of the link, which we can use to style the active link.

### Work Flow

Day-1: (04-02-2024)
👨🏾‍💻 Created folders for differnt user types:

1. Public User:
   . Public Home Page
   👉🏾 This will be a page with website display name
   . SignIn Page
   👉🏾 SignIn Form
   . SignUp Page
   👉🏾 Signup Form

2. Customers:
   . timeline page
   👉🏾 It'll have default display items according to categories
   . Search Field Component (not created yet)
   👉🏾 A Search Field at top to search for items in the whole website
   . profile Page
   👉🏾 Customers Profile Page

3. Admin User:
   . Users handling Page
   👉🏾 A dashboard to handle users
   👉🏾 Handle is basically, delete user, block or unblock user
   . Admin Profile Page
   👉🏾 Admin ProfilePage

📝 NOTE: WE CAN MAKE A SINGLE HOMEPAGE COMMON FOR PUBLIC AND CUSTOMER, WHERE THE DEFAULT ITEMS WILL GET DISPLAYED ACCORDING TO CATEGORIES, It's JUST AN IDEA NOW.
