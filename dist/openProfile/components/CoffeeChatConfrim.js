"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coffeeChatConfirm = void 0;
const sweetalert2_1 = __importDefault(require("sweetalert2"));
const coffeeChatConfirm = (id, name, setCoffeChatStatus, setUserId, coffeeCahtRefetch) => {
    sweetalert2_1.default.fire({
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
        }
        else if (result.dismiss === sweetalert2_1.default.DismissReason.cancel) {
            console.log('커피챗 취소');
        }
    });
};
exports.coffeeChatConfirm = coffeeChatConfirm;
