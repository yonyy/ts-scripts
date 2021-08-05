const { exec } = require("child_process");

//

// node runTest <test_folder>
const ARG_LENGTH = 3;
const TEST_FOLDER_INDEX = 2;

if (process.argv.length < ARG_LENGTH) {
	console.error(`Missing test folder argument: node runTest <test_folder>`);
	process.exit(1);
}

const testFolder = process.argv[TEST_FOLDER_INDEX];

exec(`npx jest ${testFolder} --colors`, (err, stdout, stderr) => {
	console.error(stderr);
	console.log(stdout);
});
