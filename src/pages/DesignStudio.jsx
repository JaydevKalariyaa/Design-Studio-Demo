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
// Inline SVG for tabs widget
const TabsSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="4" width="20" height="16" rx="1" stroke="#0082cc" stroke-width="1.5" fill="none"/>
  <rect x="2" y="4" width="7" height="4" rx="1" stroke="#0082cc" stroke-width="1.5" fill="#E6F3FA"/>
  <rect x="9" y="4" width="7" height="4" rx="1" stroke="#0082cc" stroke-width="1.5" fill="none"/>
  <rect x="16" y="4" width="6" height="4" rx="1" stroke="#0082cc" stroke-width="1.5" fill="none"/>
  <rect x="3" y="10" width="18" height="8" rx="1" stroke="#0082cc" stroke-width="1.5" stroke-dasharray="2 1" fill="none"/>
</svg>`;
import "../styles/main.scss";
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
                  <div style="border: 1px dashed #0082cc; padding: 3px; margin: 5px auto; min-height: 600px; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start; width: 90%;"
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
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });

      blockManager.add("1-3", {
        label: `<img src=${OneByThree}  className="left-sidebar-image" width="100%"/> <br/> <p style="margin-top:4px">1/3</p></div`,
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Three Columns Layout" class="gjs-three-column-layout">
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                    <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 3"></div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });

      blockManager.add("3-4", {
        label: `<img src=${ThreeByFour} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">3/4</p></div>`,
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Three Columns Layout" class="gjs-three-column-layout">
                  <div style="flex: 3; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                  
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
      
      // Make canvas droppable
      const editor = editorRef.current;
     
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
          background: "#fafafa", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          padding: "0 20px", 
          borderBottom: "1px solid #dee2e6" 
        }}>
          <h3 style={{ margin: 0, fontSize: "20px", color: "#0088ff" }}>Design Studio</h3>
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
              <span>👁️</span>
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
              <span>⬚</span>
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
              <span>↩️</span>
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
              <span>↪️</span>
            </button>
            <button 
              onClick={getHtmlContentWithStyles}
              style={{ 
                background: "transparent", 
                border: "none", 
                color: "#6c757d", 
                fontSize: "16px"
              }}
              title="Get HTML with Styles"
            >
              <span>🔗</span>
            </button>
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
        
      <div id="gjs" style={{ flexGrow: 1, height: "calc(100vh - 50px)",backgroundColor:"#fafafa", padding: 1, margin: 0, overflowY: "auto" }}></div>
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
