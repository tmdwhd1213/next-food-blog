"use client";

import styles from "@/styles/image-picker.module.css";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer>();
  const imageInputRef = useRef<HTMLInputElement>();

  const handlePicker = () => imageInputRef.current.click();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage as string}
              alt="The image selected by user."
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
