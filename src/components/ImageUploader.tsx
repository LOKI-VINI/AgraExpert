
import React, { useState, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations } from '@/lib/translations';
import { toast } from 'sonner';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  uploadedImage: string | null;
  language: string;
  isProcessing: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onImageUpload, 
  uploadedImage, 
  language,
  isProcessing 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = translations[language];

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    if (!file.type.match('image.*')) {
      toast.error(t.onlyImageFiles || "Please upload only image files");
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error(t.fileTooLarge || "File is too large. Maximum size is 5MB");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        onImageUpload(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const removeImage = () => {
    onImageUpload('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      {!uploadedImage ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileInput}
            ref={fileInputRef}
          />
          <Upload className="mx-auto h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-1">
            {t.dragAndDrop || "Drag and drop your image here"}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {t.orClickToUpload || "or click to upload (max. 5MB)"}
          </p>
          <Button variant="outline" type="button" className="border-green-600 text-green-700 hover:bg-green-50">
            {t.uploadImage || "Upload Image"}
          </Button>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden border border-gray-200">
          <img 
            src={uploadedImage} 
            alt="Uploaded plant" 
            className="w-full h-64 object-cover"
          />
          {isProcessing ? (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white">
                <Loader2 className="animate-spin h-10 w-10 mx-auto mb-2" />
                <p>{t.analysingImage || "Analyzing image..."}</p>
              </div>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-50 transition-colors"
              disabled={isProcessing}
            >
              <X className="h-5 w-5 text-red-600" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
