
import { rteProseMirror, tableComponent } from '@grapesjs/studio-sdk-plugins';

import '@grapesjs/studio-sdk/style';
import { StudioEditor } from '@grapesjs/studio-sdk/react';
import { source as propertyDetailOverview } from '../components/propertyDetailOverview'
import {source as LeaseRentalInfo} from '../components/LeaseRentalInfo'
import Tabs from "../assets/sidebarImages/tabs.svg"
export default function GrapejsSdk() {
  const onReady = (editor) => {
    console.log('Editor loaded', editor);
    window.editor = editor;

    // Enable Cell Editing for TD elements
   
  };

  const sources = [
    {
      id: 'property-overview',
      label: 'Property Overview',
      // class: 'fa fa-map-o',
      class: '',
     
      // label: 'b2s().outerHTML',
      content: propertyDetailOverview,
      category: 'Property',
      // order: 1
    },
    {
        id: 'LeaseRentalInfo',
        label: 'Lease Rental Info',
        // class: 'fa fa-map-o',
        class: '',
         
        // label: 'b2s().outerHTML',
        content: LeaseRentalInfo,
        category: 'Property',
        // order: 1
       
    }
]

  return (
    <StudioEditor
      options={{
        fromElement: true,
      
        plugins: [
          tableComponent.init({
            block: { category: 'Extra', label: 'My Table' },
          
          
          }),
        //   chartPlugin,
          rteProseMirror, // Rich Text Editor Plugin for better editing
        
           
       

          editor => {
            // editor.setDragMode('absolute');
            // Register a new component type
           

editor.Blocks.remove('linkBox'); // For built-in image block
editor.Blocks.remove('imageBox');
editor.Blocks.remove('form');  
editor.Blocks.remove('input'); 
editor.Blocks.remove('select'); 
editor.Blocks.remove('label'); 
editor.Blocks.remove('checkbox'); 
editor.Blocks.remove('radio'); 
editor.Blocks.remove('label'); 
editor.Blocks.remove('table'); 
editor.Blocks.remove('icon'); 



// editor.Components.addType("tabs-widget", {
//         model: {
//           defaults: {
//             tagName: "div",
//             attributes: { class: "tabs-widget" },
//             droppable: false,
//             components: `
//               <div class="tabs-widget" style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
//                 <div class="tabs-header" style="display: flex; background: #f8f9fa; padding: 10px; border-bottom: 1px solid #ddd; border-radius: 8px 8px 0 0;">
//                   <div class="tab-button active" data-tab="1">Tab 1</div>
//                   <div class="tab-button" data-tab="2">Tab 2</div>
//                   <div class="tab-button" data-tab="3">Tab 3</div>
//                 </div>
//                 <div class="tabs-content">
//                   <div class="tab-content tab-content-1 active" data-gjs-droppable="true">
//                     <p>Content for Tab 1. Drag elements here.</p>
//                   </div>
//                   <div class="tab-content tab-content-2" data-gjs-droppable="true" style="display: none;">
//                     <p>Content for Tab 2. Drag elements here.</p>
//                   </div>
//                   <div class="tab-content tab-content-3" data-gjs-droppable="true" style="display: none;">
//                     <p>Content for Tab 3. Drag elements here.</p>
//                   </div>
//                 </div>
//               </div>
//             `,
//             styles: `
//               .tab-button {
//                 padding: 10px 15px;
//                 cursor: pointer;
//                 border-radius: 6px;
//                 margin-right: 8px;
//                 transition: all 0.3s ease-in-out;
//                 font-weight: bold;
//                 background: transparent;
//               }
//               .tab-button.active {
//                 background: #007bff;
//                 color: white;
//               }
//               .tab-button:hover {
//                 background: rgba(0, 123, 255, 0.2);
//               }
//               .tab-content {
//                 padding: 20px;
//                 animation: fadeIn 0.3s ease-in-out;
//               }
//               @keyframes fadeIn {
//                 from { opacity: 0; transform: translateY(5px); }
//                 to { opacity: 1; transform: translateY(0); }
//               }
//             `,
//             script: function () {
//               const widget = this;
//               const buttons = widget.querySelectorAll(".tab-button");
//               const tabContents = widget.querySelectorAll(".tab-content");

//               buttons.forEach((button) => {
//                 button.addEventListener("click", function () {
//                   const tabNum = this.getAttribute("data-tab");

//                   // Remove 'active' class from buttons and add to clicked one
//                   buttons.forEach((btn) => btn.classList.remove("active"));
//                   this.classList.add("active");

//                   // Hide all tab contents and show only the selected one
//                   tabContents.forEach((content) => (content.style.display = "none"));
//                   widget.querySelector(`.tab-content-${tabNum}`).style.display = "block";
//                 });
//               });
//             },
//           },
//         },
//       });

//       // Add Tabs block
//       editor.Blocks.add("tabs", {
//         label: `<img src=${Tabs} className="left-sidebar-image" width="100%"/>  <p style="margin-top:4px">Tabs</p></div>`,
//         category: "Widgets",
//         content: { type: "tabs-widget" },
//         attributes: { class: "gjs-block-tabs" },
//       }); 
           
            editor.Components.addType('Table', {
              // Make the editor understand how to recognize the component from parsed HTML
              isComponent(el) {
                let result = '';
                const tag = el.tagName;
          
                if (tag == 'TD' || tag == 'TH') {
                  result = {
                    type: 'cell',
                    tagName: tag.toLowerCase()
                  };
          
                
                      result.components = `<div>${el.innerText}</div>`
                
                }
          
                return result;
              },
              // Provide the default properties of the component (more about it in the next section).
              model: {
                defaults: {
                  attributes: { 'data-custom-attr': 'my-value' },
                }
              }
            });

          

            editor.Blocks.add('Table', {
                label: 'Table',
                category: 'Extra',
              
                media: '<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>',
                content: `<div style="max-width: 1200px; margin: 40px auto; padding: 20px; background: #ffffff; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); border-radius: 12px;">
  <table style="width: 100%; border-collapse: collapse; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9fafb;">
    <thead>
      <tr style="background-color: #007bff; color: white;">
        <th style="padding: 16px; text-align: left; font-size: 18px; border: 1px solid #ddd;">
          Add Here
        </th>
        <th style="padding: 16px; text-align: left; font-size: 18px; border: 1px solid #ddd;">
          Column 2
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 14px; border: 1px solid #ddd; background-color: #ffffff;">Cell 1</td>
        <td style="padding: 14px; border: 1px solid #ddd; background-color: #ffffff;">Cell 2</td>
      </tr>
      <tr style="background-color: #f1f5f9;">
        <td style="padding: 14px; border: 1px solid #ddd;">Cell 3</td>
        <td style="padding: 14px; border: 1px solid #ddd;">Cell 4</td>
      </tr>
    </tbody>
  </table>
</div>
`,
                attributes: { class: "gjs-block-text" },
                
            
            });

        
              
              
         
        
            sources.forEach((s) => {
                editor.Blocks.add(s.id, {
                  label:s.label,
                  attributes: { class: `${s.class} block-full-width` },
                  content: s.content,
                  category: { label: s.category },
                })
              })
        
           
          }
        ],
        // pluginsOpts: {
        //     [chartPlugin]: {}
        //   },

        //   canvas: {
        //     styles: [
        //       'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
        //     ],
        //     scripts: [
        //       'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        //       'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js',
        //       'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js',
        //       'https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js'
        //     ],
        //   },
        layout: {
            default: {
              type: 'row',
              style: { height: '100%' },
              children: [
                {
                    type: 'sidebarLeft',
                    children: {
                      type: 'tabs',
                      value: 'blocks',
                      tabs: [
                        {
                          id: 'blocks',
                          label: 'Blocks',
                          children: { type: 'panelBlocks', style: { height: '100%' } },
                        },
                        // {
                        //   id: 'layers',
                        //   label: 'Layers',
                        //   children: { type: 'panelLayers', style: { height: '100%' } },
                        // },
                        {
                          id: 'pages',
                          label: 'Pages',
                          children: { type: 'panelPages', style: { height: '100%' } }, // ✅ Add this tab
                        },
                      ],
                    },
                  },
                {
                  type: 'column', // Wrap canvas + bottom panel
                  style: { height: '100%', flex: 1 },
                  children: [
                    {
                      type: 'canvasSidebarTop',
                      sidebarTop: { leftContainer: { buttons: [] } },
                    },
                   
                  ],
                },
                {
                  type: 'sidebarRight',
                  children: {
                    type: 'tabs',
                    value: 'styles',
                    tabs: [
                      {
                        id: 'styles',
                        label: 'Styles',
                        children: {
                          type: 'column',
                          style: { height: '100%' },
                          children: [
                            { type: 'panelSelectors', style: { padding: 5 } },
                            { type: 'panelStyles' },
                          ],
                        },
                      },
                     
                    ],
                  },
                },
              ],
            },
          },
          
        project: {
            type: 'web',
            // The default project to use for new projects
            default: {
              pages: [
                { name: 'Page 1', component: '<h1>First Page</h1>' },
                
              ]
            },
          }
      }}
      onReady={onReady}
    />
  );
}
