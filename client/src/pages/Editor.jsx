import React, { useState, useEffect } from 'react';
import Editornavbar from '../components/Editornavbar';
import Editor from '@monaco-editor/react';
import { MdFullscreen, MdFullscreenExit, MdLightMode, MdDarkMode } from 'react-icons/md';

const Editorpage = () => {
  const [tab, settab] = useState("html");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Code states
  const [htmlcode, setHtmlCode] = useState("<h1>Hello World</h1>");
  const [csscode, setCssCode] = useState("body {background-color: white;}");
  const [jscode, setJsCode] = useState("// some comment");

  // Toggle Light/Dark Mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle Fullscreen Mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Container class based on dark or light mode
  const containerClass = isDarkMode ? 'bg-gray-950' : 'bg-white';
  const editorTheme = isDarkMode ? 'vs-dark' : 'light';

  // Function to run the code in the iframe
  const run = () => {
    const html = htmlcode;
    const css = `<style>${csscode}</style>`;
    const js = `<script>${jscode}<\/script>`;
    const iframe = document.getElementById("iframe");

    if (iframe) {
      iframe.srcdoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Output</title>
          ${css}
        </head>
        <body>
          ${html}
          ${js}
        </body>
        </html>
      `;
    }
  };

  // Update code based on tab and run the output
  const handleEditorChange = (value, language) => {
    if (language === 'html') {
      setHtmlCode(value || "");
    } else if (language === 'css') {
      setCssCode(value || "");
    } else if (language === 'javascript') {
      setJsCode(value || "");
    }
  };

  // Run the code whenever the code changes
  useEffect(() => {
    run();
  }, [htmlcode, csscode, jscode]);

  return (
    <>
      {/* Navigation Bar */}
      <Editornavbar />

      {/* Main Container for Editor and Output */}
      <div
        className={`flex w-full ${isFullscreen ? 'h-screen' : 'h-[90vh]'} transition-all duration-300`}
      >
        {/* Editor Section */}
        <div
          className={`card ${containerClass} h-full rounded-none flex-grow ${isFullscreen ? 'w-full' : 'w-1/2'} transition-all duration-300`}
        >
          {/* Tabs for HTML, CSS, JavaScript */}
          <div
            className={`navbar flex items-center justify-between w-full ${containerClass} h-[50px] px-4`}
          >
            {/* Tabs */}
            <div className="flex gap-5">
              <div
                onClick={() => settab("html")}
                className={`tab p-[6px] ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-200'} px-3 text-[15px] ${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer`}
              >
                HTML
              </div>
              <div
                onClick={() => settab("css")}
                className={`tab p-[6px] ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-200'} px-3 text-[15px] ${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer`}
              >
                CSS
              </div>
              <div
                onClick={() => settab("javascript")}
                className={`tab p-[6px] ${isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-200'} px-3 text-[15px] ${isDarkMode ? 'text-white' : 'text-black'} cursor-pointer`}
              >
                JavaScript
              </div>
            </div>

            {/* Icons Positioned to the End */}
            <div className="flex items-center gap-4">
              <i
                className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                onClick={toggleTheme}
              >
                {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
              </i>
              <i
                className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                onClick={toggleFullscreen}
              >
                {isFullscreen ? (
                  <MdFullscreenExit size={24} />
                ) : (
                  <MdFullscreen size={24} />
                )}
              </i>
            </div>
          </div>

          {/* Monaco Editor */}
          {tab === "html" && (
            <Editor
              onChange={(value) => handleEditorChange(value, 'html')}
              height="calc(100% - 50px)"
              width="100%"
              theme={editorTheme}
              language="html"
              value={htmlcode}
            />
          )}
          {tab === "css" && (
            <Editor
              onChange={(value) => handleEditorChange(value, 'css')}
              height="calc(100% - 50px)"
              width="100%"
              theme={editorTheme}
              language="css"
              value={csscode}
            />
          )}
          {tab === "javascript" && (
            <Editor
              onChange={(value) => handleEditorChange(value, 'javascript')}
              height="calc(100% - 50px)"
              width="100%"
              theme={editorTheme}
              language="javascript"
              value={jscode}
            />
          )}
        </div>

        {/* Output Section */}
        {!isFullscreen && (
          <div
            className={`card ${isDarkMode ? 'bg-gray-100' : 'bg-white'} h-full rounded-none flex-grow w-1/2 transition-all duration-300`}
          >
            {/* Iframe for Output */}
            <iframe
              id="iframe"
              className="w-full h-full"
              title="Output"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default Editorpage;
