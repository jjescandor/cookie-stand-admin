## LAB - Class 39

#### Project: React III
#### Author: JJ Escandor

#### Description
 - This is project is about recreating the Cookie Stand Admin app using Next.js and style using Tailwind CSS.

#### Run
- To run, type "npm install" in ther terminal
- Then , type "npm run dev"

### Feature Tasks and Requirements
- All features from versions 1 an 2 should be complete.
The specs for lab are screen shots Cookie Stand Admin Version 3 and Cookie Stand Admin Login
pages/Index.js should export a Home component.
- If user is NOT logged in then LoginForm should render.
- If user IS logged in then CookieStandAdmin component should render.
LoginForm requirements
- Should receive a function passed in to call when form is submitted.
- The function should be called with username and password arguments.
CookieStandAdmin requirements
- When user fills out form to add location then the data should be posted to API
- While waiting for API response the CookieStandTable should render the new row in a pending state.
- When API response is complete then CookieStandTable should render latest data.
CookieStandTable requirements
- Component should continue to display Cookie Stand info as in version 2
- Add a delete icon in each stand’s location cell.
- Clicking delete icon should immediately delete the Cookie Stand.
- In other words, it should NOT require a page refresh.
- API should be informed that Cookie Stand was deleted.
- Continue to style all components using TailwindCSS utility classes to match spec.

### Implementation Notes
- Continue work in cookie-stand-admin repository
- Ideally, you will have front end communicate with your API.
- If your API is not fully functional then communicate with instructor to get access to a test API.
- IMPORTANT Complete version 1 & 2 tasks before moving on to version 3 features.
- Pro tip: Tailwind CSS Extension Pack

### Tests
1. No test at this time
