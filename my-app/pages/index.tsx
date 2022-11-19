import Editor, { Monaco } from "@monaco-editor/react"
import { EditorSettings } from "typescript"
import type monaco from 'monaco-editor'

const codeBlock = `line1
line2
line3
line4
line5`

const HomePage = () => {
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    const decorator = editor.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(3, 1, 3, 3),
          options: {
            isWholeLine: false,
            className: 'myContentClass',
            glyphMarginClassName: 'myGlyphMarginClass'
          }
        }
      ]
    )
    console.log(decorator)
    /*
    const decoration: any = {
      id: '1',
      range: new monaco.Range(1, 1, 1, 1),
      options: {
        className: "myLineDecoration",
      }
    }
    //console.log(editor.changeDecorations())
    editor.createDecorationsCollection([
      {
        range: new monaco.Range(1, 1, 1, 1),
        options: {
          hoverMessage: {
            value: 'Hello world',
          }
        }
      }
    ])
    */
  }

  return <>
  <Editor
  height={500}
  defaultLanguage="javascript"
  defaultValue={codeBlock}
  line={1}
  options={{
    readOnly: true,
    renderLineHighlight: "line",
    lineNumbers: "off"
  }}
  onMount={handleEditorDidMount}
  />
  </>
}
export default HomePage
