function Tune(song,artist) {
    var title = song;
    this.contact = function () {
        return title + " " + artist;
    }
}

var happysongs = [];
happysongs[0] = new Tune("heart","EZ");
console.log(happysongs[0].title);
console.log(happysongs[0].contact());

happysongs[0].title='testing';
console.log(happysongs[0].title);