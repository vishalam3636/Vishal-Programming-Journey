📅 30-01-2024

# React COntext API

👉🏾 This Project is a simple React's Context API practice.
👉🏾 In this project, a simple Login Context is made and storing if the user is login or not.
👉🏾 For the practice, we have given a signup page, from where the new-user can create an account
👉🏾 If the username and email already exist, the signup willl not proceed
👉🏾 No database is getting used as for now. So as soon as the application is refreshed, all the states will come to default ones.
👉🏾 There's one default user created-
{
username: "vishalam36",
firstName: "Vishal",
lastName: "Chauhan",
email: "vishalam36@gmail.com",
location: "Pune",
password: "123456"
}

📅 31-01-2024

==> Instead of alerting, i am displaying a toast-notification. For this i have installed react-toastify theme.
==> There was a challenge, and it was that when the user Successfully logs-in it was impossible to display toast-notification of "successful login" because we were changing page.
So instead we set the toast-notification of "Successful login" on the page where the user was getting redirected to on sucessful login.
==> To check if the user is redirected to the page from login page, i used useLocation hook.
on Login page i am setting from key in state of useNavigate hook and we are capturing the previous location using the useLocation hook in profile-page (i.e; the page where the user is getting redirected to when successfully log in).

==> Same with the when user signsup, if the user successfully creates account, its redirected to login page and there we are checking the previous path, and if the prev path is /signup, then we are displaying notification of successful account creation.
==> Since we are setting the previous path only when the user successfully creates account. So it will display the notification only when the user will redirect to login page on successful account creation.

==> NOTE: useLocation and useNaviagte can webe work together to achieve great things when working with path and navigating.
