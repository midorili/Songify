'use client';

import useUploadModal from "@/hooks/useUploadModal";

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';


import Modal from "./Modal";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {

  const [isLoading, setIsLoading] = useState();

  const uploadModal = useUploadModal();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null,
    }
  });

  const onChange = (open:boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {

  }

  return (
    <Modal
    title='Add a song'
    description='Upload an MP3 file'
    isOpen={uploadModal.isOpen}
    onChange={onChange}
    >
    Upload
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register('title', { required: true })}
          placeholder='Song title'
        />
         <Input
          id="Author"
          disabled={isLoading}
          {...register('author', { required: true })}
          placeholder='Author'
        />
        <div>
          <div className="pb-1">
            Select a song file
          </div>
          <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept=".mp3"
            id="song"
            {...register('song', { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">
            Select an image
          </div>
          <Input
            placeholder="test"
            disabled={isLoading}
            type="file"
            accept="image/*"
            id="image"
            {...register('image', { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  )
}

export default UploadModal;