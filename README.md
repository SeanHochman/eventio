# Eventio

Eventio is a place to find out about events

## Description

Here you can browse, sign up, or create your own events!

Go to https://sean-hochman-eventio.herokuapp.com/ to check it out!

## Info

There are still many bugs with this page, but we are working hard to fix them as soon as possible!

## TODO:

- Implement missing pages (ie. profile, edit event)
- Fix error handling on forms
- Fix hydration issues
- Create enums or dictionaries for all text and vars
- Fix issues with ssr
- Add mobile views/styles
- Implement error pages
- Get rid of any 'any' types

## About Blocks

    Blocks are a way of rendering our layout without the need for too much conditional rendering of compoents. We have regions of the layout that can be populated with specific components that are added to the Component returned by next js. This way, if we want only a specific component in a region, it must be added to the Component in order to show, and you wont get accidental rendering of components you dont want shown on that page.
