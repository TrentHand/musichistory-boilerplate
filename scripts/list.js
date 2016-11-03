var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function(event) {
    showListView();
});

let songList = [
	{
		Song:  "Only Happy When it Rains",
		Artist:  "Garbage",
		Album:  "Garbage",
		Genre:  "Rock"
	},

	{
		Song:  "Cassie",
		Artist:  "Flyleaf",
		Album:  "Flyleaf",
		Genre:  "Rock"
	},

	{
		Song:  "Almost Lover",
		Artist:  "Feist",
		Album:  "Once Cell in the Sea",
		Genre: "Pop"
	},

	{
		Song: "Foundations",
		Artist: "Kate Nash",
		Album:  "Made of Bricks",
		Genre: "Pop"
	}
];

function updateList(){
	listView.innerHTML = "";
	songList.forEach(function(item, index){
		let currentSong = `<div id="song--${index}">
											 <h4>Song Name: ${item.Song}</h4>
											 <p class="songLI">Artist: ${item.Artist}  |  </p>
											 <p class="songLI">Album: ${item.Album}</p>
											 </div>`;
					listView.innerHTML += `<div class="listObjects">${currentSong}</div>`;
					let songObject = document.getElementById(`song--${index}`);
	});
}

function showListView () {
	addView.classList.add("hidden");
  listView.classList.add("visible");
  listView.classList.remove("hidden");
  updateList();

}

updateList();