// collapsible stuff
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// function to set the wiki page
var contents = {};
function loadcontent(content) {
    document.getElementById("main").innerHTML = contents[content];
    (function() {
      var pre = document.getElementsByTagName('pre');
        pl = pre.length;
      for (var i = 0; i < pl; i++) {
          pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
          var num = pre[i].innerHTML.split(/\n/).length;
          for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j) + '</span>';
          }
      }
  })();
}

contents["main"] = `
<h1>YolosRP Wiki</h1>

<h2>On the Left are the accessible Categorys</h2>

<txt>Just a simple text</txt>

<pre><code>
test code

lol
who cares
</code></pre>
`;
contents["install"] = `
<h1>Installing the Gamemode</h1>

<pre><code>
Add the Gamemode Content Pack (https://steamcommunity.com/sharedfiles/filedetails/?id=2563936353) to the Server Collection
Download the Gamemode Files
Extract them and Upload them to the garrysmod/gamemodes path
Edit the Start Configuration of the Server to start with your desired Gamemode Example: starwarsrp

The Next step is installing the drm and setting the LicenseKey
</code></pre>
`;

loadcontent('main')