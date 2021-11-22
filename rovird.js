// Literally all it does is append a new list item to the more menu.
// The href opens the website in a new window and automatically loads the asset and scans it.

let more = document.querySelector("script.rbx-popover-content")
let textSplit = more.innerText.split("</li>")
let newItem = `
<li class="rovird-scan">
  <a id="rovird-scan" style="color:#fff;" href="https://rovird.xyz/?assetId=${window.location.pathname.split("/")[2]}" target="_blank">Scan with Rovird</a>
</li>
`
textSplit[textSplit.length - 1] = newItem + textSplit[textSplit.length - 1]

let newText = textSplit.join("</li>").replace(/\n/g, "").replace(/    /g, "")

more.innerText = newText