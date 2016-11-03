var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");
var newSongObject = {};

//EVENT LISTENERS

addLink.addEventListener("click", function(event) {
  listView.classList.add("hidden");
  addView.classList.add("visible");
  addView.classList.remove("hidden");



});

let addFields = `<div id="inputBox">
									<form>
									  Song Name:<br>
									  <input type="text" name="songname"><br>
									  Artist name:<br>
									  <input type="text" name="artistname"><br>
									  Album name:<br>
									  <input type="text" name="albumname">
									</form>
									<input type="submit" value="Submit" id="addBTN">
								 </div>`;
							addView.innerHTML = addFields;
							addBTN.addEventListener("click", function(){
							console.log("addFields:  ", addFields.songname);
});



