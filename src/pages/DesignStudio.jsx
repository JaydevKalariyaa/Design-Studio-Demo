import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import OneByTwo from "../assets/sidebarImages/one-by-two.svg"
import ThreeByFour from "../assets/sidebarImages/three-by-four.svg"


import OneByThree from "../assets/sidebarImages/one-by-three.svg"   

import Image from "../assets/sidebarImages/image.svg" 
import Button from "../assets/sidebarImages/button.svg" 
import Heading from "../assets/sidebarImages/heading.svg" 
import List from "../assets/sidebarImages/list.svg" 
import Checkbox from "../assets/sidebarImages/checkbox.svg" 
import Container from "../assets/sidebarImages/container.svg"
import Tabs from "../assets/sidebarImages/tabs.svg"
import View from "../assets/sidebarImages/view.svg"
import FullScreen from "../assets/sidebarImages/fullscreen.svg"
import Undo from "../assets/sidebarImages/undo.svg"
import Redo from "../assets/sidebarImages/redo.svg"

const DesignStudio = () => {
  const editorRef = useRef(null);
  const [layoutExpanded, setLayoutExpanded] = useState(true);
  const [widgetsExpanded, setWidgetsExpanded] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);
  const [stylesExpanded, setStylesExpanded] = useState({
    size: false,
    space: false,
    position: false,
    typography: false,
    backgrounds: false,
    border: false
  });

  useEffect(() => {
    if (!editorRef.current) {
      // Initialize GrapeJS with improved configuration
      editorRef.current = grapesjs.init({
        container: "#gjs",
        fromElement: true,
        width: "auto",
        height: "calc(100vh - 100px)",
        storageManager: false,
        plugins: ["gjs-preset-webpage"],
        blockManager: {
          appendTo: "#blocks",
        },
        panels: { defaults: [] },
        styleManager: {
          appendTo: '#style-manager-container',
          sectors: [
            {
              name: 'Size',
              open: false,
              buildProps: ['width', 'height', 'min-width', 'max-width', 'min-height', 'max-height'],
            },
            {
              name: 'Space',
              open: false,
              buildProps: ['margin', 'padding'],
            },
            {
              name: 'Position',
              open: false,
              buildProps: ['position', 'top', 'right', 'bottom', 'left', 'z-index'],
            },
            {
              name: 'Typography',
              open: false,
              buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-decoration', 'text-shadow'],
            },
            {
              name: 'Backgrounds',
              open: false,
              buildProps: ['background-color', 'background-image', 'background-repeat', 'background-position', 'background-size'],
            },
            {
              name: 'Border',
              open: false,
              buildProps: ['border-radius', 'border', 'box-shadow'],
            },
          ],
        },
        // canvas: {
        //   styles: [
        //     'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        //   ]
        // },
        dragMode: 'translate',
       
        dropzone: true,

        deviceManager: {
          devices: [
            {
              name: 'Desktop',
              width: '', // Full width
            },
            {
              name: 'Mobile',
              width: '320px',
              widthMedia: '480px',
            },
          ]
        },
      });

      // Get block manager
      const blockManager = editorRef.current.BlockManager;
      
      // Section
      blockManager.add("container", {
        label: `<img src=${Container} style="width: 100%;" /> <br/> Container
`,
        category: "Layout Elements",
        content: `
                  <div style="border: 1px solid #0082cc; padding: 3px; margin: 5px auto; min-height: 600px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; width: 90%;"
                       data-gjs-droppable="true">
                   
                  </div>
                `,
        attributes: { class: "gjs-block-section" }
      });
      
     
      // 1/2
      blockManager.add("1-2", {
        label: `<img src=${OneByTwo} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">1/2</p></div>`,
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Two Columns Layout" class="gjs-two-column-layout">
                  <div style="flex: 1; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });

      blockManager.add("1-3", {
        label: `<img src=${OneByThree}  className="left-sidebar-image" width="100%"/> <br/> <p style="margin-top:4px">1/3</p></div`,
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Three Columns Layout" class="gjs-three-column-layout">
                  <div style="flex: 1; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                    <div style="flex: 1; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 3"></div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });

      blockManager.add("3-4", {
        label: `<img src=${ThreeByFour} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">3/4</p></div>`,
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Three Columns Layout" class="gjs-three-column-layout">
                  <div style="flex: 3; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px solid #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                  
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });
      
     

      // Heading
      blockManager.add("heading", {
        label: `<img src=${Heading} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">Heading</p></div>`,
        category: "Widgets",
        content: `
          <div style="padding: 10px;">
            <h3 style="margin: 0;">Heading</h3>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #777;">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        `,
        attributes: { class: "gjs-block-text" }
      });
      
      // Checkbox
      blockManager.add("checkbox", {
        label: `<img src=${Checkbox} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">CheckBox</p></div>`,
        category: "Widgets",
        content: `
          <div style="padding: 10px;">
            <label style="display: flex; align-items: center; margin-bottom: 5px;">
              <input type="checkbox" style="margin-right: 10px;" />
              <span>Item - 1</span>
            </label>
          
          </div>
        `,
        attributes: { class: "gjs-block-text" }
      });
      
      // List
      blockManager.add("list", {
        label: `<img src=${List} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">List</p></div>`,
        category: "Widgets",
        content: `
          <ul style="padding-left: 20px;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        `,
        attributes: { class: "gjs-block-text" }
      });
      
      // Image
      blockManager.add("image", {
        label: `<img src=${Image} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">Image</p></div>`,
        category: "Widgets",
        content: `
          <img src="https://via.placeholder.com/150" style="display: block; max-width: 100%;" />
        `,
        attributes: { class: "gjs-block-image" }
      });
      
      // Button
      blockManager.add("button", {
        label: `<img src=${Button} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">Button</p></div>`,
        category: "Widgets",
        content: `
          <button style="padding: 10px 15px; background: #fff; border: 1px solid #0082cc; text-transform: uppercase;">BUTTON</button>
        `,
        attributes: { class: "gjs-block-button" }
      });
      const editor = editorRef.current;
    
    
  
      
      editor.Components.addType("tabs-widget", {
        model: {
          defaults: {
            tagName: "div",
            attributes: { class: "tabs-widget" },
            droppable: false,
            components: `
              <div class="tabs-widget" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
                <div class="tabs-header" style="display: flex; background: #f8f9fa; padding: 10px; border-bottom: 1px solid #ddd; border-radius: 8px 8px 0 0;">
                  <div class="tab-button active" data-tab="1">Tab 1</div>
                  <div class="tab-button" data-tab="2">Tab 2</div>
                  <div class="tab-button" data-tab="3">Tab 3</div>
                </div>
                <div class="tabs-content">
                  <div class="tab-content tab-content-1 active" data-gjs-droppable="true">
                    <p>Content for Tab 1. Drag elements here.</p>
                  </div>
                  <div class="tab-content tab-content-2" data-gjs-droppable="true" style="display: none;">
                    <p>Content for Tab 2. Drag elements here.</p>
                  </div>
                  <div class="tab-content tab-content-3" data-gjs-droppable="true" style="display: none;">
                    <p>Content for Tab 3. Drag elements here.</p>
                  </div>
                </div>
              </div>
            `,
            styles: `
              .tab-button {
                padding: 10px 15px;
                cursor: pointer;
                border-radius: 6px;
                margin-right: 8px;
                transition: all 0.3s ease-in-out;
                font-weight: bold;
                background: transparent;
              }
              .tab-button.active {
                background: #007bff;
                color: white;
              }
              .tab-button:hover {
                background: rgba(0, 123, 255, 0.2);
              }
              .tab-content {
                padding: 20px;
                animation: fadeIn 0.3s ease-in-out;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `,
            script: function () {
              const widget = this;
              const buttons = widget.querySelectorAll(".tab-button");
              const tabContents = widget.querySelectorAll(".tab-content");

              buttons.forEach((button) => {
                button.addEventListener("click", function () {
                  const tabNum = this.getAttribute("data-tab");

                  // Remove 'active' class from buttons and add to clicked one
                  buttons.forEach((btn) => btn.classList.remove("active"));
                  this.classList.add("active");

                  // Hide all tab contents and show only the selected one
                  tabContents.forEach((content) => (content.style.display = "none"));
                  widget.querySelector(`.tab-content-${tabNum}`).style.display = "block";
                });
              });
            },
          },
        },
      });

      // Add Tabs block
      blockManager.add("tabs", {
        label: `<img src=${Tabs} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">Tabs</p></div>`,
        category: "Widgets",
        content: { type: "tabs-widget" },
        attributes: { class: "gjs-block-tabs" },
      }); 
      
      
      // Make canvas droppable
    
     
      // Make sure the canvas handles drops properly
      editor.on('component:selected', component => {
        const selectedComponent = component;
        if (selectedComponent) {
          // Ensure columns are droppable
          if (selectedComponent.get('type') === 'default' || 
              selectedComponent.getAttributes()['data-gjs-droppable'] === 'true') {
            selectedComponent.set('droppable', true);
          }
        }
      });

      editor.DomComponents.getWrapper().set({
        droppable: true,
        resizable: false
      });

      editor.Commands.add('set-device-desktop', {
        run: (editor) => editor.setDevice('Desktop'),
      });
      editor.Commands.add('set-device-mobile', {
        run: (editor) => editor.setDevice('Mobile'),
      });
      
      // Set proper dimensions
      // editor.Canvas.getBody().style.minHeight = '100%';
    }
  }, []);

  const toggleLayout = () => {
    setLayoutExpanded(!layoutExpanded);
  };


  const openCodeModal = () => {
    if (!editorRef.current) return;
  
    const editor = editorRef.current;
    const modal = editor.Modal;
    const codeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
  
    // Create the container for the code viewer
    let container = document.createElement("div");
    container.style.padding = "20px";
    container.style.background = "#f8f9fa";
    container.style.borderRadius = "8px";
    container.style.height = "400px";
    container.style.overflow = "auto";
  
    // Get the generated HTML & CSS
    const html = editor.getHtml();
    const css = editor.getCss();
  
    // Ensure previous modal content is cleared
    modal.setContent("");
    modal.setTitle("Generated Code");
  
    // Open the modal FIRST to ensure proper rendering
    modal.open();
  
    // Append container to modal first
    modal.getContentEl().appendChild(container);
  
    // Initialize CodeMirror after ensuring the container exists
    setTimeout(() => {
      console.log(codeViewer)
      // if (!codeViewer.editor) {
      //   codeViewer.set({ readOnly: 0, lineNumbers: true });
      //   codeViewer.init(container);
      // }
      codeViewer.setContent(`<!-- HTML -->\n${html}\n\n/* CSS */\n${css}`);
    }, 100); // Small delay ensures CodeMirror gets initialized correctly
  };
  
  
  const toggleWidgets = () => {
    setWidgetsExpanded(!widgetsExpanded);
  };

  // Simple toggle function for style sections
  const toggleStyle = (section) => {
    setStylesExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // GrapesJS functionality handlers
  const togglePreview = () => {
    if (editorRef.current) {
      editorRef.current.Commands.run('core:preview');
      setPreviewMode(!previewMode);
    }
  };

  const toggleFullscreen = () => {
    if (editorRef.current) {
      editorRef.current.Commands.run('core:fullscreen');
    }
  };

  const undoAction = () => {
    if (editorRef.current) {
      editorRef.current.Commands.run('core:undo');
    }
  };

  const redoAction = () => {
    if (editorRef.current) {
      editorRef.current.Commands.run('core:redo');
    }
  };

  const getHtmlContentWithStyles = () => {
    if (editorRef.current) {
      // Get the HTML content from the editor
      const htmlContent = editorRef.current.getHtml();
      
      // Get the CSS styles from the editor
      const cssContent = editorRef.current.getCss();

      // Combine both HTML and CSS into a full HTML document
      const fullHtmlContent = `
        <html>
          <head>
            <style>
              ${cssContent}
            </style>
          </head>
          <body>
            ${htmlContent}
          </body>
        </html>
      `;

      console.log(fullHtmlContent); // Logs the final HTML with styles
      alert(fullHtmlContent); // You can display the content or save it as needed
    }
  };


  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ 
          height: "60px", 
          background: " #0082CC", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "0 20px", 
          borderBottom: "1px solid #dee2e6" 
        }}>
          <h3 style={{ margin: 0, fontSize: "20px", color: "white", }}>Design Studio</h3>
          <div style={{ display: "flex", gap: "15px" }}>
            <button 
              onClick={togglePreview}
              style={{ 
                background: "transparent", 
                border: "none", 
                color: previewMode ? "#0088ff" : "#6c757d", 
                fontSize: "16px"
              }}
              title="Toggle Preview Mode"
            >
           <img src={View} height="20px" width="20px"/>

            </button>
            <button 
              onClick={toggleFullscreen}
              style={{ 
                background: "transparent", 
                border: "none", 
                color: "#6c757d", 
                fontSize: "16px"
              }}
              title="Toggle Fullscreen"
            >
               <img src={FullScreen} height="18px" width="18px"/ >
            </button>
            <button 
              onClick={undoAction}
              style={{ 
                background: "transparent", 
                border: "none", 
                color: "#6c757d", 
                fontSize: "16px"
              }}
              title="Undo"
            >
              <img src={Undo} height="18px" width="18px"/>
            </button>
            <button 
              onClick={redoAction}
              style={{ 
                background: "transparent", 
                border: "none", 
                color: "#6c757d", 
                fontSize: "16px"
              }}
              title="Redo"
            >
             <img src={Redo} height="18px" width="18px"/>
            </button>
            {/* <button 
              onClick={openCodeModal}
              style={{ 
                background: "transparent", 
                border: "none", 
                color: "#6c757d", 
                fontSize: "16px"
              }}
              title="Get HTML with Styles"
            >
              <span>🔗</span>
            </button> */}
          </div>
        </div>

      {/* Main Content */}
      <div style={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        {/* Left Sidebar - Page Elements */}
        <div style={{ 
          width: "300px", 
          background: "#e4e4e4", 
          color: "black", 
          overflow: "auto"
        }}>
          <div style={{ padding: "16px", fontWeight: "bold", fontSize: "16px" }}>
            Page Elements
          </div>
          
          {/* Layout Elements - GrapeJS blocks will be appended here */}
          <div id="blocks" >
           
            {/* GrapeJS blocks will be displayed here when layout is expanded */}
            <div style={{ display: layoutExpanded ? 'block' : 'none'  }}></div>
          </div>
          
        
            
           
         
         
        </div>

        {/* Editor */}
        <div style={{width:"100%",backgroundColor:"white"}}>
        
      <div id="gjs" style={{ flexGrow: 1, height: "calc(100vh - 30px) !important", padding: "4px 20px", margin: 0, overflowY: "auto" }}></div>
        </div>
       

        {/* Right Sidebar - Style */}
        <div style={{ 
          width: "300px", 
          background: "#e4e4e4", 
          color: "black", 
          overflow: "auto"
        }}>
          <div style={{ padding: "15px 15px 5px 15px", fontWeight: "bold", fontSize: "16px" }}>
            Style
          </div>
          
         
            <div id="style-manager-container" style={{marginTop:"5px",background:"white" }}></div>
         
          
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
