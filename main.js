import nunjucks from 'nunjucks';

// Set path to static files
const path = '/home/romaro/nunjucks/templates/';
const compiler = nunjucks.configure(path);

// Make placeholders
const placeholders = {
	username: 'Roma'
};

// Rendering file
const fileName = 'index.html';
const result = compiler.render(fileName, placeholders);
console.log(result);
