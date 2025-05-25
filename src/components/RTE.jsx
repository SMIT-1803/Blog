import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Editor
              apiKey="nwpln26zvq4ibplm8z8x7zb9ylzgqa1liztt4gfa5jmuz0p6"
              value={value || defaultValue}
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap preview anchor",
                  "searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onChange}
            />
          </div>
        )}
      />
    </div>
  );
}
