import React, { useEffect, useRef, useState } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import OneByTwo from "../assets/sidebarImages/one-by-two.svg"
import ThreeByFour from "../assets/sidebarImages/three-by-four.svg"


import OneByThree from "../assets/sidebarImages/one-by-three.svg"   
import { Button, IconButton, Box } from "@mui/material";
import Image from "../assets/sidebarImages/image.svg" 
import ButtonImg from "../assets/sidebarImages/button.svg" 
import Heading from "../assets/sidebarImages/heading.svg" 
import List from "../assets/sidebarImages/list.svg" 
import Checkbox from "../assets/sidebarImages/checkbox.svg" 
import Container from "../assets/sidebarImages/container.svg"
import Tabs from "../assets/sidebarImages/tabs.svg"
import View from "../assets/sidebarImages/view.svg"
import FullScreen from "../assets/sidebarImages/fullscreen.svg"
import Undo from "../assets/sidebarImages/undo.svg"
import Redo from "../assets/sidebarImages/redo.svg"
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";



import gjsTable from "grapesjs-blocks-table";
const DesignStudio = () => {
  const editorRef = useRef(null);
 
  const [previewMode, setPreviewMode] = useState(false);
  const [pages, setPages] = useState([{ id: "1",component:`<div>Page 1 Content</div>` }]);
  const [selectedPage, setSelectedPage] = useState("1");
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // Function to Save Template
  const saveTemplate = () => {
    const editor = editorRef.current;
    if (editor) {
      const templateData = {
        id: `template-${templates.length + 1}`,
        name: `Template ${templates.length + 1}`,
        pages: editor.Pages.getAll().map(page => ({
          id: page.id,
          html: page.getMainComponent().toHTML(),
          css: editor.getCss(),
        })),
      };
  
      // Store in localStorage
      const storedTemplates = JSON.parse(localStorage.getItem("savedTemplates")) || [];
      const updatedTemplates = [...storedTemplates, templateData];
      localStorage.setItem("savedTemplates", JSON.stringify(updatedTemplates));
  
      setTemplates(updatedTemplates);
      alert("Template saved successfully!");
    }
  };


  
  // Function to Load Template
  const loadTemplate = (templateId) => {
    const editor = editorRef.current;
    if (editor) {
      const storedTemplates = JSON.parse(localStorage.getItem("savedTemplates")) || [];
      const selected = storedTemplates.find((t) => t.id === templateId);
  
      if (selected) {
        // Remove existing pages
        editor.Pages.getAll().forEach((page) => editor.Pages.remove(page.id));
  
        // Load pages from template
        selected.pages.forEach((pageData) => {
          console.log(pageData)
          const newPage = editor.Pages.add({ id: pageData.id });
  
          // Make sure components are correctly added
          newPage.getMainComponent().components(pageData.html);
  
          // Apply CSS styles if available
          if (pageData.css) {
            editor.setStyle(pageData.css);
          }
        });
  
        // Ensure first page is selected
        if (selected.pages.length > 0) {
          editor.Pages.select(selected.pages[0].id);
        }
  
        // Refresh UI
        editor.Pages.render();
  
        // Update state
        setSelectedTemplate(templateId);
        setPages(editor.Pages.getAll());
        setSelectedPage(editor.Pages.getSelected().id)
      }
    }
  };
  
  
  // Load Templates on Component Mount
  useEffect(() => {
    const storedTemplates = JSON.parse(localStorage.getItem("savedTemplates")) || [];
    setTemplates(storedTemplates);
  }, []);

  const updatePagesList = () => {
    const editor = editorRef.current;
    if (editor) {
      const allPages = editor.Pages.getAll();
      setPages(allPages);
  
      // Ensure the selected page is always valid
      const selected = editor.Pages.getSelected();
      setSelectedPage(selected ? selected.id : allPages[0]?.id);
    }
  };
  
  // Function to add a new page
  const addPage = () => {
    const editor = editorRef.current;
    if (editor) {
      const newPageId = `${pages.length + 1}`;
      const newPage = editor.Pages.add({
        id: newPageId,
        component: `<div>Page ${newPageId} Content</div>`,
      });
  
      editor.Pages.select(newPage);
      updatePagesList();
    }
  };
  
  // Function to delete a page & reindex remaining pages
  const deletePage = (pageId) => {
    const editor = editorRef.current;
    if (editor) {
      if (pages.length === 1) {
        alert("You cannot delete the last page!");
        return;
      }
  
      editor.Pages.remove(pageId);
  
      // After deletion, get the updated list of pages
      let updatedPages = editor.Pages.getAll();
  
      // If no pages exist, create a new default page
      if (updatedPages.length === 0) {
        const defaultPage = editor.Pages.add({
          id: "1",
          component: `<div>New Default Page</div>`,
        });
        editor.Pages.select(defaultPage);
        updatedPages = [defaultPage];
      }
  
      // Re-index page names
      updatedPages.forEach((page, index) => {
        page.set("id", `${index + 1}`);
      });
  
      updatePagesList();
    }
  };
  
  // Function to switch pages
  const switchPage = (pageId) => {
    const editor = editorRef.current;
    if (editor) {
      editor.Pages.select(pageId);
      setSelectedPage(pageId);
    }
  };
  
  

  useEffect(() => {
    if (!editorRef.current) {
      // Initialize GrapeJS with improved configuration
      editorRef.current = grapesjs.init({
        container: "#gjs",
        fromElement: true,
        width: "auto",
        height: "calc(100vh - 100px)",
        storageManager: false,
        plugins: [gjsTable],
        pluginsOpts: { 'grapesjs-blocks-table' : { 'containerId' : '#gjs' } },
       
        blockManager: {
          appendTo: "#blocks",
        },
        panels: { defaults: [] },
        // storageManager: {
        //   type: "local",  // Saves to browser LocalStorage
        //   autosave: true,
        //   stepsBeforeSave: 1, // Save on every change
        // },
       

        pageManager: {
          pages: [
            {
              // without an explicit ID, a random one will be created
              id: '1',
              // CSS or a JSON of styles
             
              // HTML string or a JSON of components
              component: '<div class="my-el">Hello world!</div>',
            },
          ],
        },
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
    
   
      
      blockManager.add("table-block", {
        label: "Table",
        content: { type: "table" },
        category: "Basic",
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
        content: {
          tagName: "label",
          components: `
            <input type="checkbox" class="custom-checkbox" style="margin-right: 5px;" />
            <span>Checkbox</span>
          `,
          attributes: { class: "gjs-block-checkbox" },
          script: function () {
            const checkbox = this.querySelector(".custom-checkbox");
      
            // Load saved state (if any)
            const savedState = localStorage.getItem("checkbox-state");
            if (savedState === "checked") checkbox.checked = true;
      
            checkbox.addEventListener("change", () => {
              // Save state when checkbox is toggled
              localStorage.setItem("checkbox-state", checkbox.checked ? "checked" : "unchecked");
            });
      
            checkbox.addEventListener("mousedown", (e) => e.stopPropagation()); // Allow clicking
            checkbox.addEventListener("click", (e) => e.stopPropagation());
          },
        },
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
        label: `<img src=${ButtonImg} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">Button</p></div>`,
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


  

    
  
      
      // Register the Table Component
      editor.DomComponents.addType("dynamic-table", {
        model: {
          defaults: {
            tagName: "div",
            draggable: true,
            components: `
              <div class="table-container" style="padding: 10px; text-align: center;">
                <div style="margin-bottom: 10px;">
                  <button class="add-col" style="margin-right: 5px; padding: 5px 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer;">➕ Add Column</button>
                  <button class="add-row" style="padding: 5px 10px; background-color: #2196F3; color: white; border: none; cursor: pointer;">➕ Add Row</button>
                
                </div>
                <table border="1" style="width: 100%; border-collapse: collapse;">
                  <thead>
                    <tr>
                      <th style="padding: 5px; background-color: #f4f4f4;">
                        <input type="text" value="Column 1" class="col-name" style="border: none; background: transparent; text-align: center; width: 80%;" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 5px;">
                        <input type="text" value="Cell 1" class="cell" style="width: 100%; padding: 5px;" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            `,
            script: function () {
              const container = this;
              const table = container.querySelector("table");
              const addColBtn = container.querySelector(".add-col");
              const addRowBtn = container.querySelector(".add-row");
              const exportBtn = container.querySelector(".export-table");
      
              function updateEditorModel() {
                setTimeout(() => {
                  const html = container.innerHTML;
                  container.closest("[data-gjs-type='dynamic-table']").set("content", html);
                }, 100);
              }
      
              function addColumn(event) {
                event.preventDefault();
                const thead = table.querySelector("thead tr");
                const tbody = table.querySelectorAll("tbody tr");
      
                const colIndex = thead.children.length;
                const th = document.createElement("th");
                th.style.padding = "5px";
                th.style.backgroundColor = "#f4f4f4";
                th.innerHTML = `
                  <input type="text" value="Column ${colIndex + 1}" class="col-name" style="border: none; background: transparent; text-align: center; width: 80%;" />
                `;
      
                thead.appendChild(th);
      
                tbody.forEach(row => {
                  const td = document.createElement("td");
                  td.innerHTML = '<input type="text" class="cell" style="width: 100%; padding: 5px;" />';
                  row.appendChild(td);
                });
      
                updateEditorModel();
              }
      
              function addRow(event) {
                event.preventDefault();
                const tbody = table.querySelector("tbody");
                const cols = table.querySelector("thead tr").children.length;
                const row = document.createElement("tr");
      
                for (let i = 0; i < cols; i++) {
                  const td = document.createElement("td");
                  td.innerHTML = '<input type="text" class="cell" style="width: 100%; padding: 5px;" />';
                  row.appendChild(td);
                }
      
                tbody.appendChild(row);
                updateEditorModel();
              }
      
              function exportTable(event) {
                event.preventDefault();
                const editor = editorRef.current;
                const exportedHtml = editor.getHtml();
                const exportedCss = editor.getCss();
                console.log("Exported HTML:", exportedHtml);
                console.log("Exported CSS:", exportedCss);
      
                alert("Check Console for Exported Code!");
              }
      
              addColBtn.addEventListener("click", addColumn);
              addRowBtn.addEventListener("click", addRow);
              exportBtn.addEventListener("click", exportTable);
            },
          },
        },
      });
      
      // Add the block to BlockManager
      editor.BlockManager.add("dynamic-table", {
        label: "Dynamic Table",
        category: "Basic",
        content: { type: "dynamic-table" },
      });
      
      
      

      
      
      
      // Make canvas droppable
    
     
      // Make sure the canvas handles drops properly
      editor.on('component:selected', component => {
        const selectedComponent = component;
        if (selectedComponent) {
          // Ensure columns are droppable
         
            selectedComponent.set('droppable', true);
        
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




  const openCodeModal = () => {
    if (editorRef.current) {
      editorRef.current.Commands.run('core:open-code');
      setPreviewMode(!previewMode);
    }
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



  // const openCanvaPopup = () => {
  //   window.open("https://www.canva.com/design/DAGjkyuIaEs/u0hRRwtmCimhHnrdw5K4BQ/edit", "_blank", "width=1200,height=800");
  // };
  

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
                fontSize: "16px",
                cursor: "pointer",
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
                fontSize: "16px",
                cursor: "pointer"
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
                fontSize: "16px",
                cursor: "pointer"
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
                fontSize: "16px",
                cursor: "pointer"
              }}
              title="Redo"
            >
             <img src={Redo} height="18px" width="18px"/>
            </button>
            <button 
              onClick={openCodeModal}
              style={{ 
                background: "white", 
                borderRadius: "4px", 
                padding: "5px 10px", 
                border: "none", 
                color: "black", 
                fontSize: "14px",
                 cursor: "pointer"
              }}
              title="Get HTML with Styles"
            >
             Publish
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
            <div style={{ display:  'block'  }}></div>
          </div>
          
        
            
           
         
         
        </div>

        {/* Editor */}
        <div style={{width:"100%",backgroundColor:"white", position: "relative",}}>
        
      <div id="gjs" style={{ flexGrow: 1, height: "calc(100vh - 150px)", padding: "4px 20px", margin: 0, overflowY: "auto" }}></div>
      <Box
      sx={{
        width: "100%",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "10px",
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "2px solid #374151",
        position: "absolute",
        bottom: 0,
        left: 0,
        gap: "6px",
      }}
    >
      {pages.map((page) => (
        <Box key={page.id} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>

          <Box  sx={{
              backgroundColor: selectedPage === page.id ? "#0082cc" : "transparent",
              color: "white",
            
              borderRadius: "6px",
              border:"1px solid white",
              fontWeight: "bold",
              textTransform: "none",
              transition: "background 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: selectedPage === page.id ? "#005f99" : "#4b5563",
              },
            }}>
        
          <Button
            onClick={() => switchPage(page.id)}
            variant={selectedPage === page.id ? "contained" : "text"}

            sx={{
              boxShadow: "none",
              color: "white",
            }}
          >
            {page.id.replace("page-", "Page ")}
          </Button>

          {/* Delete Page Button */}
          {pages.length > 1 && (
            <IconButton
              onClick={() => deletePage(page.id)}
              size="small"
              sx={{
                color: "white",
                "&:hover": {
                  color: "#ff6b6b",
                },
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
          </Box>
        </Box>
      ))}

      {/* ➕ Add Page Button */}
      <Button
        onClick={addPage}
        variant="contained"
        sx={{
          backgroundColor: "#0082cc",
          color: "white",
          borderRadius: "6px",
          padding: "8px",
          minWidth: "36px",
          "&:hover": {
            backgroundColor: "#005f99",
          },
        }}
      >
        <AddIcon />
      </Button>
    </Box>

   

       
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

            <div style={{ padding: "16px", background: "#1e293b", color: "white",marginTop:"20px" }}>
  <h4 style={{ marginBottom:"20px" }}>📂 Saved Templates</h4>

  {templates.length > 0 ? (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {templates.map((template) => (
        <li key={template.id} style={{ marginBottom: "8px" }}>
          <button
            onClick={() => loadTemplate(template.id)}
            style={{
              background: selectedTemplate === template.id ? "#0082cc" : "#374151",
              color: "white",
              border: "none",
              padding: "8px",
              cursor: "pointer",
              marginRight: "6px",
              borderRadius: "4px",
            }}
          >
            {template.name}
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No templates saved</p>
  )}

  <button
    onClick={saveTemplate}
    style={{
      background: "#0082cc",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "6px",
    }}
  >
    💾 Save Current Template
  </button>
</div>

{/* <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
  <button
    onClick={openCanvaPopup}
    style={{
      background: "#0082cc",
      color: "white",
      border: "none",
      padding: "10px",
      cursor: "pointer",
      borderRadius: "6px",

    }}
  >
   🔗 Open Canva App
  </button>
</div> */}
          
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
