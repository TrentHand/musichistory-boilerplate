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
									  <input type="text" name="songname" id="songname"><br>
									  Artist name:<br>
									  <input type="text" name="artistname" id="artistname"><br>
									  Album name:<br>
									  <input type="text" name="albumname" id="albumname">
									</form>
									<input type="submit" value="Submit" id="addBTN">
								 </div>`;
							addView.innerHTML = addFields;
							addBTN.addEventListener("click", addSong);

function addSong(){
	newSong = {
		Song: document.getElementById("songname").value,
		Artist: document.getElementById("artistname").value,
		Album:  document.getElementById("albumname").value
	};
	songList.push(newSong);
	showListView();
}



