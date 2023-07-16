import * as Style from '../styledComponents/ImageWriteStyle';
import { useMutation } from 'react-query';
import { postImage } from '../api/apis';
import { writeProps } from '../types/types';
import IconImageDelete from '../../assets/icons/icon-delete-image.svg';
import IconAddImage from '../../assets/icons/icon-add-lightgray.svg';

const ImageWrite = ({
  showPostImage,
  data,
  setData
}: Pick<writeProps, 'showPostImage' | 'data' | 'setData'>) => {
  // 이미지 등록 mutation
  const { mutate } = useMutation(postImage, {
    onSuccess: data => {
      console.log('게시글 이미지 등록에 성공했습니다.');

      setData(prevFormData => {
        const updatedFormData = {
          ...prevFormData,
          images: [...prevFormData.images, data]
        };
        return updatedFormData;
      });
    },
    onError: error => {
      console.error(error);
    }
  });

  // 이미지 추가
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgFormData = new FormData();
    if (e.target.files) {
      const img = e.target.files[0];
      imgFormData.append('img', img);
      mutate(imgFormData);
    }
  };

  // 이미지 삭제
  const handleImageDelete = (index: number) => {
    setData(prevData => {
      const updatedImages = [...prevData.images];
      updatedImages.splice(index, 1);
      return { ...prevData, images: updatedImages };
    });
  };

  return (
    <Style.ImageContainer>
      {showPostImage && (
        <ul className="file-upload">
          {data.images.length > 0 &&
            data.images.map((image, index) => (
              <li className="file-upload-preview" key={index}>
                <img src={image.img_path} alt={`이미지` + index} />
                <button
                  className="delete-btn"
                  onClick={() => handleImageDelete(index)}
                >
                  <img src={IconImageDelete} alt="이미지 삭제" />
                </button>
              </li>
            ))}
          <label htmlFor="file" className="file-upload-btn">
            <input
              type="file"
              name="file"
              id="file"
              multiple
              accept="image/*"
              onChange={e => handleAddImage(e)}
            />
            <img src={IconAddImage} alt="" />
            사진 추가
          </label>
        </ul>
      )}
    </Style.ImageContainer>
  );
};

export default ImageWrite;
