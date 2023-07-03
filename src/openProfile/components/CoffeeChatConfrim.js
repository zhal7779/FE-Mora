import Swal from 'sweetalert2';

export const coffeeChatConfirm = (id, name, setCoffeChatStatus, setUserId, coffeeCahtRefetch) => {
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
      setCoffeChatStatus((prevData) => {
        return [...prevData, id];
      });
      setUserId(id);
      coffeeCahtRefetch();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      console.log('커피챗 취소');
    }
  });
};
