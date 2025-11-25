"use client";
import { useState } from 'react';
import { CopyButton } from './copy';
import { Input } from './input';
import { Output } from './output';


function replaceBrackets(str: string) {
    str = str.replace(/「/g, "『");
    str = str.replace(/」/g, "』");
    str = str.replace(/\n/g, "");
    str = str.replace(/\r/g, "");
    str = str.replace(/\r\n/g, "");
    return str;
}


function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text)
  .then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}


export function Process() {
    const [inputValue, setInputValue] = useState("");
    const [buttonText, setButtonText] = useState("Copy!");
    const outputValue = replaceBrackets(inputValue);


    const handleInputChange = (text: string) => {
        setButtonText("Copy!");
        setInputValue(text);
    }


    const handleCopy = (_event: React.MouseEvent<HTMLButtonElement>) => {
        copyTextToClipboard(outputValue);
        setButtonText("Copied!");
    }


    return (
      <main>
        <div className="flex flex-col items-center m-4 space-y-4">
          <Input
            value={inputValue}
            handleInputChange={handleInputChange}
          />

          <Output
            value={outputValue}
          />

          <CopyButton
            handler={handleCopy}
            buttonText={buttonText}
          />
        </div>
      </main>
    );
}

