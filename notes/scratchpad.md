## how to get username from open-id?
  - thought: is it possible to use 'my-blog' middleware to attach a username to open-id-provided email?
    - separate user model (or username-email model) to associate email to username

  - another option: username is email address

  -GREAT OPPORTUNITY TO CREATE A BRANCH TO TRY THE EMAIL-username thing.

blog
- How to protect api routes?
- body parser...
- making dumb requests from postman
 - blog post: why this is good...current mongoDB schema stinks! convoluted access to uer mdoel. practicsl knowledge

*****CREATE A USER MODEL*****
next: after login (triggered by visiting create post), check for user registered (does user model exist)? if not, direct to signup page...is there any way to do this before sending them to auth?

to go from create/submit post to main page....
onclick submit then redirect