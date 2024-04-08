
# Weather-App Description:
This is a basic weather app that pulls data from Open Weather API to return the current temperature, humidity and weather status based on the entered city. 

Running the application:
1. Clone the repository containing the Weater App
2. Naviage to the project directory
3. Open the index.html file in your web browser. This file resides in the project directory alongside index.js and other files.
4. Enter a city name in the search field.
5. Click the "Submit" button or press Enter on your keyboard.

Testing the application:
The application comes with 3 unit tests written in Jest.
1. getWeatherData.test.js: Tests if getWeatherData throws an error for non-200 status codes.
2. displayError.test.js: Tests if displayError sets the error message content correctly.
3. displayWeatherInfo.test.js: Tests if displayWeatherInfo displays the correct information based on the provided data.

Coding guidelines and standards:

Naming Conventions:
1. Functions and variables: Use camelCase (e.g., changeUserPassword, userName).
2. Length: Keep function and variable names within reasonable lengths for readability.
3. Clarity: Choose descriptive names that reflect the function's or variable's purpose. Avoid abbreviations     unless they are widely understood (e.g., userIdis acceptable, but sDS for sendDataToServer is not).

Style and Spacing:
1. Indentation: Use consistent indentation with 2 spaces per level.
2. Comments: Add comments to explain complex logic and the purpose of non-obvious functions and variables. Keep comments concise and informative, avoiding unnecessary details.
3. Spacing: Use appropriate spacing between lines of code for readability. Avoid excessive blank lines or cramped code blocks.

Contribution Guidelines:
1. New Functions: When implementing new functions, follow the established naming conventions, style, and commenting practices.
2. Testing: Add unit tests to your code whenever possible. Tests are included in separate .js files and run automatically on every push using deploy.yml.

Code Review Process:
1. Version Control: Use feature branches for development and merge changes into the main branch through pull requests. Avoid pushing directly to main.
2. Commit Messages: Craft informative commit messages that describe the nature and extent of the changes you made.
3. Pull Requests:
   1. Submit pull requests only when a feature is fully implemented or a bug is completely fixed.
   2. Include a clear description in your pull request:
   3. Briefly explain the original issue and its cause.
   4. Describe the methods used to solve the issue.
   5. Mention any encountered difficulties during the fix.
   6. Only compare your branch to the main branch for pull requests.
   7. Run tests before submitting a pull request to ensure the code change functions as expected.
4. Reviewing Pull Requests:
   1. Reviewers should assess the code for adherence to these coding standards and overall quality.
   2. Provide constructive feedback on the pull request, indicating:
      1. Whether the issue is fixed and adheres to standards.
      2. Suggestions for improvement if the merge is not approved.
      3. Advice on next steps or missing elements to complete the fix.

