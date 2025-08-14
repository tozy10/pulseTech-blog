'use client'
import { useState } from "react"
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";

export default function AddPostForm() {
  const [editorContent, setEditorContent] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4 ">
      <div className="bg-white shadow-lg rounded-xl max-w-5xl w-full p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Post
        </h1>

        <form
          action="/api/posts"
          method="POST"
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter post title"
              className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition px-4 py-2"
              required
            />

            <label className="block">
              <span className="block text-sm font-medium text-gray-700 mb-1">Category</span>
              <select
                name="category"
                required
                className="block w-full border rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="fashion">Fashion</option>
                <option value="travel">Sport</option>
                <option value="technology">Technology</option>
              </select>
            </label>

            <div className="flex justify-center">
              <label className="">
                <SimpleEditor onUpdate={html => setEditorContent(html)} />
                {/* Hidden input to submit the editor content */}
                <input type="hidden" name="content" value={editorContent} />
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Write your topic description"
                rows={5}
                className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition px-4 py-2 resize-none"
              ></textarea>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                         file:rounded-full file:border-0 
                         file:text-sm file:font-semibold 
                         file:bg-blue-50 file:text-blue-700 
                         hover:file:bg-blue-100"
            />
          </div>

          {/* Published Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Published</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" name="published" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}
