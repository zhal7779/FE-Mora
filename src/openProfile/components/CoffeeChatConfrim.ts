import Swal from 'sweetalert2';

export const coffeeChatConfirm = (
  id: string,
  name: string,
  setCoffeeChatStatus: React.Dispatch<React.SetStateAction<string[]>>,
  setUserId: (userId: string) => void
) => {
  Swal.fire({
    icon: 'question',
    title: `[${name}]님께 커피챗을 보내시겠습니까?`,
    showCancelButton: true,
    confirmButtonText: '보내기',
    confirmButtonColor: '#7353ea',
    cancelButtonText: '취소',
    cancelButtonColor: '#EEEAFE',
  }).then((result) => {
    if (result.isConfirmed) {
      setCoffeeChatStatus((prevData) => {
        return [...prevData, id];
      });
      setUserId(id);
    }
  });
};
