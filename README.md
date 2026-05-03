# Angelo Jas Sespene

## Website Links: 
- https://asespene.github.io/Lab5_Starter/expose.html
- https://asespene.github.io/Lab5_Starter/explore.html



1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No since sending meessages are bit more complex as it needs to interact with the databases, servers, and   more. On the other hand, unit test are for small isolated blocks of code. If we want to test an entire sending process, we would need a integration test or an end-to-end test. 

  

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. This is a great scenario for a unit test since this is pure and isolated logic. This makes it easy to write a test that can verify if the specific function does correctly truncuates a string at 80 characters without needing any other systems.






















Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
