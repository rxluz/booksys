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
          <a href="#installation-pre-conditions">Pre-conditions</a>
        </li>
        <li>
          <a href="#installation-available-scripts">Available scripts</a>
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
          <a href="#conception-research">Research</a>
        </li>
        <li>
          <a href="#conception-wireframes">Wireframes</a>
        </li>
        <li>
          <a href="#conception-mockups">Mockups</a>
        </li>
        <li>
          <a href="#conception-prototypes">Prototypes</a>
        </li>
        <li>
          <a href="#conception-features-list">Features list</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#system-design">System design</a>
      <ul>
        <li>
          <a href="#system-design-business-rules-diagram">Business rules diagram</a>
        </li>
        <li>
          <a href="#system-design-static-pages-and-assets">Static pages and assets</a>
        </li>
        <li>
          <a href="#system-design-folder-structure">Folder structure</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#api">API</a>
      <ul>
        <li>
          <a href="#api-database-schema">Database schema</a>
        </li>
        <li>
          <a href="#api-schema">API schema</a>
        </li>
        <li>
          <a href="#api-mock-data">Mock data</a>
        </li>
        <li>
          <a href="#api-security">Security</a>
        </li>
        <li>
          <a href="#api-https">HTTPS</a>
        </li>
        <li>
          <a href="#api-dns-protection">DNS Protection</a>
        </li>
        <li>
          <a href="#api-csp">CSP (Content Security Policy)</a>
        </li>
        <li>
          <a href="#api-headers">Headers</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#components">Frontend components</a>
      <ul>
        <li>
          <a href="#components-list">List</a>
        </li>
        <li>
          <a href="#components-storybook">Storybook</a>
        </li>
        <li>
          <a href="#components-invalid-states">Invalid states</a>
          <ul>
            <li>
              <a href="#components-invalid-states">Empty/Invalid states</a>
            </li>
            <li>
              <a href="#components-invalid-states">No Javascript allowed</a>
            </li>
            <li>
              <a href="#components-invalid-states">404 pages</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#responsiveness">Responsiveness</a>
      <ul>
        <li>
          <a href="#responsiveness-tests-result-in-light-mode">Tests result in light mode</a>
        </li>
        <li>
          <a href="#responsiveness-tests-result-in-dark-mode">Tests result in dark mode</a>
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

### <a name="original-requirements"></a> Original requirements

Two companies, COKE and PEPSI, are sharing an office building but as they are competitors, they don’t trust each other. Tomorrow is COLA day (for one day), that the two companies are celebrating. They are gathering a number of business partners in the building. In order to optimize space utilization, they have decided to set-up a joint booking system where any user can book one of the 20 meeting rooms available, 10 from each company (C01, C02, ..., C10 and P01, P02, ...., P10).

The booking system has the following functionalities:

● Users can see meeting rooms availability

● Users can book meeting rooms by the hour (first come first served)

● Users can cancel their own reservations

<p align="right">(<a href="#top">back to top</a>)</p>

### <a name="installation"></a> Installation

<details>
<summary>
<a name="installation-pre-conditions"></a> Pre conditions
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="installation-pre-conditions"></a> Available scripts
</summary>

| Command                              | Description                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `npm run client:start`               | Start the frontend application in watch mode                                                                                   |
| `npm run client:build`               | Generate the frontend assets in `build` folder                                                                                 |
| `npm run client:deploy`              | Deploy the application to GitHub Pages                                                                                         |
| `npm run client:test`                | Run the tests created after the last commit and watch for new tests                                                            |
| `npm run client:test:coverage`       | Run the tests and generate a coverage report in `coverage` folder                                                              |
| `npm run client:lighthouse`          | Generate a lighthouse report in `build/lighhouse` folder                                                                       |
| `npm run client:build-storybook`     | Generate the storybook assets in `build/storybook` folder                                                                      |
| `npm run client:bundle-analysis`     | Generate the bundle size report in `build` folder                                                                              |
| `npm run client:eject`               | Allows to customize the configuration under Create-React-App, please note that this is a one-way operation and can't be undone |
| `npm run client:translation:extract` | Extract from code all the translatable strings                                                                                 |
| `npm run client:translation:import`  | Import from .po files the translations                                                                                         |
| `npm run client:storybook`           | Run the storybook in watch mode                                                                                                |

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

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

<p align="right">(<a href="#top">back to top</a>)</p>

### <a name="conception"></a> Conception

<details>
<summary>
<a name="conception-research"></a> Research
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="conception-wireframes"></a> Wireframes
</summary>

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
    <td>First wireframe draft</td>
    <td>Last wireframe</td>
  </tr>
</table>

<a href="https://github.com/rxluz/booksys/blob/feat-docs/docs/wireframes.pdf">View full wireframe doc</a>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="conception-mockups"></a> Mockups
</summary>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/mockups.png">
<a href="https://github.com/rxluz/booksys/blob/feat-docs/docs/mockups.pdf">View full mockup doc</a>
<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="conception-prototypes"></a> Prototypes
</summary>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/prototype.png">
<a href="https://www.figma.com/file/pFx6z24OMgktLQL64aKYjG/Booksys">View full prototype doc</a>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="conception-features-list"></a> Features list
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

### <a name="system-design"></a> System design

<details>
<summary>
<a name="system-design-business-rules-diagram"></a> Business rules diagram
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="system-design-static-pages-and-assets"></a> Static pages and assets
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="system-design-folder-structure"></a> Folder structure
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

### <a name="api"></a> API

<details>
<summary>
<a name="api-database-schema"></a> Database schema
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-schema"></a> API schema
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-mock-data"></a> Mock data
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-security"></a> Security
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-https"></a> HTTPS
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-dns-protection"></a> DNS Protection
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-csp"></a> CSP (Content Security Policy)
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-headers"></a> Headers
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

### <a name="components"></a> Frontend components

<details>
<summary>
<a name="components-list"></a> List
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="components-storybook"></a> Storybook
</summary>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="components-invalid-states"></a> Invalid states
</summary>

#### Empty/Invalid states

#### No Javascript allowed

#### 404 pages

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

### <a name="responsiveness"></a> Responsiveness

<details>
<summary>
<a name="responsiveness-tests-result-in-light-mode"></a> Tests result in light mode
</summary>
</details>

<details>
<summary>
<a name="responsiveness-tests-result-in-dark-mode"></a> Tests result in dark mode
</summary>
</details>

### <a name="accessibility"></a> Accessibility

<details>
<summary>
<a name="accessibility-main-actions"></a> Main actions
</summary>
</details>

<details>
<summary>
<a name="accessibility-tests-results"></a> Tests results
</summary>
</details>

### <a name="performance"></a> Performance

<details>
<summary>
<a name="performance-main-actions"></a> Main actions
</summary>
</details>

<details>
<summary>
<a name="performance-lighthouse-tests"></a> Lighthouse tests
</summary>
</details>

<details>
<summary>
<a name="performance-bundle-size-report"></a> Bundle size report
</summary>
</details>

<details>
<summary>
<a name="performance-assets-split"></a> Assets split
</summary>
</details>

<details>
<summary>
<a name="performance-tests-results"></a> Tests results
</summary>
</details>

### <a name="internationalization"></a> Internationalization

<details>
<summary>
<a name="internationalization-how-it-works"></a> How it works
</summary>
</details>

<details>
<summary>
<a name="internationalization-use-a-different-language"></a> Use a different language
</summary>
</details>

<details>
<summary>
<a name="internationalization-add-a-new-language"></a> Add a new language
</summary>
</details>

<details>
<summary>
<a name="internationalization-change-translations"></a> Change translations
</summary>
</details>

### <a name="security"></a> Security

<details>
<summary>
<a name="security-main-actions"></a> Main actions
</summary>
</details>

<details>
<summary>
<a name="security-npm-audit-integrated-with-husky"></a> NPM Audit integrated with Husky
</summary>
</details>

<details>
<summary>
<a name="security-content-security-policy"></a> Content Security Policy (CSP)
</summary>
</details>

### <a name="browser-compatibility"></a> Browser compatibility

<details>
<summary>
<a name="compatibility-main-actions"></a> Main actions
</summary>
</details>

<details>
<summary>
<a name="browser-tests-results"></a> Tests results
</summary>
</details>

### <a name="seo"></a> SEO

<details>
<summary>
<a name="seo-tracking"></a> Tracking
</summary>
</details>

<details>
<summary>
<a name="seo-social-share"></a> Social share
</summary>
</details>

### <a name="tests"></a> Tests

<details>
<summary>
<a name="tests-run-tests"></a> Run tests
</summary>
</details>

<details>
<summary>
<a name="tests-add-new-tests"></a> Add new tests
</summary>
</details>

<details>
<summary>
<a name="tests-coverage-report"></a> Coverage report
</summary>
</details>

### <a name="tests"></a> Misc

<details>
<summary>
<a name="misc-main-tools"></a> Main tools
</summary>
</details>

<details>
<summary>
<a name="misc-todo-list"></a> Todo list
</summary>
</details>

<details>
<summary>
<a name="misc-project-numbers"></a> Project numbers
</summary>
</details>

<details>
<summary>
<a name="misc-known-issues"></a> Known issues
</summary>
</details>

<details>
<summary>
<a name="misc-acknowledgements"></a> Acknowledgements
</summary>
</details>
