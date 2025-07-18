import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'

export default function RichEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: value || '<p></p>',
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
  });

  return <EditorContent editor={editor} />;
}
