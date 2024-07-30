import { useState } from "react";

const useSavePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const savePost = async (description, selectedFiles) => {
    setLoading(true);
    setError(null);
    const base64Files = await Promise.all(
      selectedFiles.map((file) => handleFileToBase64(file))
    );
    const postData = {
      description,
      images: base64Files,
    };

    // Perform the POST request here
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setLoading(false);
        return { success: true };
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      return { success: false, error: error.message };
    }
  };

  return { savePost, loading, error };
};

export default useSavePost;
