import React from "react";
import ReactDOM from "react-dom";
import MDEditor from "@uiw/react-md-editor";

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

function MarkPage() {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div className="container">
      <h3>Auto</h3>
      <MDEditor height={200} value={value} onChange={setValue} />
      <div data-color-mode="light">
        <h3>Light</h3>
        <MDEditor height={200} value={value} onChange={setValue} />
      </div>
      <h3>Auto MDEditor.Markdown</h3>
      <MDEditor.Markdown
        style={{ padding: 15 }}
        source={value}
        linkTarget="_blank"
        // previewOptions={{
        //   linkTarget: "_blank"
        // }}
      />
    </div>
  );
}

export default MarkPage;