var txtFile = "username.txt"
var file = new File(txtFile);

file.open("r"); // open file with read access
var str = "";
while (!file.eof) {
	// read each line of text
	str += file.readln() + "\n";
}
file.close();
alert(str);

function readTextFile(filepath) {
	var str = "";
	var txtFile = new File(filepath);
	txtFile.open("r");
	while (!txtFile.eof) {
		// read each line of text
		str += txtFile.readln() + "\n";
	}
	return str;
}
/*var upload = document.getElementById('username');
// File reader to read the file 
var reader = new FileReader();
 // Parse the result into an object
var result = JSON.parse(reader.result);
// Read the uploaded file
reader.readAsText(res);*/
