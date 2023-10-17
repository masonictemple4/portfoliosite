import { PageHeader } from '@/components/pageheader.component'
import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import { vim } from '@replit/codemirror-vim';
import { basicSetup } from 'codemirror';
import { Vim } from '@replit/codemirror-vim';


// TODO: Turn this into the default page.
// - With Document list
// - Manage & Create new Document
// - Lock functionality.
//
// Move most of this functionality to a detail page instead..

export default function Page() {


  const [code, setCode] = useState();


  const vimExt = vim({status: true})
  Vim.defineEx('write', 'w', (cm) => {
    console.log('saving')
    console.log(code)

  })

  return (
    <div className="w-full min-w-full max-w-full min-h-screen">
      <PageHeader gradientText="Private docs" />      
      <CodeMirror 
        className="w-full min-w-full max-w-full min-h-full min-h-screen h-screen"
        value={code} 
        theme={tokyoNight}
        extensions={[vimExt, basicSetup, StreamLanguage.define(go)]} 
        onChange={(value, viewUpdate) => {
          setCode(value);
        }}
      />
    </div>
  )
}
