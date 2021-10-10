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

### <a name="introduction"></a> Introduction

### <a name="original-requirements"></a> Spec

<details>
<summary>
<a name="installation-pre-conditions"></a> Expand
</summary>

Two companies, COKE and PEPSI, are sharing an office building but as they are competitors, they don’t trust each other. Tomorrow is COLA day (for one day), that the two companies are celebrating. They are gathering a number of business partners in the building. In order to optimize space utilization, they have decided to set-up a joint booking system where any user can book one of the 20 meeting rooms available, 10 from each company (C01, C02, ..., C10 and P01, P02, ...., P10).

The booking system has the following functionalities:

● Users can see meeting rooms availability

● Users can book meeting rooms by the hour (first come first served)

● Users can cancel their own reservations

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

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

<details>
<summary>
Expand
</summary>

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

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

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
    <td>First wireframe iteration</td>
    <td>Second wireframe iteration</td>
  </tr>
  <tr>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-docs/docs/wireframe-iteration-three.jpg?raw=true">
    </td>
  </tr>
  <tr>
    <td>Third wireframe iteration</td>
  </tr>
</table>

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
<a name="system-design-application-flow-diagram"></a> Flow diagram
</summary>

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/BRDiagram.drawio.svg">

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

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/dbSchema.png">
<a href="https://raw.githubusercontent.com/rxluz/booksys/feat-docs/docs/dbScheme.mwb">Download database schema</a> <br />
<a href="https://github.com/rxluz/booksys/blob/main/migrations/tables.sql">View database migrations</a>

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<details>
<summary>
<a name="api-schema"></a> API schema
</summary>

## Introduction

The **Booksys API** is organized around REST. Our API has predictable resource-oriented URLs, allows form-encoded request bodies, returns JSON-encoded responses, and uses conventional HTTP response codes, authentication, and verbs.

You can utilize the Booksys API in test mode, which does not alter your live data. Use the links available in the example request section to mock the endpoints.

Note that the mock API will not change according to the post parameters.

# Errors

Booksys uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the `5xx` range indicate an error with Booksys's servers.

Some `4xx` errors that could be handled programmatically and include an error array in the response body section that briefly explains the error reported.

<a href="https://documenter.getpostman.com/view/1217791/UUy38mGk">View full API documentation</a> <br />

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

</details>

<details>
<summary>
<a name="responsiveness-tests-result-in-dark-mode"></a> Tests result in dark mode
</summary>

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

<br/>
<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/accessibilityTestResult.png?raw=true">
<br/>
<a href="https://rxluz.github.io/booksys/lighthouse/report.html#accessibility">View full report</a>

</details>

### <a name="performance"></a> Performance

<details>
<summary>
<a name="performance-main-actions"></a> Main actions
</summary>
</details>

<details>
<summary>
<a name="performance-lighthouse-tests"></a> Tests results
</summary>

<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/performanceTestResult.png?raw=true">
<br/>
<a href="https://rxluz.github.io/booksys/lighthouse/report.html#performance">View full report</a>
</details>

<details>
<summary>
<a name="performance-bundle-size-report"></a> Bundle size report
</summary>

<img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/bundleSizeReport.png?raw=true">
<br/>
<a href="https://rxluz.github.io/booksys/bundle-analysis.htm">View full report</a>
</details>

<details>
<summary>
<a name="performance-assets-split"></a> Assets split
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
<table>
  <tr>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/whatsAppShare.png?raw=true">
    </td>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/facebookShare.png?raw=true">
    </td>
    <td>
      <img src="https://github.com/rxluz/booksys/blob/feat-doc/docs/slackShare.png?raw=true">
    </td>
  </tr>
  <tr>
    <td>
    Whatsapp card
    </td>
    <td>
    Facebook card
    </td>
    <td>
    Slack card
    </td>
  </tr>
</table>
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

<img src="https://raw.githubusercontent.com/rxluz/booksys/feat-doc/docs/coverageTestResult.png">
<a href="https://rxluz.github.io/booksys/coverage/lcov-report/index.html">View full coverage report</a>

<p align="right">(<a href="#top">back to top</a>)</p>
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
