# Eventio

Eventio is a place to find out about events 

## Description

Here you can browse, sign up, or create your own events!

Go to https://sean-hochman-eventio.herokuapp.com/ to check it out!

## Info

There are still many bugs with this page, but we are working hard to fix them as soon as possible!

## TODO:

- Implement missing pages (ie. profile, edit event)
- Fix error handling on forms, add stricter/more descriptive validation
- Fix hydration issues (I think because ssr does not have access to user info)
- Create enums or dictionaries for all text and vars
- Add mobile views/styles
- Implement error pages
- Get rid of any 'any' types
- Add breakpoints, padding, margins, fonts to scss variables

## About Blocks

- Blocks are a way of rendering our layout without the need for too much conditional rendering of compoents. We have regions of the layout that can be populated with specific components that are added to the Component returned by next js. This way, if we want only a specific component in a region, it must be added to the Component in order to show, and you wont get accidental rendering of components you dont want shown on that page.

## More Info

- Go here for API documentation: https://strvtestprojectv2.docs.apiary.io/#
- Go here for designs: https://www.figma.com/file/1sXplbYZYnKSb6eXaJ44pT/Eventio---Frontend-Test-Project
- Go here for other resources (fonts, etc): https://drive.google.com/drive/folders/1XqifNaxp77zzW5r0-dbRp7kC_zvL3dvy
