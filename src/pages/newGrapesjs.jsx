import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { StudioEditor } from '@grapesjs/studio-sdk/react';

export default function GrapejsSdk() {


  return (
    <StudioEditor
  options={{
    // ...
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
/>
  );
}
