var editor = document.getElementById("editor");
var console = document.getElementById("console");
function runCode() {
  var log = ""
  console.log = function(value) { log += value + "\n" };
  Function(editor.value)()
  console.innerText = log
}