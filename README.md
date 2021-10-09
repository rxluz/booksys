<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://rxluz.github.io/booksys">
    <img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/public/logoSocial.svg" alt="Booksys logo" height="80">
  </a>
  <p align="center">
    Booksys is a booking system that allows different companies to book offices in a given event.
    <br />
    <a href="https://github.com/rxluz/booksys/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rxluz.github.io/booksys/#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6/">View Demo</a>
    ·
    <a href="https://github.com/rxluz/booksys/issues">Report Bug</a>
    ·
    <a href="https://github.com/rxluz/booksys/issues">Request Feature</a>
  </p>
</div>

<details>

<summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#original-requirements">Original requirements</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li>
          <a href="#pre-conditions">Pre-conditions</a>
        </li>
        <li>
          <a href="#available-scripts">Available scripts</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#resources-list">Resources list</a>
    </li>
    <li>
      <a href="#conception">Conception</a>
      <ul>
        <li>
          <a href="#research">Research</a>
        </li>
        <li>
          <a href="#wireframes">Wireframes</a>
        </li>
        <li>
          <a href="#mockups">Mockups</a>
        </li>
        <li>
          <a href="#prototypes">Prototypes</a>
        </li>
        <li>
          <a href="#features-list">Features list</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#system-design">System design</a>
      <ul>
        <li>
          <a href="#business-rules-diagram">Business rules diagram</a>
        </li>
        <li>
          <a href="#static-pages-and-assets">Static pages and assets</a>
        </li>
        <li>
          <a href="#folder-structure">Folder structure</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#api">API</a>
      <ul>
        <li>
          <a href="#database-schema">Database schema</a>
        </li>
        <li>
          <a href="#api-schema">API schema</a>
        </li>
        <li>
          <a href="#mock-data">Mock data</a>
        </li>
        <li>
          <a href="#security">Security</a>
        </li>
        <li>
          <a href="#https">HTTPS</a>
        </li>
        <li>
          <a href="#dns-protection">DNS Protection</a>
        </li>
        <li>
          <a href="#csp">CSP (Content Security Policy)</a>
        </li>
        <li>
          <a href="#headers">Headers</a>
        </li>
      </ul>
    </li>

  </ol>
</details>

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
