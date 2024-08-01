import { useState } from "react"
import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const General = () => {
    const [logo, setLogo] = useState([])
    const [favicon, setFavicon] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="flex flex-col my-4">
                    <div>
                        <p className="text-text font-semibold">Logo</p>
                    </div>
                    <div className="w-[150px] my-4 h-[150px] border overflow-hidden rounded-lg">
                        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dba7qvc2l/image/upload/v1715321990/Blue_and_Yellow_Modern_Education_Logo-removebg-preview_rpygrb.png" alt="" />
                    </div>
                    <FilePond
                        files={logo}
                        allowReorder={true}
                        onupdatefiles={setLogo}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </div>

                <div className="flex flex-col mt-4">
                    <div>
                        <p className="text-text font-semibold">Favicon</p>
                    </div>
                    <div className="w-[150px] my-4 h-[150px] border overflow-hidden rounded-lg">
                        <img className="w-full h-full object-cover" src="https://res.cloudinary.com/dba7qvc2l/image/upload/v1715321990/Blue_and_Yellow_Modern_Education_Logo-removebg-preview_rpygrb.png" alt="" />
                    </div>
                    <FilePond
                        files={favicon}
                        allowReorder={true}
                        onupdatefiles={setFavicon}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                </div>


            </div>

            <div>
                <button type="submit" className="bg-[#6B66F6] dark:bg-dark dark:text-white dark:border text-white px-10 py-2 rounded-md">Save</button>
            </div>
        </form>
    )
}

export default General
