import React, { useState } from "react";
 

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleRemoveClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // to capitalize the first character of any string
  const handlecapitalizefirstcharacterofanystringClick = () => {
    let firstchar = text.charAt(0); // storing the first char of the string
    let newText = firstchar.toUpperCase(); // converting that to uppercase
    setText(newText + text.slice(1)); // printing it with rest excluding the first char by using slice
  };
  //This is a function to make every first letter of word in capital

  const capitalFirstLetter = () => {
    let words = text.split(" ");
    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
  };
  //remove all the symbols
  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
  };
  //to extract only the numbers in the text:
  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
  };
  const handleLightTheme = () => {
    document.querySelector(".body").style.backgroundColor = "white";
  };

  const handleDarkTheme = () => {
    document.querySelector(".body").style.backgroundColor = "black";
    document.querySelector(".body").style.color = "white";
  };
  // Function to remove duplicate words from the string
const onRemoveDuplicatesClick = (e) => {
    let newText = text.split(' ').filter(function(item,i,allItems){
        return i === allItems.indexOf(item);
    }).join(' ');

    setText(newText)
}
// Add trim function

const handleteimclick=()=>{
    let newText=text.trim();
    setText(newText)
    }
    //Reverse Input Text
    const ReverseText=()=>{
        setText(text.split('').reverse().join(''));
        }
        //Function to break paragraph into 1 sentence per line.
const handleSPerLineClick =() =>{
      let newText = text.replaceAll('.',"\n");
      setText(newText);
  }
  //I had added the speak functionality in the TextUtilities app and function is:
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

//function to get custom text 
 const customText=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.concat("  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe veritatis quas hic deleniti fuga neque cupiditate, ducimus deserunt mollitia odio numquam officia modi veniam excepturi eveniet ab nihil sed reprehenderit culpa. Incidunt id animi, error corrupti sapiente aliquid possimus libero quae facere eos minus?");
        setText(newText)
    }
    const fistLatterInUpperCaseOfNewSentence = () => {
        let newText = text.split(". ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(". "));
    }
    let handleCopy = () => {
        navigator.clipboard.writeText(text);
    
        alert("Copied the text");
      }
      const handleDeleteClick = () => {
        let newText = ('');
        setText(newText);
      }

  const [text, setText] = useState("");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div class="mb-3">
      <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>
      Copy Text
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleDeleteClick}>
      Clear
      </button>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          placeholder="Enter text hear....."
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>
        Convert to Upper case
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleDownClick}>
        Convert to Lower case
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleRemoveClick}>
        Remove Extra Spacing
      </button>
      <button
        className="btn btn-primary mx-3 my-3"
        onClick={handlecapitalizefirstcharacterofanystringClick}
      >
        Capitalize First Character
      </button>
      <button
        className="btn btn-primary mx-3 my-3"
        onClick={capitalFirstLetter}
      >
        Convert To Headingcase
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handletextExtract}>
        Remove All Symbols
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleNumExtract}>
        Extract Numbers
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleLightTheme}>
        Light Theme
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleDarkTheme}>
        Dark Theme
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={onRemoveDuplicatesClick}>
      Remove Duplicates Words
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleteimclick}>
      Trim
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={ReverseText}>
      Reverse Text
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleSPerLineClick}>
      Convert To Perline
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={speak}>
      Speak Text
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={customText}>
      Custom Text
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={fistLatterInUpperCaseOfNewSentence}>
      Convert To Uppercase after fullstop
      </button>
      
      
     
    </div>
  );
}
