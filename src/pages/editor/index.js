import { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/mode/javascript/javascript';

export default function Page() {


  const [code, setCode] = useState('')

  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'go',
          theme: 'default',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        onChange={(editor, data, value) => {
        }}
      />
      
    </div>
  )
}
