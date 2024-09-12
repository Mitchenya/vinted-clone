Instructions for this sprint can be found at https://l2c.northcoders.com/courses/fe/nc-marketplace

NC Marketplace
Overview
Northcoders is creating an online marketplace where we can find new homes for all of the unused items we have lying around, rather than letting them go to waste or just throwing them out.

Users will be able to list items they no longer want, and other users can order items from those listed. We have a lot of retro antiques to get rid of, so the items are all sorted into categories to make searching through them easier.

The Desired Solution
Northcoders has hired you and your pair as contractors to deliver a prototype for NC Marketplace.

At this stage, we have a database of items and users set up with a rudimentary API. This API has endpoints that allow users to retrieve, add, and manage their items.

You need to create a user-friendly interface for this API that will allow users to list and buy items from each other.

Learning Objectives
By working through this sprint, you will have demonstrated:

The ability to plan, design, and implement an advanced React app.
A 'mobile first' approach to planning and designing.
The ability to access data from an API, and utilise that data in React.
An understanding of planning, and implementing, user stories.
Awareness of UI/UX best practices.
Awareness of accessibility best practices.
Getting Started
Once you have forked, cloned and opened the repo locally, initialise your project with Vite using the instructions below:

npm create vite@latest
Project name: .
Note: you can use . to make a React app in the current terminal location to avoid nested directories.

Getting the Data
We are going to need some data in order to build the user interface for the marketplace. Our React application can then make API requests and display the information on the page. For this purpose, the NC devs have built an API for you to retrieve data about the items, categories, and users.

A link to this API will be provided in your seminar channels.

As the API is still in development, there are some considerations to make:

The API has several endpoints and queries it accepts; you do not have to make use of all of them. Several have been included to allow for future expansion. Focus on your user stories, and use appropriate endpoints.
Users do not need to authenticate at this time. This will be handled later by the NC auth service. Your users just need a username to "act as" for now. We will add an auth layer at a later point.
The items can have prices (set them to zero if you're feeling generous). No actual money will change hands as part of this app; we will add a separate service to handle this at a later point.
Take a moment to familiarise yourself with the API documentation you now have access to, considering the following:

What are the endpoints that you have available?
Which endpoints might you use?
What data does each endpoint serve up?
How are you going to use this data?
Once you've had a look through the API documentation, move on to the next task.

Wireframes
Now let's take a moment to plan our app. Below is a list of user stories for the features our marketplace needs. Do not worry about coding anything for now - we'll look at implementing these features in the coming tasks.

User Stories
As a user, I can view a list of available items.
As a user, I can view a list of items for a particular category.
As a user, I can list an item to sell.
As a user, I can order an item.
As a user, I can delete an item listing if I change my mind.
As a user, I can view which items I have previously ordered.
As a user, I can give another user kudos to provide feedback.
As a user, I can add an item to my basket to order later if I am still browsing.
As a user, I can view which items I have added to my basket.
As a user, I can remove items from my basket.
As a user, I can create a new user profile.
Planning
Create a series of wireframes for your marketplace, considering how different screens may look on desktop and mobile displays.

Will the user be greeted with a home screen?
How will the user navigate around the app?
How will the user view the items list?
How will the user view the different categories?
What will the interface for adding an item look like?
Which route will direct your users to which screen?
Once you have a series of wireframes put together, you can move on to the next task.

Now that you have an idea of how your app will look, it's time to draw your component tree:

What sections of your user interface should be separated into components?
How will your components relate to each other?
Consider what state each of your components will need access to.
What data structure will this state take?
Make a note of which components will need which props and consider how you will pass them down.
When you've finished your component tree, move on to the next task.

Let's get your minimum viable product (MVP) built!

Here are the user stories for your MVP:

As a user, I can view a list of available items.
As a user, I can view a list of items for a particular category.
As a user, I can list an item to sell.
Implement the components and pages these features rely on into your app, updating your plan if necessary.

Once you have these three features up and running, move on to the next task where we'll implement some additional functionality.
