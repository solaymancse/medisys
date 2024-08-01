import JoditEditor from "jodit-react"
import { useRef, useState } from "react";

const CopyRight = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    console.log('content', content)

    return (
        <div className="mt-6">
            <JoditEditor
                ref={editor}
                value={content}
                // config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => setContent(newContent)}
            />

            <div className="mt-6">
                <button type="submit" className="bg-[#6B66F6] text-white px-10 py-2 rounded-md">Save</button>
            </div>
        </div>
    )
}

export default CopyRight
