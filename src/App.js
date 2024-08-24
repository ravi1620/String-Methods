import "./App.css";


function App() {
 
  return (
    <div className="App">
<h1><u>""String Methods""</u></h1>
<button
onClick={()=>{
  let a="hi This is Strings Methods Class"
 console.log( a.toUpperCase());
 console.log(a.toLowerCase());
 }}>toUpperCase/toLowerCase</button>

 <button
 onClick={()=>{
  let salutation="Mr.";
  let name="Chawhan";

  console.log(salutation.concat(name));
 }}>concat</button>

 <button
 onClick={()=>{
  let b="    Ravi Kumar    ";
  console.log(`👉${b.trim()}👈`);
  console.log(`👉${b.trimStart()}👈`);
  console.log(`👉${b.trimEnd()}👈`);

 }}>trim/trimStart/trimEnd</button>
 <button type="button"
 onClick={()=>{
let a="Indian should follow";
console.log(a.padStart(26,"Every "));
console.log(a.padEnd(50," their traditions and cultures"));
 }}>padStart/padEnd</button>
  <button
 onClick={()=>{
  let a="Salute to Solider"
  console.log(a.repeat(1000));
 }}>repeat</button>
  <button
 onClick={()=>{
  let a="ABCD,EFGH,ABGHDDFGH,LKJHGFA";
  console.log(a.replace("A","a"));
  console.log(a.replaceAll("A","a"));
 }}>replace/replaceAll</button>
  <button
 onClick={()=>{
  let a="Mern Stack Developer";
  console.log(a.split("e"))
 }}>split</button>
  <button
 onClick={()=>{
  let a="Hi Hello Every One this is our String Method Class";
  console.log(a.length);
  console.log(a.at(0));
  console.log(a[0]);
  console.log(a.charAt(0));
 }}>length</button>
 <button onClick={()=>{
  let a="abcdefghijklmnopqrstuvwxyz";
  console.log(a.slice(1,5));
  console.log(a.substring(1,5));
  console.log(a.substr(1,6));
 }}>slice/substring/substr</button>

 <button
 onClick={()=>{
for(let i=4000;i<=4100;i++){
  console.log(String.fromCharCode(i));
}
 }}>fromCharCode</button>

 <button onClick={()=>{
 
  let b="ABCDEFGHIJKLMNOOPQRSTUVWXYZ";
for(let j=0;j<b.length;j++)
  {console.log(b.charCodeAt(j))};


  let a="abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<a.length;i++){
  console.log(a.charCodeAt(i));
  }
 
 }}>charCodeAt</button>
 <button onClick={()=>{
  let fighter="Netaji Subhash Chandra Bose was a freedom fighter @ INA founder 💪";
  console.log(fighter.startsWith("Netaji"));
  console.log(fighter.endsWith("💪"));
 }}>startsWith/endsWith</button>
 <button onClick={()=>{
   let fighter="💪 Netaji Subhash Chandra Bose 💪 was a freedom fighter @ INA founder 💪";
   console.log(fighter.indexOf("💪"));
   console.log(fighter.lastIndexOf("💪"));
   console.log(fighter.search(/chandra/i));
 }}>indexOf/lastIndexOf/search</button>
    </div>
  );
}

export default App;
