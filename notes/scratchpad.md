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
  https://reactrouter.com/web/api/Redirect
  https://stackoverflow.com/questions/19035373/how-do-i-redirect-in-expressjs-while-passing-some-context

to go from create/submit post to main page....
onclick submit then redirect

sdc: https://medium.com/@andrewmyint

AWSpass1!
https://docs.aws.amazon.com/ground-station/latest/ug/create-ec2-ssh-key-pair.html
https://github.com/airbnb/javascript
https://www.atlassian.com/git/tutorials/undoing-changes
https://ourcodeworld.com/articles/read/977/how-to-deploy-a-node-js-application-on-aws-ec2-server

mongoDB location:
storage:
  dbPath: /usr/local/var/mongodb

blog.pem located at: Macintosh HD⁩ ▸ ⁨Users⁩ ▸ ⁨zach⁩ ▸ ⁨Downloads⁩

ssh -i blog.pem ubuntu@https://18.223.170.9

setting up mongodb on aws:
  https://devopsmyway.com/install-mongodb-on-ec2/