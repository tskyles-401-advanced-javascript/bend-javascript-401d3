### GitHub Pages (Via GitHub Actions)

GitHub Pages is a free static hosting service that GitHub makes available to you. It's a simplistic system that is designed for small traffic sites and proof of life. **It's a requirement for our React labs to be deployed in this way for grading purposes, so a demo showing how this is done is essential**.

It involves just a few steps

- At GitHub, go to your profile/settings
- Click the "Developer Settings" link in the menu and then "Personal Access Tokens"
- Create a new token with "Repo" access (the first section of checkboxes)
- Copy the token
- Open the **settings** for your React App repository
- Enable Github Pages (identify the gh-pages branch in the options) and save
- Click the "Secrets" link
- Create a new secret called `PERSONAL_TOKEN` and paste in the token.
- Add the react.yml file to your `.github/workflows` folder alongside the test.yml file

Now, on every push, GitHub will deploy your site to GitHub pages!
