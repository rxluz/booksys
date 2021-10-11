<div align="center">
  <a href="https://rxluz.github.io/booksys">
    <img src="https://raw.githubusercontent.com/rxluz/booksys/feat-doc/public/logoSocialDark.svg" alt="Booksys logo" height="80">
  </a>
  <p align="center">
    <br />
    <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Generic%20Laptop.jpg?raw=true">
    <br />
    <b>Booksys is a booking system that allows different companies to book offices in a given event.</b>
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

<summary><a name="table-contents"></a>Table of Contents</summary>
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
    <li>
      <a href="#frontend">Invalid states</a>
      <ul>
        <li>
          <a href="#empty-invalid-states">Empty/Invalid states</a>
        </li>
        <li>
          <a href="#no-javascript-allowed">No Javascript allowed</a>
        </li>
        <li>
          <a href="#404-pages">404 pages</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#frontend">Components</a>
      <ul>
        <li>
          <a href="#list">List</a>
        </li>
        <li>
          <a href="#storybook">Storybook</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#responsiveness">Responsiveness</a>
      <ul>
        <li>
          <a href="#tests-result-in-light-mode">Tests result in light mode</a>
        </li>
        <li>
          <a href="#tests-result-in-dark-mode">Tests result in dark mode</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#accessibility">Accessibility</a>
      <ul>
        <li>
          <a href="#accessibility-main-actions">Main actions</a>
        </li>
        <li>
          <a href="#accessibility-tests-results">Tests results</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#performance">Performance</a>
      <ul>
        <li>
          <a href="#performance-main-actions">Main actions</a>
        </li>
        <li>
          <a href="#performance-lighthouse-tests">Lighthouse tests</a>
        </li>
        <li>
          <a href="#performance-bundle-size-report">Bundle size report</a>
        </li>
        <li>
          <a href="#performance-assets-split">Assets split</a>
        </li>
        <li>
          <a href="#performance-tests-results">Tests results</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#internationalization">Internationalization</a>
      <ul>
        <li>
          <a href="#internationalization-how-it-works">How it works</a>
        </li>
        <li>
          <a href="#internationalization-use-a-different-language">Use a different language</a>
        </li>
        <li>
          <a href="#internationalization-add-a-new-language">Add a new language</a>
        </li>
        <li>
          <a href="#internationalization-change-translations">Change translations</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#security">Security</a>
      <ul>
        <li>
          <a href="#security-main-actions">Main actions</a>
        </li>
        <li>
          <a href="#security-npm-audit-integrated-with-husky">NPM Audit integrated with Husky</a>
        </li>
        <li>
          <a href="#security-content-security-policy">Content Security Policy (CSP)</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#browser-compatibility">Browser compatibility</a>
      <ul>
        <li>
          <a href="#browser-compatibility-main-actions">Main actions</a>
        </li>
        <li>
          <a href="#browser-tests-results">Tests results</a>
        </li>
        <li>
          <a href="#security-content-security-policy">Content Security Policy (CSP)</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#seo">SEO</a>
      <ul>
        <li>
          <a href="#seo-tracking">Tracking</a>
        </li>
        <li>
          <a href="#seo-social-share">Social share</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#ci-qa">CI / QA</a>
      <ul>
        <li>
          <a href="#ci-qa-eslint-with-airbnb-rules">ESLint with Airbnb rules</a>
        </li>
        <li>
          <a href="#ci-qa-prototypes">Prototypes (React)</a>
        </li>
        <li>
          <a href="#ci-qa-sentry-integration">Sentry integration</a>
        </li>
        <li>
          <a href="#ci-qa-flow-on-open-a-new-pr">Flow on open a new PR</a>
        </li>
        <li>
          <a href="#ci-qa-flow-on-merge-a-pr-with-the-main-branch">Flow on merge a PR with the main branch</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#tests">Tests</a>
      <ul>
        <li>
          <a href="#tests-run-tests">Run tests</a>
        </li>
        <li>
          <a href="#tests-add-new-tests">Add new tests</a>
        </li>
        <li>
          <a href="#tests-coverage-report">Coverage report</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#misc">Misc</a>
      <ul>
        <li>
          <a href="#misc-main-tools">Main tools</a>
        </li>
        <li>
          <a href="#misc-todo-list">Todo list</a>
        </li>
        <li>
          <a href="#misc-project-numbers">Project numbers</a>
        </li>
        <li>
          <a href="#misc-known-issues">Known issues</a>
        </li>
        <li>
          <a href="#misc-acknowledgements">Acknowledgements</a>
        </li>
      </ul>
    </li>
  </ol>
</details>

### <a name="introduction"></a> Introduction

Booksys is a project focused on the frontend features; However the [API](https://documenter.getpostman.com/view/1217791/UUy38mGk), [DB schema](https://github.com/rxluz/booksys/tree/feat-doc#-database-schema) and [migrations](https://github.com/rxluz/booksys/blob/main/migrations/tables.sql) are all defined but not implemented; the project uses [mock data](https://github.com/rxluz/booksys/tree/feat-doc#-mock-data) to display the backend resources correctly.

Bellow is the URLs to check the different application states:

| URL                                                                                                                | State                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| https://rxluz.github.io/booksys/#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6                                             | Initial request booking form to Coca Cola users, only accepts emails with the following domains: - cocacola.com - cocacola.ie |
| https://rxluz.github.io/booksys/#/f76a49f4-73c4-44ce-1fa1-7242bd3d3cc6                                             | Initial page to Pepsi Cola users, only accepts emails with the following domains: - pepsi.com - pepsi.ie                      |
| https://rxluz.github.io/booksys/#/f76a49f4-73c4-44ce-1fa1-7242bd3d3ac6                                             | Page displayed when the event already happened                                                                                |
| https://rxluz.github.io/booksys/#/invalidCompanyId                                                                 | Page displayed when the company doesn't exist                                                                                 |
| https://rxluz.github.io/booksys#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6/booking/a76a49f4-73c4-44ce-8fa1-7242bd3d3cc6 | Success page that is displayed when the user confirmed the booking using the link sent by their email.                        |
| https://rxluz.github.io/booksys#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6/booking/a7aa49f4-73c4-44ce-8fa1-7242bd3d3cc6 | Cancel booking page that is displayed when the user cancel the booking.                                                       |
| https://rxluz.github.io/booksys#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6/booking/a74t49f4-73c4-44ce-8fa1-7242bd3d3cc6 | Change booking page that is displayed when the requested time and seats preferences isn't available anymore.                  |

### <a name="original-requirements"></a> Spec

Two companies, COKE and PEPSI, are sharing an office building but as they are competitors, they don’t trust each other. Tomorrow is COLA day (for one day), that the two companies are celebrating. They are gathering a number of business partners in the building. In order to optimize space utilization, they have decided to set-up a joint booking system where any user can book one of the 20 meeting rooms available, 10 from each company (C01, C02, ..., C10 and P01, P02, ...., P10).

The booking system has the following functionalities:

● Users can see meeting rooms availability

● Users can book meeting rooms by the hour (first come first served)

● Users can cancel their own reservations

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="installation"></a> Installation

<h4>
<a name="installation-pre-conditions"></a> Pre-requirements
</h4>

- Install [Poedit](https://poedit.net/) to edit/add translations
- Install latest [NodeJS](https://nodejs.org/en/download/) and [NPM](https://npmjs.org) versions
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- `npm install --global yarn`
- `git clone https://github.com/rxluz/booksys`
- `cd booksys`
- `yarn install`
- `cp .env.example .env` (Mac/Linux) or `copy .env.example .env` (Windows)
- `yarn client:start`

The application will run in `localhost:3000/booksys#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6`

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="installation-pre-conditions"></a> Available scripts
</h4>

| Command                           | Description                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `yarn client:start`               | Start the frontend application in watch mode                                                                                   |
| `yarn client:build`               | Generate the frontend assets in `build` folder                                                                                 |
| `yarn client:deploy`              | Deploy the application to GitHub Pages                                                                                         |
| `yarn client:test`                | Run the tests created after the last commit and watch for new tests                                                            |
| `yarn client:cypress:open`        | Run the E2E tests                                                                                                              |
| `yarn client:test:coverage`       | Run the tests and generate a coverage report in `coverage` folder                                                              |
| `yarn client:lighthouse`          | Generate a lighthouse report in `build/lighhouse` folder                                                                       |
| `yarn client:build-storybook`     | Generate the storybook assets in `build/storybook` folder                                                                      |
| `yarn client:bundle-analysis`     | Generate the bundle size report in `build` folder                                                                              |
| `yarn client:eject`               | Allows to customize the configuration under Create-React-App, please note that this is a one-way operation and can't be undone |
| `yarn client:translation:extract` | Extract from code all the translatable strings                                                                                 |
| `yarn client:translation:import`  | Import from .po files the translations                                                                                         |
| `yarn client:storybook`           | Run the storybook in watch mode                                                                                                |

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="resources-list"></a> Resources list

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
| [API Documentation](https://documenter.getpostman.com/view/1217791/UUy38mGk)                             | Show all available endpoints, fields and methods                                                                                                                                                                                                |

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="conception"></a> Conception

<h4>
<a name="conception-research"></a> Research
</h4>

The initial idea was to find a way to connect Booksys with the Metamask wallet; the purpose was to allow the users to log in with [Metamask](https://metamask.io/) to see their bookings.

Once this is a fabulous solution from a technical perspective, it wasn't so good from a business perspective; the main problems found were:
Users cannot log in from Mobile devices using [Metamask](https://metamask.io/) wallets
Users with Metamask wallet could be users not authorised to do this action (non-Pepsi/coca-cola employees)

So, to ensure that the application will run on mobile devices and only authorised users will use this, the solution required a booking confirmation from the corporate user emails; in this way, we avoid any attempts to fake bookings.

Another problem found was about the booking offices privacy; the initial solution was to display a calendar to the user with the available times and seats, however when the user access this application for the first time, we can't guarantee that this user is an authorised user.

The solution was to display the office availability only after the users confirmed their identity using a unique link sent by their emails.

Finally, to ensure that Pepsi users don't see the initial Coca-cola office availability and vice-versa, the Booksys URL to each company is different. This solution doesn't guarantee 100% privacy about each company office availability, but it solves most privacy issues cases.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="conception-wireframes"></a> Wireframes
</h4>

<table>
  <tr>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-docs/docs/wireframe-iteration-one.jpg?raw=true">
    </td>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-docs/docs/wireframe-iteration-two.jpg?raw=true">
    </td>
  </tr>
  <tr>
    <td>First wireframe iteration</td>
    <td>Second wireframe iteration</td>
  </tr>
  <tr>
    <td colspan="2">
      <img src="https://github.com/rxluz/booksys/blob/feat-docs/docs/wireframe-iteration-three.jpg?raw=true">
    </td>
  </tr>
  <tr>
    <td colspan="2">Third wireframe iteration</td>
  </tr>
</table>

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="conception-mockups"></a> Mockups
</h4>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/mockups.png">
<a href="https://github.com/rxluz/booksys/blob/feat-docs/docs/mockups.pdf">View full mockup doc</a>
<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="conception-prototypes"></a> Prototypes
</h4>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/prototype.png">
<a href="https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys">View full prototype doc</a>

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="conception-features-list"></a> Features list
</h4>

Users can:

- See the event name, address and date
- Get directions to the event
- Book a new office with the user preferences about seats and time
- Confirm a booking via email
- See other preferences options in their confirmation email
- See their confirmed bookings
- Cancel a booking
- See their cancelled bookings
- Find other seats and times options

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="system-design"></a> System design

<h4>
<a name="system-design-application-flow-diagram"></a> Flow diagram
</h4>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/BRDiagram.drawio.svg">

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="system-design-static-pages-and-assets"></a> Static pages and assets
</h4>

Booksys uses [GitHub Pages](https://pages.github.com/) to store all the frontend assets. To make it faster, [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) with [Webpack](https://webpack.js.org/) splits the Javascript and CSS assets in chunks to ensure that a Booksys page only will call the resources required to load that specific page.

Also, we use [Google Fonts](https://fonts.google.com/) to load the [main font](https://github.com/rxluz/booksys/blob/feat-doc/public/index.html#L41) ([Maven Pro](https://fonts.google.com/specimen/Maven+Pro#standard-styles)) and the library [animate.css](https://daneden.github.io/animate.css/) stored in [CloudFlare](https://www.cloudflare.com/) to create some animations like fade-in in change booking page pagination.

Lastly, the application uses [Polyfill.io](https://polyfill.io/v3/) to ensure [compatibility with different browsers](https://github.com/rxluz/booksys/blob/feat-doc/public/index.html#L50), [Google Analytics](https://analytics.google.com/analytics/web/) to [track](https://github.com/rxluz/booksys/blob/feat-doc/public/index.html#L52) the user behaviour and [Sentry](https://sentry.io/) to [track](https://github.com/rxluz/booksys/blob/feat-doc/src/index.js) applications errors.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="system-design-folder-structure"></a> Folder structure
</h4>

```bash
├── CHANGELOG.md
├── CNAME
├── LICENSE
├── Procfile
├── README.md
├── build
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   └── lcov.info
├── cypress
│   └── integration
│   └── home_spec.js
├── docs
├── eslint-config.json
├── jsconfig.json
├── migrations
│   └── tables.sql
├── package-lock.json
├── package.json
├── public
├── security_report.json
├── src
│   ├── common
│   │   ├── components
│   │   │   ├── button
│   │   │   │   ├── Button.js
│   │   │   │   ├── Button.scss
│   │   │   │   ├── Button.spec.js
│   │   │   │   ├── Button.stories.js
│   │   │   │   └── index.js
│   │   │   ├── companyCard
│   │   │   │   ├── CompanyCard.js
│   │   │   │   ├── CompanyCard.scss
│   │   │   │   ├── CompanyCard.spec.js
│   │   │   │   ├── CompanyCard.stories.js
│   │   │   │   ├── companyCardBackground.png
│   │   │   │   └── index.js
│   │   │   ├── input
│   │   │   │   ├── Input.js
│   │   │   │   ├── Input.scss
│   │   │   │   ├── Input.spec.js
│   │   │   │   ├── Input.stories.js
│   │   │   │   └── index.js
│   │   │   ├── loading
│   │   │   │   ├── Loading.js
│   │   │   │   ├── Loading.spec.js
│   │   │   │   └── index.js
│   │   │   ├── officeCard
│   │   │   │   ├── OfficeCard.js
│   │   │   │   ├── OfficeCard.scss
│   │   │   │   ├── OfficeCard.spec.js
│   │   │   │   ├── OfficeCard.stories.js
│   │   │   │   └── index.js
│   │   │   ├── pagination
│   │   │   │   ├── Pagination.js
│   │   │   │   ├── Pagination.scss
│   │   │   │   ├── Pagination.spec.js
│   │   │   │   ├── Pagination.stories.js
│   │   │   │   └── index.js
│   │   │   └── warning
│   │   │   ├── Warning.js
│   │   │   ├── Warning.scss
│   │   │   ├── Warning.spec.js
│   │   │   ├── Warning.stories.js
│   │   │   ├── email.svg
│   │   │   ├── index.js
│   │   │   └── something-wrong.svg
│   │   ├── locales
│   │   │   ├── en.mo
│   │   │   ├── en.po
│   │   │   ├── pt_BR.mo
│   │   │   ├── pt_BR.po
│   │   │   ├── template.pot
│   │   │   └── translations.js
│   │   ├── routes
│   │   │   ├── RoutesList.js
│   │   │   └── TestRoute.js
│   │   └── utils
│   │   ├── browser.utils.js
│   │   ├── colours.constants.js
│   │   ├── colours.scss
│   │   ├── general.constants.js
│   │   ├── general.utils.js
│   │   ├── os.utils.js
│   │   ├── state.utils.js
│   │   ├── storybookMode.js
│   │   ├── storybookMode.scss
│   │   └── test.utils.js
│   ├── enhancers
│   │   └── monitorReducer.js
│   ├── index.css
│   ├── index.js
│   ├── middleware
│   │   └── logger.js
│   ├── modules
│   │   ├── booking
│   │   │   ├── Booking.actions.js
│   │   │   ├── Booking.constants.js
│   │   │   ├── Booking.js
│   │   │   ├── Booking.services.js
│   │   │   ├── change
│   │   │   │   ├── Change.page.js
│   │   │   │   ├── Change.scss
│   │   │   │   └── Change.spec.js
│   │   │   ├── create
│   │   │   │   ├── Create.constants.js
│   │   │   │   ├── Create.js
│   │   │   │   ├── Create.page.js
│   │   │   │   ├── Create.scss
│   │   │   │   ├── Create.services.js
│   │   │   │   └── Create.spec.js
│   │   │   └── status
│   │   │   ├── Status.page.js
│   │   │   ├── Status.scss
│   │   │   └── Status.spec.js
│   │   ├── company
│   │   │   ├── Company.actions.js
│   │   │   ├── Company.constants.js
│   │   │   ├── Company.js
│   │   │   ├── Company.page.js
│   │   │   └── Company.services.js
│   │   └── main
│   │   ├── BodyClasses.js
│   │   ├── Main.js
│   │   ├── Main.scss
│   │   ├── NotFound.js
│   │   ├── NotFound.svg
│   │   ├── background.png
│   │   ├── loading.svg
│   │   └── logo.svg
│   ├── reducers
│   │   ├── booking.js
│   │   ├── company.js
│   │   ├── configureStore.js
│   │   ├── index.js
│   │   └── settings.js
│   ├── serviceWorker.js
│   └── setupTests.js
├── yarn-error.log
└── yarn.lock
```

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="api"></a> API

<h4>
<a name="api-database-schema"></a> Database schema
</h4>

The design adopted in the DB Schema allows to manage more than two companies and more than one event; the idea is allowing Booksys to control future events without the need to change tables.

This version doesn't manage the users directly; instead, it stores the user information (name and email) on the booking page.

Once the DB is multi-event ready, the API only allows one event per client; this is a limitation that could be easly removed in future versions due to how DB is structured.

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/dbSchema.png">
<a href="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/dbScheme.mwb">Download database schema</a> <br />
<a href="https://github.com/rxluz/booksys/blob/main/migrations/tables.sql">View database migrations</a>

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-schema"></a> API schema
</h4>

#### Introduction

The **Booksys API** is organized around REST. Our API has predictable resource-oriented URLs, allows form-encoded request bodies, returns JSON-encoded responses, and uses conventional HTTP response codes, authentication, and verbs.

You can utilize the Booksys API in test mode, which does not alter your live data. Use the links available in the example request section to mock the endpoints.

Note that the mock API will not change according to the post parameters.

#### Errors

Booksys uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the `5xx` range indicate an error with Booksys's servers.

Some `4xx` errors that could be handled programmatically and include an error array in the response body section that briefly explains the error reported.

<a href="https://documenter.getpostman.com/view/1217791/UUy38mGk">View full API documentation</a> <br />

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-mock-data"></a> Mock data
</h4>

Booksys uses Postman to mock data and store the URL in [`general.constants.js`](https://github.com/rxluz/booksys/blob/main/src/common/utils/general.constants.js#L3) file in [`src/common/utils/`](https://github.com/rxluz/booksys/tree/main/src/common/utils) folder.

The current mock system has some limitations, so it isn't possible to return a different simulated output when sending additional post content.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-security"></a> Security
</h4>

Security is an extensive topic and cannot be ensured only with code measures; it also requires an Architecture that avoids leak data to non-authorized users and many other actions.

The main thing that Booksys does to ensure security only allows users using email from authorized domains to confirm their bookings, but Booksys also does several code actions that we will detail in the topics below:

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-https"></a> HTTPS
</h4>

Booksys uses HTTPS protocol to transport all the data, including the mock API; the index.html page also has a script to redirect the page from HTTP to HTTPS automatically.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-dns-protection"></a> DNS Protection
</h4>

Booksys didn't create the backend, but the proposed API uses CloudFlare to avoid any DDOS attack.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-csp"></a> CSP (Content Security Policy)
</h4>

One of the ways that many attackers use to steal data from the application is using malicious code that sends to their servers sensitive information like email, passwords or credit card numbers.

There are several ways to avoid this, but one of the most powerful ways is to define a CSP in the index.html file and the API; the CSP defined in the index list the allowed domains authorized to receive information from this application.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="api-headers"></a> Headers
</h4>

The Booksys will follow these headers to design the backend API and ensure the security:

| Header                         | Value                                                                                                                                                                                                                                                                                                                                                                                                                    | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| X-XSS-Protection               | 1;mode=block                                                                                                                                                                                                                                                                                                                                                                                                             | XSS filter enabled and prevented rendering the page if attack detected                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| X-Frame-Options                | DENY                                                                                                                                                                                                                                                                                                                                                                                                                     | Prevent any domain to embed your content using frame/iframe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| X-Content-Type-Options         | nosniff                                                                                                                                                                                                                                                                                                                                                                                                                  | Consider files types as defined and disallow content sniffing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Referrer Policy                | no-referrer                                                                                                                                                                                                                                                                                                                                                                                                              | The Referer header will be omitted entirely.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| HTTP Strict Transport Security | max-age=31536000; includeSubDomains                                                                                                                                                                                                                                                                                                                                                                                      | HTTP Strict Transport Security (HSTS) is a web security policy mechanism which helps to protect websites against protocol downgrade attacks and cookie hijacking. It allows web servers to declare that web browsers (or other complying user agents) should only interact with it using secure HTTPS connections, and never via the insecure HTTP protocol.                                                                                                                                                                                                                                                                                                                                    |
| Cookies                        | Secure=True; HttpOnly=True, SameSite=strict                                                                                                                                                                                                                                                                                                                                                                              | "Secure" Cookie A secure cookie is only sent to the server with an encrypted request over the HTTPS protocol. Even with Secure, sensitive information should never be stored in cookies, as they are inherently insecure and this flag can't offer real protection. Starting with Chrome 52 and Firefox 52, insecure sites (http:) can't set cookies with the Secure directive. "HttpOnly" Cookie To prevent cross-site scripting (XSS) attacks, HttpOnly cookies are inaccessible to JavaScript's Document.cookie API; they are only sent to the server. For example, cookies that persist server-side sessions don't need to be available to JavaScript, and the HttpOnly flag should be set. |
| Content-Security-Policy        | default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https://o1034630.ingest.sentry.io/ https://www.google-analytics.com https://www.googletagmanager.com https://fonts.gstatic.com https://fonts.googleapis.com http://cdn.polyfill.io https://cdnjs.cloudflare.com https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io; report-uri https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io/security/report | The Content Security Policy prevent XSS , clickjacking , code injection attacks by implementing the Content Security Policy (CSP) header in your web page HTTP response.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="security-npm-audit-integrated-with-husky"></a> NPM Audit integrated with Husky
</h4>
[NPM Audit](https://docs.npmjs.com/cli/v7/commands/npm-audit) is a helpful tool to detect security problems in external dependencies. To ensure that all new packages are safe, Booksys uses a [hook](https://github.com/rxluz/booksys/blob/feat-doc/.husky/postinstall) automatically called after any new package installation to integrate it with the developer flow.

### <a name="components"></a> Frontend components

<h4>
<a name="components-list"></a> List
</h4>

Booksys stores all the stateless components in the [`src/common/components`](https://github.com/rxluz/booksys/tree/main/src/common/components) folder; also, to separate state from visual, all the pages have two files, one to manage states, routes, API services communication and the other to control the presentational components, responsiveness and local state.

Storybook stores all the [stateless components list](https://rxluz.github.io/booksys/storybook/).

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="components-storybook"></a> Storybook
</h4>

Booksys uses Storybook with the following addons:

- **Parameters control:** Allow to change all the parameters from a stateless component without creating several stories
  storybookControls

<img src="https://github.com/rxluz/booksys/blob/feats-misc/docs/storybookControls.png?raw=true">

- **Integration with Figma:** Shortcut to access the prototype
  <img src="https://github.com/rxluz/booksys/blob/feats-misc/docs/storybookFigma.png?raw=true">

- **Accessibility:** Display any component accessibility errors
  <img src="https://github.com/rxluz/booksys/blob/feats-misc/docs/storybookAccessibility.png?raw=true">

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="components-invalid-states"></a> Invalid states
</h4>

#### Empty/Invalid states

#### No Javascript allowed

#### 404 pages

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="responsiveness"></a> Responsiveness

<h4>
<a name="responsiveness-tests-result-in-light-mode"></a> Tests result in light mode
</h4>

| Devices                 | Change booking page                                                                                                                                      | Create booking page                                                                                                                                     | Booking status page                                                                                                                                     |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4k Display              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/4K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/4K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/4K%20Display.jpg?raw=true)                  |
| 5k Display              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/5K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/5K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/5K%20Display.jpg?raw=true)                  |
| Galaxy Fold             | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Galaxy%20Fold.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/Galaxy%20Fold.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/Galaxy%20Fold.jpg?raw=true)                 |
| Moto G4                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Moto%20G4.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/Moto%20G4.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/Moto%20G4.jpg?raw=true)                     |
| Pixel 2                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Pixel%202.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/Pixel%202.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/Pixel%202.jpg?raw=true)                     |
| Surface Duo             | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Surface%20Duo.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/Surface%20Duo.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/Surface%20Duo.jpg?raw=true)                 |
| iPhone 5-SE             | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/iPhone%205-SE.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/iPhone%205-SE.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/iPhone%205-SE.jpg?raw=true)                 |
| iPhone X                | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/iPhone%20X.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/iPhone%20X.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/iPhone%20X.jpg?raw=true)                    |
| iPad                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/iPad.jpg?raw=true)                          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/iPad.jpg?raw=true)                          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/iPad.jpg?raw=true)                          |
| iPad Pro                | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/iPad%20Pro.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/iPad%20Pro.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/iPad%20Pro.jpg?raw=true)                    |
| Generic Laptop          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Generic%20Laptop.jpg?raw=true)              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/Generic%20Laptop.jpg?raw=true)              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/Generic%20Laptop.jpg?raw=true)              |
| Laptop with MDPI screen | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/Laptop%20with%20MDPI%20screen.jpg?raw=true) | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/Laptop%20with%20MDPI%20screen.jpg?raw=true) | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/Laptop%20with%20MDPI%20screen.jpg?raw=true) |
| MacBook Pro 13          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/MacBook%20Pro%2013.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/MacBook%20Pro%2013.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/MacBook%20Pro%2013.jpg?raw=true)            |
| MacBook Pro 16          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/booking-page/MacBook%20Pro%2016.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/create-page/MacBook%20Pro%2016.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/light-mode/status-page/MacBook%20Pro%2016.jpg?raw=true)            |

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="responsiveness-tests-result-in-dark-mode"></a> Tests result in dark mode
</h4>

| Devices                 | Change booking page                                                                                                                                     | Create booking page                                                                                                                                    | Booking status page                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 4k Display              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/4K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/4K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/4K%20Display.jpg?raw=true)                  |
| 5k Display              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/5K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/5K%20Display.jpg?raw=true)                  | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/5K%20Display.jpg?raw=true)                  |
| Galaxy Fold             | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/Galaxy%20Fold.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/Galaxy%20Fold.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/Galaxy%20Fold.jpg?raw=true)                 |
| Moto G4                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/Moto%20G4.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/Moto%20G4.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/Moto%20G4.jpg?raw=true)                     |
| Pixel 2                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/Pixel%202.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/Pixel%202.jpg?raw=true)                     | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/Pixel%202.jpg?raw=true)                     |
| Surface Duo             | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/Surface%20Duo.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/Surface%20Duo.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/Surface%20Duo.jpg?raw=true)                 |
| iPhone 5-SE             | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/iPhone%205-SE.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/iPhone%205-SE.jpg?raw=true)                 | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/iPhone%205-SE.jpg?raw=true)                 |
| iPhone X                | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/iPhone%20X.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/iPhone%20X.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/iPhone%20X.jpg?raw=true)                    |
| iPad                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/iPad.jpg?raw=true)                          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/iPad.jpg?raw=true)                          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/iPad.jpg?raw=true)                          |
| iPad Pro                | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/iPad%20Pro.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/iPad%20Pro.jpg?raw=true)                    | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/iPad%20Pro.jpg?raw=true)                    |
| Generic Laptop          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/Generic%20Laptop.jpg?raw=true)              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/Generic%20Laptop.jpg?raw=true)              | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/Generic%20Laptop.jpg?raw=true)              |
| Laptop with MDPI screen | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/Laptop%20with%20MDPI%20screen.jpg?raw=true) | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/Laptop%20with%20MDPI%20screen.jpg?raw=true) | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/Laptop%20with%20MDPI%20screen.jpg?raw=true) |
| MacBook Pro 13          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/MacBook%20Pro%2013.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/MacBook%20Pro%2013.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/MacBook%20Pro%2013.jpg?raw=true)            |
| MacBook Pro 16          | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/booking-page/MacBook%20Pro%2016.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/create-page/MacBook%20Pro%2016.jpg?raw=true)            | [Screenshot](https://github.com/rxluz/booksys/blob/feat-doc/docs/devices-screenshots/dark-mode/status-page/MacBook%20Pro%2016.jpg?raw=true)            |

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="accessibility"></a> Accessibility

<h4>
<a name="accessibility-main-actions"></a> Main actions
</h4>

<h4>
<a name="accessibility-tests-results"></a> Tests results
</h4>

<br/>
<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/accessibilityTestResult.png?raw=true">
<br/>
<a href="https://rxluz.github.io/booksys/lighthouse/report.html#accessibility">View full report</a>
<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="performance"></a> Performance

<h4>
<a name="performance-main-actions"></a> Main actions
</h4>

<h4>
<a name="performance-lighthouse-tests"></a> Tests results
</h4>

<br/>
<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/performanceTestResult.png?raw=true">
<br/>
<a href="https://rxluz.github.io/booksys/lighthouse/report.html#performance">View full report</a>
<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="performance-bundle-size-report"></a> Bundle size report
</h4>

<br/>
<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/bundleSizeReport.png?raw=true">
<br/>
<a href="https://rxluz.github.io/booksys/bundle-analysis.htm">View full report</a>
<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="performance-assets-split"></a> Assets split
</h4>

### <a name="internationalization"></a> Internationalization

<h4>
<a name="internationalization-how-it-works"></a> How it works
</h4>

I’ve tested some different ways to translate web applications, and I noticed that most of the developers work with strings inside a JSON file like this:

```
{
    "ACTION_ACTIVE":"Aktiv",
    "ACTION_CANCEL":"Cancel",
    "ACTION_ADD":"Hinzufügen",
    "ACTION_ADD_CUSTOMER":"Neuen Kunden hinzufügen",
    "ACTION_BACK_TO_MENU":"Zurück zum Menü",
    "ACTION_BACK_TO_LIST":"Zurück zur Liste",
    "ACTION_CHECK":"Klick zum prüfen",
    "ACTION_CHECK_NO_CV":"Keine CVV für diese Karte generieren",
    "ACTION_CHECKOUT":"Check-out",
}
```

Unfortunately, there are a lot of problems with this approach, JSON strings aren’t friendly to translators professionals. It is a typical pattern to developers but a nightmare for people who don’t know rules like putting quotation marks, commas, and brackets.

When you have a number or a variable in the middle of the text, some situations will demand two strings. However, these strings together probably won’t make sense in other languages because different languages have different structures.

I used [Redux i18n](https://www.npmjs.com/package/redux-i18n) to manage translations; with this plugin, you can use POT files, and this file is readable by [Poedit](https://poedit.net/), which translation professionals primarily use.

Another advantage is we don’t need to create JSON files. Instead, just code and the plugin will extract your code the strings; looks cute, right?

This plugin has an option to import data from PO files. Thus the person responsible for translations doesn’t need to change internal files in your application, beyond easy is more secure.

<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/poeditExample.png?raw=true">
<br/>
<a href="https://github.com/rxluz/booksys/tree/main/src/common/locales">View translation folder</a>
<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="internationalization-use-a-different-language"></a> Use a different language
</h4>
<br>
There are two ways to use a different language:

- **Auto-detected**: Booksys [detects your browser preferred language](https://github.com/rxluz/booksys/blob/95c6ca1292d5399976ad9028a2b0a41a34585ab1/src/common/utils/general.utils.js#L23), and in case the application has this language package available, it displays the website in this language. Otherwise, the application displays English as default.
- **Using the `lang` parameter**: The application allows the user to set the language manually, sending in the URL the prefered language; for instance, you can see Booksys in Portuguese using the following URL:

https://rxluz.github.io/booksys/?lang=pt%2F#/f76a49f4-73c4-44ce-8fa1-7242bd3d3cc6/booking/booking123

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="internationalization-add-a-new-language"></a> Add a new language
</h4>

- Run `yarn client:translation:extract`
- Download [Poedit](https://poedit.net/)
- Using [Poedit](https://poedit.net/) open the file [`template.pot`](https://github.com/rxluz/booksys/blob/main/src/common/locales/template.pot) in [`src/common/locales/`](https://github.com/rxluz/booksys/tree/main/src/common/locales) folder
- Create `.mo` and `.po` file translation in [Poedit](https://poedit.net/) and save this translation in the folder above
- Run `yarn client:translation:import`
- This command will update the file `translations.js`
- Case needed import new languages packages to [moment](https://momentjs.com/docs/#/i18n/) and add it inside the [`general.utils.js`](https://github.com/rxluz/booksys/blob/main/src/common/utils/general.utils.js) file in [`src/common/utils`](https://github.com/rxluz/booksys/tree/main/src/common/utils) folder. (eg.: `import 'moment/locale/es'`

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="internationalization-change-translations"></a> Change translations
</h4>

You can change the translations using [Poedit](https://poedit.net/) and reimport the file or change the `translation.js` in the [`src/common/locales/`](https://github.com/rxluz/booksys/tree/main/src/common/locales) folder.

Some situations require changing this file straight due to a bug to export plurals; you need to edit this file directly when you need plurals.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="browser-compatibility"></a> Browser compatibility

<h4>
<a name="compatibility-main-actions"></a> Main actions
</h4>
<br>

The application is compatible with the following browsers:

- Microsoft Edge
- Opera
- Firefox
- Safari
- Chrome

This application uses [Polyfill.io](https://polyfill.io/v3/) to ensure that the application will run in an old browser. Also, all code is compiled to ES5 to avoid breaking the application due to some modern JS syntax.

However, due to modern CSS units, it not guaranteed that everything will work properly in an old browser like Internet Explorer.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="seo"></a> SEO

<h4>
<a name="seo-tracking"></a> Main actions
</h4>
<br>
This application isn't intended to be a social application or an application that needs to be well-positioned in Google Search. The SEO actions were mainly focused on ensuring that the shared images would appear correctly.

To do that was added inside [`index.html`](https://github.com/rxluz/booksys/blob/main/public/index.html) several [metatags](https://github.com/rxluz/booksys/blob/main/public/index.html#L21) to allow the crawlers to display the Booksys website thumbnail correctly.

Also, the application is connected with [Google Analytics](https://github.com/rxluz/booksys/blob/main/public/index.html#L52) to collect valuable insights about the performance and general improvements.

<p align="right">(<a href="#table-contents">back to top</a>)</p>

<h4>
<a name="seo-social-share"></a> Social share screenshots
</h4>
<table>
  <tr>
    <td> 
      <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/whatsAppShare.png?raw=true">
    </td>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/facebookShare.png?raw=true">
    </td>
  </tr>
  <tr>
    <td>
    Whatsapp card
    </td>
    <td>
    Facebook card
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/slackShare.png?raw=true">
    </td>
  </tr>
  <tr>
    <td colspan="2">
    Slack card
    </td>
  </tr>
</table>

### <a name="tests"></a> Tests

<h4>
<a name="tests-run-tests"></a> Run tests
</h4>

Booksys utilises testing-library and Jest to do unit tests and Cypress to do E2E tests; the following commands are available to run tests:

| Command                     | Description                                                         |
| --------------------------- | ------------------------------------------------------------------- |
| `yarn client:test`          | Run the tests created after the last commit and watch for new tests |
| `yarn client:cypress:open`  | Run the E2E tests                                                   |
| `yarn client:test:coverage` | Run the tests and generate a coverage report in `coverage` folder   |

The coverage tests report is initially generated in the `/coverage/lcov-report/` folder, but these files are copied to the `build/` folder during the deployment.

<h4>
<a name="tests-add-new-tests"></a> Add new tests
</h4>

To add new tests to the application, do the following procedure according to the test type:

- **Unit tests**: The unit tests should be done inside the component folder using the exact name of the component, adding `.spec.js` at the end
- **E2E tests**: All E2E tests should be located inside the `cypress/integration` folder, and they need to finish the file name with `_spec.js`

<h4>
<a name="tests-coverage-report"></a> Coverage report
</h4>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-doc/docs/coverageTestResult.png">
<a href="https://rxluz.github.io/booksys/coverage/lcov-report/index.html">View full coverage report</a>

<p align="right">(<a href="#table-contents">back to top</a>)</p>

### <a name="tests"></a> Misc

<h4>
<a name="misc-main-tools"></a> Main tools
</h4>

<h4>
<a name="misc-todo-list"></a> Todo list
</h4>

improve tests coverage
add e2e tests
use better accessibility tests tools
remove moment
improve support to ie11
remove object hash

<h4>
<a name="misc-project-numbers"></a> Project numbers
</h4>

<h4>
<a name="misc-known-issues"></a> Known issues
</h4>

plurals in translations

<h4>
<a name="misc-acknowledgements"></a> Acknowledgements
</h4>
https://dev.to/shostarsson/security-headers-to-use-on-your-webserver-3id5
