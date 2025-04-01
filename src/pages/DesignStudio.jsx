import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";

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
        height: "100%",
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
        label: `<svg width="58" height="48" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.32 0C1.0387 0 0 1.0387 0 2.32V44.8533C0 46.1346 1.0387 47.1733 2.32 47.1733H55.68C56.9613 47.1733 58 46.1346 58 44.8533V2.32C58 1.0387 56.9613 0 55.68 0H2.32ZM6.57333 3.86667C7.21398 3.86667 7.73333 3.34732 7.73333 2.70667C7.73333 2.06602 7.21398 1.54667 6.57333 1.54667C5.93268 1.54667 5.41333 2.06602 5.41333 2.70667C5.41333 3.34732 5.93268 3.86667 6.57333 3.86667ZM3.86667 2.70668C3.86667 3.34733 3.34732 3.86668 2.70667 3.86668C2.06602 3.86668 1.54667 3.34733 1.54667 2.70668C1.54667 2.06603 2.06602 1.54668 2.70667 1.54668C3.34732 1.54668 3.86667 2.06603 3.86667 2.70668ZM1.54667 6.96001C1.54667 6.53291 1.8929 6.18667 2.32 6.18667H55.68C56.1071 6.18667 56.4533 6.5329 56.4533 6.96V44.8533C56.4533 45.2804 56.1071 45.6267 55.68 45.6267H2.32C1.8929 45.6267 1.54667 45.2804 1.54667 44.8533V6.96001ZM11.6 2.70667C11.6 3.34732 11.0807 3.86667 10.44 3.86667C9.79935 3.86667 9.28 3.34732 9.28 2.70667C9.28 2.06602 9.79935 1.54667 10.44 1.54667C11.0807 1.54667 11.6 2.06602 11.6 2.70667Z" fill="#222222"/>
<rect x="11.5034" y="8.41002" width="34.9933" height="34.9933" stroke="black" stroke-width="0.193333"/>
<rect x="12.3734" y="9.28002" width="33.2533" height="33.2533" fill="#FAFAFA" stroke="#222222" stroke-width="1.54667" stroke-dasharray="5.03 1.55"/>
</svg>
 Container`,
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
        label: "1/2",
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Two Columns Layout" class="gjs-two-column-layout">
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });

      blockManager.add("1-3", {
        label: "1/3",
        category: "Layout Elements",
        content: `<div style="display: flex; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="Three Columns Layout" class="gjs-three-column-layout">
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                  <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                    <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 3"></div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });

      blockManager.add("2-2", {
        label: "2/2",
        category: "Layout Elements",
        content: `<div style="display: flex; flex-direction: column; gap: 10px; padding: 5px; width: 100%;" data-gjs-droppable="false" data-gjs-custom-name="gjs-two-two-column-layout">
                  <div style="display: flex; gap: 10px;">
                    <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 1"></div>
                    <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 2"></div>
                  </div>
                  <div style="display: flex; gap: 10px;">
                    <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 3"></div>
                    <div style="flex: 1; min-height: 70px; border: 1px dashed #0082cc;"  data-gjs-droppable="true" data-gjs-custom-name="Column 4"></div>
                  </div>
                </div>`,
        attributes: { class: "gjs-block-grid" }
      });
      
     

      // Heading
      blockManager.add("heading", {
        label: "Heading",
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
        label: "Checkbox",
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
        label: "List",
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
        label: "Image",
        category: "Widgets",
        content: `
          <img src="https://via.placeholder.com/150" style="display: block; max-width: 100%;" />
        `,
        attributes: { class: "gjs-block-image" }
      });
      
      // Button
      blockManager.add("button", {
        label: "Button",
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
      <button onClick={getHtmlContentWithStyles}>👁 generate</button> 

      {/* Main Content */}
      <div style={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        {/* Left Sidebar - Page Elements */}
        <div style={{ 
          width: "300px", 
          background: "#e4e4e4", 
          color: "black", 
          overflow: "auto"
        }}>
          <div style={{ padding: "15px 15px 5px 15px", fontWeight: "bold", fontSize: "16px" }}>
            Page Elements
          </div>
          
          {/* Layout Elements - GrapeJS blocks will be appended here */}
          <div id="blocks" style={{ marginBottom: "15px" }}>
           
            {/* GrapeJS blocks will be displayed here when layout is expanded */}
            <div style={{ display: layoutExpanded ? 'block' : 'none', padding: "10px" }}></div>
          </div>
          
        
            
           
            <div style={{ display: widgetsExpanded ? 'block' : 'none', padding: "10px" }}></div>
         
        </div>

        {/* Editor */}
        <div style={{width:"100%"}}>
        <div style={{ 
        height: "50px", 
        background: "#f8f9fa", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        padding: "0 15px", 
        borderBottom: "1px solid #dee2e6" 
      }}>
        <h3 style={{ margin: 0, fontSize: "18px", color: "#0088ff" }}>Design Studio</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button 
            onClick={togglePreview}
            style={{ 
              background: "transparent", 
              border: "none", 
              color: previewMode ? "#0088ff" : "#6c757d" 
            }}
            title="Toggle Preview Mode"
          >
            <span>👁️</span>
          </button>
          <button 
            onClick={toggleFullscreen}
            style={{ background: "transparent", border: "none", color: "#6c757d" }}
            title="Toggle Fullscreen"
          >
            <span>⬚</span>
          </button>
          <button 
            onClick={undoAction}
            style={{ background: "transparent", border: "none", color: "#6c757d" }}
            title="Undo"
          >
            <span>↩️</span>
          </button>
          <button 
            onClick={redoAction}
            style={{ background: "transparent", border: "none", color: "#6c757d" }}
            title="Redo"
          >
            <span>↪️</span>
          </button>
        </div>
      </div>
      <div id="gjs" style={{ flexGrow: 1, height: "100%", padding: 0, margin: 0, overflow: "hidden" }}></div>
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
