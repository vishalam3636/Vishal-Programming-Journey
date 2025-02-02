# DevTinder APIs

#### Auth Router

- POST /signup
- POST /login
- POST /logout

#### Profile Router

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

#### Connection Request Router

- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId

- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

#### My

- GET /user/connections
- GET /user/requests
- GET /user/feed - Get you the profiles ofother users on platform

Status: ignore, interested, accepted, rejected
