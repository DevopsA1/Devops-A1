# Campus Bites

Campus Bites is a static, multi-page café website designed around campus
dining. It presents the café, its menu, daily offers, ordering
information, and a way for visitors to share feedback or find contact
information.

## Pages

The website currently includes these pages:

  -----------------------------------------------------------------------
  Page                    File                    Description
  ----------------------- ----------------------- -----------------------
  Home                    `src/index.html`        Introduces Campus Bites
                                                  and highlights featured
                                                  items and café
                                                  offerings.

  About Us                `src/aboutus.html`      Shares the café's
                                                  story, atmosphere, and
                                                  values.

  Menu                    `src/menu.html`         Displays food and drink
                                                  categories and menu
                                                  items.

  Daily Deals             `src/deals.html`        Highlights featured
                                                  specials and meal
                                                  offers.

  How to Order            `src/order.html`        Explains the ordering
                                                  process.

  Feedback & Contact      `src/feedback.html`     Provides a feedback
                                                  form and contact
                                                  information.
  -----------------------------------------------------------------------

## Technologies

-   HTML5 for page structure
-   CSS3 for styling and layout
-   Google Fonts for typography

The pages share a common stylesheet located at `styles/style.css`.

## Project Structure

``` text
Devops-A1/
├── src/
│   ├── index.html
│   ├── aboutus.html
│   ├── menu.html
│   ├── deals.html
│   ├── order.html
│   └── feedback.html
├── styles/
│   └── style.css
├── .gitignore
└── README.md
```

## How to Run

This is a static website, so no package installation, Node.js setup, or
build process is required.

1.  Clone or download the repository.
2.  Open the project folder.
3.  Open `src/index.html` in a web browser.

For local development, you can also open the project folder in an editor
such as Visual Studio Code and use a local preview extension if you
prefer.

## Development Notes

-   Keep the shared stylesheet in `styles/style.css`.
-   The HTML pages are stored in the `src/` directory and link to the
    shared stylesheet using `../styles/style.css`.
-   When adding a new page, follow the existing navigation and footer
    structure so the site remains consistent.
-   Google Fonts are loaded externally, so an internet connection is
    needed for those fonts to appear. The site itself can be opened
    locally.

## Contributing

1.  Create a feature branch for your changes.
2.  Make and test your changes in a browser.
3.  Commit your work with a clear commit message.
4.  Push your branch and open a pull request for review.
