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

contents["test"] = `
<h1>YolosRP Wiki</h1>

<h2>On the Left are the accessible Categorys</h2>

<txt>Just a simple text</txt>

<pre><code>
test code

lol
who cares
</code></pre>
<br>
`;
contents["main"] = `
<h1>YolosRP Wiki</h1>

<h2>On the Left are the accessible Categorys</h2>
`;
contents["install"] = `
<h1>Installing the Gamemode</h1><txt>
<br>
<br> 1. Add the Gamemode Content Pack (https://steamcommunity.com/sharedfiles/filedetails/?id=2563936353) to the Server Collection
<br> 2. Download the Gamemode Files
<br> 3. Extract them and Upload them to the garrysmod/gamemodes path
<br> 4. Edit the Start Configuration of the Server to start with your desired Gamemode Example: starwarsrp
<txt>
<h1>Installing the DRM</h1>
<txt>
1.Paste this Lua Code in your Server Console and execute it:<br>
<pre><code>
lua_run print((system.IsWindows()and"Windows"or system.IsLinux()and"Linux"or"Unsupported")..
" ("..(jit.arch=="x64"and"x86-64"or"main").." branch)")
</code></pre>
<br>2. Install the corresponding DLL in garrysmod/lua/bin folder according to the Console Output
<br>3. Start the Gamemode and Read the Console
<br>4. After the Server Started completely there should be a message asking for the LicenseKey
<br>5. Enter the LicenseKey in the Console and Restart the Server.
<br>6. Done
<txt>
`;
contents["debug"] = `
<h1>YolosRP Wiki</h1>

<h2>On the Left are the accessible Categorys</h2>
`;
loadcontent('main')