Sample project for using Snowplow with React

1. Clone the project
    ```shell
    git clone https://github.com/ktunador/react-snowplow-integration.git
    ```

1. Install

   ```shell
   npm install
   ```

1. Set environment variables

   Create a `.env` file in the root folder with the following content

   `<PROJECT_ROOT>/.env`

   ```ini
   # Snowplow Tracker
   SAMPLE_SNOWPLOW_ENDPOINT=localhost:9090
   SAMPLE_SNOWPLOW_APP_ID=Sample_Snowplow_Integration
   ```

1. Run

   ```shell
   npm start
   ```

   - Test website: http://localhost:1234/

1. Test

   - Run Snowplow Micro on your local machine
     ```shell
     docker run -p 9090:9090 snowplow/snowplow-micro:2.0.0
     ```
     > [More information about Micro UI](https://docs.snowplow.io/docs/testing-debugging/snowplow-micro/)
   - Open the Micro UI: http://localhost:9090/micro/ui
