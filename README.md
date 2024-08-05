# Web Scraping with Node.js: Extracting Match Schedules from VLR.gg

This project demonstrates how to perform web scraping using Node.js to extract match schedules from the website [VLR.gg](https://www.vlr.gg/matches). The scraped data is then saved into an HTML file and displayed in a structured format.

## Technologies Used

- Node.js
- Axios
- Cheerio
- fs (File System module)

## Project Structure

- `index.js`: Main script for scraping data and generating HTML file.
- `views/index.html`: Generated HTML file containing the scraped match schedules.

## How to Run the Project

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/web-scraping-vlrgg.git
    ```

2. Navigate to the project directory:
    ```sh
    cd web-scraping-vlrgg
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Run the script:
    ```sh
    node index.js
    ```

5. Open the generated `index.html` file in your browser to view the match schedules:
    ```sh
    open views/index.html
    ```

## Notes

- Make sure you have Node.js installed on your machine.
- This script scrapes data from VLR.gg and generates an HTML file in the `views` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
