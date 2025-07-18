import React, { useState } from 'react';
import { uploadFile } from '../../api/studyPlan';

export default function FileUploader({ uid, onUploaded }) {
  const [uploading, setUploading] = useState(false);

  const handleFiles = async (e) => {
    setUploading(true);
    const files = Array.from(e.target.files);
    const metas = [];
    for (let file of files) {
      const meta = await uploadFile(uid, file);
      metas.push(meta);
    }
    onUploaded(metas);
    setUploading(false);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFiles} disabled={uploading} />
      {uploading && <p>업로드 중…</p>}
    </div>
  );
}
