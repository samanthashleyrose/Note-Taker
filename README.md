# Note-Taker
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How To Contribute](#how-to-contribute)
- [Credits](#credits)
- [License](#license)

## Installation

In order to use the Note Taker, it is necessary to have a code editor, such as Visual Studio Code (VSCode), and Node.js installed on your system.

1. Begin by installing Node.js on your computer's terminal/command-line. For detailed installation instructions, vist Node.js.org.

2. Initiate the cloning process from the GitHub repository by selecting "Code." Copy the SSH link then execute the `git clone <paste SSH link>` command in your terminal/command-line. Next, open the cloned project in your preferred code editor.

3. Verify the installation of npm, which usually comes bundled with Node.js. Execute the command `npm -v` in the intergrated terminal to confirm that you have the latest version downloaded. If npm is not installed, run the command `npm i` before continuing.

4. In addition run the command `npm install express`. For the Note Taker to function properly, you must have express listed as a dependecny in your package.json file.

## Usage

Before proceeding with the following usage instructions, ensure that you have successfully completed all installation requirements.

1. **Run the server**
- Open the integrated terminal by right-clicking on server.js and selecting 'Open in Integrated Terminal.'
- Execute the command `node server.js` in your terminal to run the server. 
- The server has successfully started if the console log displays the message: `Server is running on http://localhost:3001`.

2. **Access the Application**
- Open your web browser and enter `http://localhost:3001`, or simply windows/command click the provided link in the Integrated Terminal.

3. **Get Started with Note Taking**
- On the opening page, click 'Get Started' to navigate to the note-taking page.

4. **Create and Save Notes**
- Enter in a Title for your note along with a description. 
- Once satisified with your note, click 'Save Note' in the upper right corner of the screen. You may save an unlimited amount of notes.
- Your saved note will appear in the notes bar on the left. 

5. **Manage Notes**
-  To remove a note, either select the trash can icon next to the note's title or open the note and click 'Delete Note' in the upper right corner. 
- *Note: Deleted notes cannot be retrieved, so exercise caution when removing them.*

## How to Contribute

Feel free to contribute to the improvement of the Note Taker by reporting any encountered issues, suggesting enhancements, or sharing your valuable feedback. If you come across any issues during your usage, kindly open a new issue or submit a pull request via this repository. Your contributions are appreciated.

Furthermore, you are encouraged to voice any concerns, propose improvements, or offer suggestions. Do not hesitate to reach out on any of these matters—I am eager to collaborate with you to enhance the Note Taker.

GitHub Profile: samanthashleyrose <br>
Email: samantha.rose327@gmail.com

### Thank you for your interest and support!

## Credits

#### Knowledge Assitance From:
<li>Lee Warrrick <a href="https://leewarrick.com/">Personal Portfolio</a></li>
<li>Mia Ciasullo <a href="https://github.com/miacias">GitHub Portfolio</a></li>

#### Technologies Used:
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://www.npmjs.com/package/express">NPM</a></li>
<li><a href="https://chat.openai.com/">ChatGPT</a></li>

#### Documentation Used:
<li><a href="https://github.com/coding-boot-camp/miniature-eureka/tree/main/Develop/public">Starter Code</a></li>
<li><a href="https://expressjs.com/en/guide/routing.html">Routing - expressjs.com</a></li>
<li><a href="https://www.codecademy.com/article/what-is-express-js">What is Express.js? - Codecademy</a></li>
<li><a href="https://www.youtube.com/watch?v=DGMdgWCDgFM">Thomas' Express JS Note Taker | UofT Coding Bootcamp Module 11 - Youtube</a></li>

## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file for details.