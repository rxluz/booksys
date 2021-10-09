<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://rxluz.github.io/booksys">
    <img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/public/logoSocial.svg" alt="Logo" height="80">
  </a>

  <h3 align="center">Booksys</h3>

  <p align="center">
    Booksys is a booking system that allows different companies to book offices in a given event.
    <br />
    <a href="https://github.com/rxluz/booksys/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rxluz.github.io/booksys">View Demo</a>
    ·
    <a href="https://github.com/rxluz/booksys/issues">Report Bug</a>
    ·
    <a href="https://github.com/rxluz/booksys/issues">Request Feature</a>
  </p>
</div>

- Introduction
- Original requirements
- Project install
  - Pre-conditions
  - Available scripts
- Resources list
- Conception
  - Research
  - Wireframes
  - Mockups
  - Prototypes
  - Features list
- System design
  - Business rules UML
  - Static pages and assets
  - Folder structure
- API
  - Database schema
  - API schema
  - Mock data
  - Security
  - HTTPS
  - DNS Protection
  - CSP
  - Headers
- Frontend
  - Empty/Invalid states
  - No Javascript allowed
  - 404 pages
- Components
  - List
  - Storybook
- Responsiveness
  - Tests result in light mode
  - Tests result in dark mode
- Accessibility
  - Main actions
  - Tests results
- Performance
  - Main actions
  - Lighthouse tests
  - Bundle size report
  - Assets split
  - Tests results
- Internationalization
  - How it works
  - Use a different language
  - Add a new language
  - Change translations
- Security
  - Main actions
  - NPM Audit integrated with Husky
  - Content Security Policy (CSP)
- Browser compatibility
  - Main actions
  - Tests results
- SEO
  - Tracking
  - Social share
- CI / Quality
  - ESLint with Airbnb rules
  - Prototypes
  - Sentry integration
  - Flow on open a new PR
  - Flow on merge a PR with the main branch
- Tests
  - Run tests
  - Add new tests
  - Coverage report
- Misc
  - Main tools
  - Todo list
  - Project numbers
  - Known issues
  - Acknowledgements

## Original requirements

Two companies, COKE and PEPSI, are sharing an office building but as they are competitors, they don’t trust each other. Tomorrow is COLA day (for one day), that the two companies are celebrating. They are gathering a number of business partners in the building. In order to optimize space utilization, they have decided to set-up a joint booking system where any user can book one of the 20 meeting rooms available, 10 from each company (C01, C02, ..., C10 and P01, P02, ...., P10).

The booking system has the following functionalities:

● Users can see meeting rooms availability

● Users can book meeting rooms by the hour (first come first served)

● Users can cancel their own reservations

## Project install

## Resources list

| Title                                                                                                    | Description                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Lighthouse report](https://rxluz.github.io/booksys/lighthouse/report.html)                              | Lighthouse is an open-source, automated tool for improving the quality of web pages. You can run it against any web page, public or requiring authentication. It has audits for performance, accessibility, progressive web apps, SEO and more. |
| [Storybook components](https://rxluz.github.io/booksys/storybook/?path=/story/components-button--button) | Storybook is an open-source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.                                                                                                  |
| [Tests coverage report](https://rxluz.github.io/booksys/coverage/lcov-report/index.html)                 | Show all the tests done and how much they cover the code.                                                                                                                                                                                       |
| [Devices screenshots](https://github.com/rxluz/booksys/tree/main/docs/devices-screenshots)               | Application screenshots                                                                                                                                                                                                                         |
| [Aplication diagrams](https://github.com/rxluz/booksys/blob/main/docs/applicationDiagrams.pdf)           | All flows and rules available in the app                                                                                                                                                                                                        |
| [DB Schema](https://github.com/rxluz/booksys/blob/main/docs/dbScheme.mwb)                                | Show the database tables, foreign keys and fields                                                                                                                                                                                               |
| [Wireframes](https://github.com/rxluz/booksys/blob/main/docs/wireframes/wireframes.pdf)                  | The initial draft to build booksys                                                                                                                                                                                                              |
| [Mockups](https://app.moqups.com/pSG0jJ9bhn/view/page/ad64222d5)                                         | Low fidelity layout                                                                                                                                                                                                                             |
| [Figma](https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys)                                       | High fidelity layout                                                                                                                                                                                                                            |
